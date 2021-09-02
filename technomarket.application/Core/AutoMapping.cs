using AutoMapper;
using technomarket.application.DTOs;
using technomarket.application.DTOs.Category;
using technomarket.application.DTOs.Product;
using technomarket.application.DTOs.ProductPhoto;
using technomarket.application.DTOs.SubCategory;
using technomarket.entity;

namespace technomarket.application.Core
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            // Edit Product
            CreateMap<Product, UpdateProductDto>()
                .ForMember(d => d.CategoryId, o => o.MapFrom(s => s.Category.Id))
                .ForMember(d => d.SubCategoryId, o => o.MapFrom(s => s.SubCategory.Id));
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

            CreateMap<Category, CategoryOptionsDto>()
                .ForMember(d => d.Text, o => o.MapFrom(s => s.Name))
                .ForMember(d => d.Value, o => o.MapFrom(s => s.Id));

            CreateMap<SubCategory, SubCategoryOptionsDto>()
                .ForMember(d => d.Text, o => o.MapFrom(s => s.Name))
                .ForMember(d => d.Value, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Categoryid, o => o.MapFrom(s => s.Category.Id));
        }
    }
}