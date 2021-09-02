using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using technomarket.application.DTOs.Product;
using technomarket.application.Products;
using technomarket.entity;

namespace technomarket.API.Controllers
{
    public class ProductsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            return HandleResult(await Mediator.Send(new ProductList.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(Guid id)
        {
            return HandleResult(await Mediator.Send(new ProductDetails.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromForm] CreateProductDto product)
        {
            return HandleResult(await Mediator.Send(
                new CreateProduct.Command { Product = product }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteProduct.Command { Id = id }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProduct(Guid id, UpdateProductDto product)
        {
            product.Id = id;
            return HandleResult(await Mediator.Send(
                new UpdateProduct.Command { Product = product }));
        }

        [HttpGet("edit/{id}")]
        public async Task<IActionResult> GetProductForEdit(Guid id)
        {
            return HandleResult(await Mediator.Send(new ProductDetailsForEdit.Query { Id = id }));
        }
    }
}