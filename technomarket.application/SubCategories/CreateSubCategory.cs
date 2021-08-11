using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using technomarket.application.Core;
using technomarket.application.DTOs.SubCategory;
using technomarket.data;
using technomarket.entity;

namespace technomarket.application.SubCategories
{
    public class CreateSubCategory
    {
        public class Command : IRequest<Result<Unit>>
        {
            public CreateSubCategoryDto SubCategory { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.SubCategory).SetValidator(new SubCategoryValidator());
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
                var category = await _context.Categories.FindAsync(request.SubCategory.Category);

                if (category == null) return null;

                var subCategory = new SubCategory()
                {
                    Name = request.SubCategory.Name,
                    Category = category
                };

                _context.SubCategories.Add(subCategory);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create SubCategory");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}