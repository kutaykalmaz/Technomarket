using System;
using System.Collections.Generic;

namespace technomarket.application.DTOs
{
    public class CategoryWithProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<SubCategoryDto> SubCategories { get; set; }
        public ICollection<ProductDto> Products { get; set; }
    }
}