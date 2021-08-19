using System;
using System.Collections.Generic;

namespace technomarket.application.DTOs
{
    public class CategoryDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<SubCategoryWithProductDto> SubCategories { get; set; }
    }
}