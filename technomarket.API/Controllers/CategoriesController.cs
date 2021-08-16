using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using technomarket.application.Categories;
using technomarket.application.DTOs.Category;
using technomarket.entity;

namespace technomarket.API.Controllers
{
    public class CategoriesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            return HandleResult(await Mediator.Send(new CategoryList.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategory(Guid id)
        {
            return HandleResult(await Mediator.Send(new CategoryDetails.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategory(CategoryCreateDto category)
        {
            return HandleResult(await Mediator.Send(
                new CreateCategory.Command { Category = category }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(Guid id, CategoryCreateDto category)
        {
            category.Id = id;

            return HandleResult(await Mediator.Send(
                new UpdateCategory.Command { Category = category }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteCategory.Command{ Id = id }));
        }

        [HttpGet("options")]
        public async Task<IActionResult> CategoryOptions()
        {
            return HandleResult(await Mediator.Send(new CategoryOptions.Query()));
        }
    }
}