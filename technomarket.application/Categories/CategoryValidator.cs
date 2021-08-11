using FluentValidation;
using technomarket.application.DTOs.Category;
using technomarket.entity;

namespace technomarket.application.Categories
{
    public class CategoryValidator : AbstractValidator<CategoryCreateDto>
    {
        public CategoryValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
        }
    }
}