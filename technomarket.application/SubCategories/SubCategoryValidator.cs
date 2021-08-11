using FluentValidation;
using technomarket.application.DTOs.SubCategory;

namespace technomarket.application.SubCategories
{
    public class SubCategoryValidator : AbstractValidator<CreateSubCategoryDto>
    {
        public SubCategoryValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Category).NotEmpty();
        }
    }
}