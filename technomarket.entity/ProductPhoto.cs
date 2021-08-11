namespace technomarket.entity
{
    public class ProductPhoto
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public Product Product { get; set; }
    }
}