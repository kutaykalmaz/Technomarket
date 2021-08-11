using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.data;

namespace technomarket.application.SubCategories
{
    public class DeleteSubCategory
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
                var subCategory = await _context.SubCategories
                    .Include(x => x.Products)
                    .FirstOrDefaultAsync(c => c.Id == request.Id);

                if (subCategory == null) return null;

                if (subCategory.Products.Count > 0) return Result<Unit>.Failure("Bazı ürünler bu kategoriye ait olduğu için silemezsiniz.");

                _context.SubCategories.Remove(subCategory);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Kategori silinirken hata oluştu.");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}