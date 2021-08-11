using System;
using System.Collections.Generic;

namespace technomarket.application.DTOs
{
    public class SubCategoryWithProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string CategoryName { get; set; }
        public ICollection<ProductBasicDto> Products { get; set; }
    }
}