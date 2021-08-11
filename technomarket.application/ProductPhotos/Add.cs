using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using technomarket.application.Core;
using technomarket.application.DTOs.ProductPhoto;
using technomarket.application.Interfaces;
using technomarket.data;
using technomarket.entity;

namespace technomarket.application.ProductPhotos
{
    public class Add
    {
        public class Command : IRequest<Result<Unit>>
        {
            public ICollection<IFormFile> Photos { get; set; }
            public Guid ProductId { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.ProductId).NotEmpty();
                RuleFor(x => x.Photos).NotEmpty();
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
                var product = await _context.Products.FindAsync(request.ProductId);

                if (product == null) return null;

                foreach (var photo in request.Photos)
                {
                    var photoUploadResult = await _photoAccessor.AddPhoto(photo);

                    var productPhoto = new ProductPhoto
                    {
                        Url = photoUploadResult.Url,
                        Id = photoUploadResult.PublicId,
                        Product = product
                    };

                    _context.ProductPhotos.Add(productPhoto);
                }

                var result = await _context.SaveChangesAsync() > 0;

                if (result) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Problem adding photo");
            }
        }
    }
}