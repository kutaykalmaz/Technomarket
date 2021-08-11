using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using technomarket.application.Core;
using technomarket.application.DTOs.Product;
using technomarket.data;
using technomarket.entity;

namespace technomarket.application.Products
{
    public class UpdateProduct
    {
        public class Command : IRequest<Result<Unit>>
        {
            public UpdateProductDto Product { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Product).SetValidator(new UpdateProductValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = await _context.Products.FindAsync(request.Product.Id);
                var category = await _context.Categories.FindAsync(request.Product.CategoryId);
                var subCategory = await _context.SubCategories.FindAsync(request.Product.SubCategoryId);

                if (product == null || category == null || subCategory == null) return null;


                #region MapSection
                product.Name = request.Product.Name;
                product.Price = request.Product.Price;
                product.Quantity = request.Product.Quantity;
                product.IsApproved = request.Product.IsApproved;
                product.IsHome = request.Product.IsHome;
                product.Description = request.Product.Description;
                product.Category = category;
                product.SubCategory = subCategory;
                #endregion

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to update product");

                return Result<Unit>.Success(Unit.Value);

            }
        }
    }
}