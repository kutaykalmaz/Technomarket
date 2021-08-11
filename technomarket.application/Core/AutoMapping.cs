using AutoMapper;
using technomarket.application.DTOs;
using technomarket.application.DTOs.ProductPhoto;
using technomarket.entity;

namespace technomarket.application.Core
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            // Edit Product
            CreateMap<Product, Product>();
            // Category List
            CreateMap<Category, CategoryDto>();
            CreateMap<SubCategory, SubCategoryDto>();
            CreateMap<Category, CategoryWithProductDto>();
            // List and Details Product
            CreateMap<Product, ProductDto>()
                .ForMember(d => d.Category, o => o.MapFrom(s => s.Category.Name))
                .ForMember(d => d.SubCategory, o => o.MapFrom(s => s.SubCategory.Name));

            // Edit Category
            CreateMap<Category, Category>();

            CreateMap<SubCategory, SubCategoryWithProductDto>()
                .ForMember(d => d.CategoryName, o => o.MapFrom(s => s.Category.Name));
            
            CreateMap<Product, ProductBasicDto>();
            
            CreateMap<ProductPhoto, ProductPhotoDto>();
        }
    }
}