using System;
using System.Collections.Generic;
using technomarket.application.DTOs.ProductPhoto;
using technomarket.entity;

namespace technomarket.application.DTOs
{
    public class ProductBasicDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsApproved { get; set; }
        public bool IsHome { get; set; }
        public string Description { get; set; }
        public ICollection<ProductPhotoDto> Photos { get; set; }
    }
}