using Microsoft.EntityFrameworkCore;
using technomarket.entity;

namespace technomarket.data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<ProductPhoto> ProductPhotos { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<SubCategory>()
                .HasOne(c => c.Category)
                .WithMany(c => c.SubCategories)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<ProductPhoto>()
                .HasOne(p => p.Product)
                .WithMany(p => p.Photos)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}