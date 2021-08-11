using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.application.Interfaces;
using technomarket.data;

namespace technomarket.application.Products
{
    public class DeleteProduct
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
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
                var product = await _context.Products
                    .Include(p => p.Photos)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                if (product == null) return null;

                foreach (var photo in product.Photos)
                {
                    var result = await _photoAccessor.DeletePhoto(photo.Id);

                    if (result == null) return Result<Unit>.Failure("Problem deleting photo from Cloudinary");
                }

                _context.Products.Remove(product);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Problem product from API");

            }
        }
    }
}