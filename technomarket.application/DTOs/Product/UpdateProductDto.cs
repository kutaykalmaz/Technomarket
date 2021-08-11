using System;

namespace technomarket.application.DTOs.Product
{
    public class UpdateProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsApproved { get; set; }
        public bool IsHome { get; set; }
        public string Description { get; set; }
        public Guid CategoryId { get; set; }
        public Guid SubCategoryId { get; set; }
    }
}