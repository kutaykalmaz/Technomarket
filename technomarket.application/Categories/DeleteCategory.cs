using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.data;

namespace technomarket.application.Categories
{
    public class DeleteCategory
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var category = await _context.Categories
                    .Include(x => x.Products)
                    .FirstOrDefaultAsync(c => c.Id == request.Id);
                    

                
                if (category == null) return null;

                if (category.Products.Count > 0) return Result<Unit>.Failure("Bazı ürünler bu kategoriye ait olduğu için silemezsiniz.");

                _context.Categories.Remove(category);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Kategori silinirken hata oluştu.");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}