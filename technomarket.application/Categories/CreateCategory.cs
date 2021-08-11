using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using technomarket.application.Core;
using technomarket.application.DTOs.Category;
using technomarket.data;
using technomarket.entity;

namespace technomarket.application.Categories
{
    public class CreateCategory
    {
        public class Command : IRequest<Result<Unit>>
        {
            public CategoryCreateDto Category { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Category).SetValidator(new CategoryValidator());
            }
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
                var category = new Category() {  
                    Id = request.Category.Id,
                    Name = request.Category.Name
                };

                _context.Categories.Add(category);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create product");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}