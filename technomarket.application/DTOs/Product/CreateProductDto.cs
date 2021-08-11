using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using technomarket.entity;

namespace technomarket.application.DTOs.Product
{
    public class CreateProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsApproved { get; set; }
        public bool IsHome { get; set; }
        public string Description { get; set; }
        public List<IFormFile> Files { get; set; }
        public Guid CategoryId { get; set; }
        public Guid SubCategoryId { get; set; }
    }
}