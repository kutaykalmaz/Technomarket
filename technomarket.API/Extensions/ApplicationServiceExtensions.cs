using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using technomarket.application.Core;
using technomarket.application.Interfaces;
using technomarket.application.Products;
using technomarket.data;
using technomarket.infrastructure.Photos;

namespace technomarket.API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration _configuration)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });

            // Database Configurations
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(_configuration.GetConnectionString("DefaultConnection"));
            });
            

            // Cors Policy
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .WithOrigins("http://localhost:3000");
                });
            });

            // MediatR for CQRS Pattern
            services.AddMediatR(typeof(ProductList.Handler).Assembly);
            // AutoMapper
            services.AddAutoMapper(typeof(AutoMapping).Assembly);

            services.AddScoped<IPhotoAccessor, PhotoAccessor>();
            // Cloudinary settings
            services.Configure<CloudinarySettings>(_configuration.GetSection("Cloudinary"));

            return services;
        }
    }
}