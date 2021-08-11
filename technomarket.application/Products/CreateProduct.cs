using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using technomarket.application.Core;
using technomarket.application.DTOs.Product;
using technomarket.application.Interfaces;
using technomarket.data;
using technomarket.entity;

namespace technomarket.application.Products
{
    public class CreateProduct
    {
        public class Command : IRequest<Result<Unit>>
        {
            public CreateProductDto Product { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Product).SetValidator(new ProductValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IPhotoAccessor _photoAccessor;

            public Handler(DataContext context, IPhotoAccessor photoAccessor)
            {
                _context = context;
                _photoAccessor = photoAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = new Product();
                var photos = new List<ProductPhoto>();


                foreach (var file in request.Product.Files)
                {
                    var photoUploadResult = await _photoAccessor.AddPhoto(file);

                    var photo = new ProductPhoto
                    {
                        Url = photoUploadResult.Url,
                        Id = photoUploadResult.PublicId
                    };

                    photos.Add(photo);
                }

                #region MapSection
                product.Name = request.Product.Name;
                product.Price = request.Product.Price;
                product.Quantity = request.Product.Quantity;
                product.IsApproved = request.Product.IsApproved;
                product.IsHome = request.Product.IsHome;
                product.Description = request.Product.Description;
                product.Photos = photos;
                product.Category = await _context.Categories.FindAsync(request.Product.CategoryId);
                product.SubCategory = await _context.SubCategories.FindAsync(request.Product.SubCategoryId);
                #endregion

                _context.Products.Add(product);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create product");

                return Result<Unit>.Success(Unit.Value);

            }
        }


    }
}