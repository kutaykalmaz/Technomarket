using System;
using System.Collections.Generic;

namespace technomarket.entity
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsApproved { get; set; }
        public bool IsHome { get; set; }
        public string Description { get; set; }
        public ICollection<ProductPhoto> Photos { get; set; }
        public Category Category { get; set; }
        public SubCategory SubCategory { get; set; }

    }
}