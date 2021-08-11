using System;

namespace technomarket.application.DTOs.SubCategory
{
    public class CreateSubCategoryDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid Category { get; set; }
    }
}