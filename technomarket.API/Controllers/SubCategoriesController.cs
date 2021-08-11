using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using technomarket.application.DTOs.SubCategory;
using technomarket.application.SubCategories;

namespace technomarket.API.Controllers
{
    public class SubCategoriesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetSubCategories()
        {
            return HandleResult(await Mediator.Send(new SubCategoryList.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubCategory(Guid id)
        {
            return HandleResult(await Mediator.Send(new SubCategoryDetails.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateSubCategory(CreateSubCategoryDto subCategory)
        {
            return HandleResult(await Mediator.Send(new CreateSubCategory.Command { SubCategory = subCategory }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSubCategory(Guid id, CreateSubCategoryDto subCategory)
        {
            subCategory.Id = id;

            return HandleResult(await Mediator.Send(new UpdateSubCategory.Command { SubCategory = subCategory }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteSubCategory.Command { Id = id }));
        }
    }
}