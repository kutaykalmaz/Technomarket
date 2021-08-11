using System;
using System.Collections.Generic;

namespace technomarket.entity
{
    public class SubCategory
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}