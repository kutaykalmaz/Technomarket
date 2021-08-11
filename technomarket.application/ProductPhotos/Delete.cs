using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.application.Interfaces;
using technomarket.data;

namespace technomarket.application.ProductPhotos
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public ICollection<string> Photos { get; set; }
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
                foreach (var item in request.Photos)
                {
                    var photo = await _context.ProductPhotos
                        .FirstOrDefaultAsync(p => p.Id == item);

                    if (photo == null) continue;

                    var result = await _photoAccessor.DeletePhoto(item);

                    if (result == null) Result<Unit>.Failure("Fotoğraf silinirken hata meydana geldi. (Cloudinary)");

                    _context.ProductPhotos.Remove(photo);

                }

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Fotoğraf silinirken hata meydana geldi. (API)");
            }
        }
    }
}