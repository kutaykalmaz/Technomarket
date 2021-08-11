using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using technomarket.entity;

namespace technomarket.data
{
    // Bilgisayar(Apple), Telefon(Apple), Televizyon(Samsung, LG), Akıllı Saat(Apple), Kulaklık(Apple)
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Products.Any() && !context.Categories.Any() &&
                !context.SubCategories.Any())
            {
                var categories = new List<Category>
                {
                    new Category
                    {
                        Name = "Bilgisayar"
                    },
                    new Category
                    {
                        Name = "Telefon"
                    },
                    new Category
                    {
                        Name = "Televizyon"
                    },
                    new Category
                    {
                        Name = "Akıllı Saat"
                    },
                    new Category
                    {
                        Name = "Kulaklık"
                    }
                };

                var subCategories = new List<SubCategory>
                {
                    new SubCategory
                    {
                        Name = "Apple",
                        Category = categories[0] // Bilgisayar
                    },
                    new SubCategory
                    {
                        Name = "Apple",
                        Category = categories[1] // Telefon
                    },
                    new SubCategory
                    {
                        Name = "Samsung",
                        Category = categories[2] // Televizyon
                    },
                    new SubCategory
                    {
                        Name = "LG",
                        Category = categories[2] // Televizyon
                    },
                    new SubCategory
                    {
                        Name = "Apple",
                        Category = categories[3] // Akıllı Saat
                    },
                    new SubCategory
                    {
                        Name = "Apple",
                        Category = categories[4] // Kulaklık
                    }
                };


                var products = new List<Product>
                {
                    new Product
                    {
                        Name = "Apple iPhone 11 64GB Akıllı Telefon Yeşil",
                        Price = 7599,
                        Quantity = 50,
                        Description = "Apple'ın en hızlı biyonik çipi, bugüne kadar üretilmiş en dayanıklı telefon camı ile bir araya geliyor ve ortaya iPhone 11 64 GB efsanesi çıkıyor. Çift kamera sistemi ve gün boyu süren şarj özelliği ile bir iPhone'dan çok daha fazlası bu cihazda buluşuyor.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "yofv69kj7vkz5ptncj5t",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077798/125077798_0_MC/47116592.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "71fvk159ntmmopoivttv",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077798/125077798_1_MC/47116593.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "4w4vhi10c3oru06wlx4o",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077798/125077798_3_MC/47116595.jpg",
                            }
                        },
                        Category = categories[1],
                        SubCategory = subCategories[1]
                    },
                    new Product
                    {
                        Name = "Apple iPhone 11 64GB Akıllı Telefon Siyah",
                        Price = 7599,
                        Quantity = 50,
                        Description = "Akıllı telefonunuz ile kusursuz fotoğraflar ve videolar çekmek istiyorsanız, iPhone 11 64GB siyah modelini satın alabilirsiniz. Bu model, özellikle cep telefonunda kameraya önem veren kullanıcılar için biçilmiş kaftan.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "6wi3mvhuefox1rgr037u",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077793/125077793_0_MC/47116308.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "664lqam5fyx626hbrhg6",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077793/125077793_1_MC/47116309.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "a13r1xpsjmf1thfwnno1",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077793/125077793_3_MC/47116311.jpg",
                            }
                        },
                        Category = categories[1],
                        SubCategory = subCategories[1]
                    },
                    new Product
                    {
                        Name = "Apple iPhone 12 64GB Akıllı Telefon Mavi",
                        Price = 10699,
                        Quantity = 50,
                        Description = "Fotoğraf çekmek sizin için bir hobiden ziyade bir tutkuysa, sahip olduğunuz telefonun size dijital dünyada özgürlük kazandıracak teknik özellikler sunmasını bekliyorsanız, iOS işletim sisteminin beraberinde getirdiği gelişmiş imkânları deneyimlemek için hevesleniyorsanız, Apple iPhone 12 64 GB Blue Akıllı Telefon ile tanışmalısınız. Geliştirdiği her yeni iPhone modeli ile teknoloji dünyasında fırtınalar estiren Apple’ın, fotoğraf çekim becerileri başta olmak üzere birçok yönden geliştirdiği yeni iPhone, akıllı cep telefonlarına olan yaklaşımınızı baştan aşağı değiştirmeye geliyor. Tasarımından ekranına, dâhilî donanımından kablosuz hızlı şarj olanaklarına dek birçok yönüyle kendi sınıfında farklı bir noktaya kendini konumlandıran telefon, iOS platformunu keşfetmeniz için ideal çözümlerden biri.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "a1jp3uu5f59lb2crg21e",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077814/125077814_0_MC/47111213.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "rr9hha2vlw30kdoffxzk",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077814/125077814_1_MC/47111214.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "sj2cnktss5rpsxbvzd27",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077814/125077814_2_MC/47111215.jpg",
                            }
                        },
                        Category = categories[1],
                        SubCategory = subCategories[1]
                    },
                    new Product
                    {
                        Name = "Apple iPhone 12 64GB Akıllı Telefon Siyah",
                        Price = 10699,
                        Quantity = 50,
                        Description = "Akıllı telefon kullanımı yaygın hale geldikçe belirli özellikler önem kazanır. Yüksek depolama alanına sahip, uzun süreli kullanım imkanı tanıyan ve kamerasıyla harikalar yaratan akıllı telefonların başında iPhone 12 64 GB modeli gelir. 64 GB depolama alanı sayesinde ihtiyaç duyduğunuz dosyaların tamamını rahatlıkla depolamanızı sağlayan cihazın aynı zamanda pek çok avantajlı özelliğinden yararlanabilirsiniz. Super Retina XDR ekran teknolojisi ile tüm görselleri en iyi kalitede görüntüleme imkanı sağlar. Aynı zamanda telefonun sahip olduğu gelişmiş kamera sistemi sayesinde geniş açılı ve ultra geniş açılı fotoğraflar çekebilirsiniz. Tasarım noktasında da son derece orijinal detaylar barındıran cihazın donanımsal olduğu kadar yazılımsal da önemli özellikleri bulunur.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "ndrh9axbu8exrxjw6j3s",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077811/125077811_0_MC/47111153.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "ik5x1inyjkxzd9urzx59",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077811/125077811_1_MC/47111154.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "w78dt804hd3lvb1322oq",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077811/125077811_2_MC/47111155.jpg",
                            }
                        },
                        Category = categories[1],
                        SubCategory = subCategories[1]
                    },
                    new Product
                    {
                        Name = "Apple iPhone 12 Pro Max 128GB Graphite Akıllı Telefon",
                        Price = 16499,
                        Quantity = 50,
                        Description = "Akıllı telefon dünyasına her ürünüyle yeni bir soluk kazandıran Apple, iPhone serisiyle sınırları zorlamaya devam ediyor. Apple iPhone 12 Pro Max 128 GB graphite akıllı telefon modelinin her alanda üstün performansı sizlere benzersiz bir deneyim kazandırıyor. iPhone serisinin en yeni teknolojilerle donatılan modeli ultra net görüntü kalitesi, son derece akıcı bir kullanım, estetik tasarım ve daha pek çok özelliğiyle her kullanımda fark yaratıyor. Bu avantajlı akıllı telefon modeliyle her alanda öne geçmek mümkün. Siz de beklentilerinizin ötesine geçen bir telefon arayışındaysanız, Apple iPhone 12 Pro Max tam size göre!",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "j00n22y6uwo1m10xr5wa",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077853/125077853_0_MC/47110828.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "vt3t4uomj2tilg4qvv2y",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077853/125077853_1_MC/47110829.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "9lzu3mqta55okzbeph8a",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077853/125077853_2_MC/47110830.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "csuok1qyr77v2heq9qlr",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077853/125077853_3_MC/47110831.jpg",
                            }
                        },
                        Category = categories[1],
                        SubCategory = subCategories[1]
                    },
                    new Product
                    {
                        Name = "Apple MacBook Pro 16\" Intel Core i9 2.3GHz 1TB Space Grey Notebook MVVK2TU/A",
                        Price = 29399,
                        Quantity = 25,
                        Description = "Teknoloji devi Apple, MacBook serisiyle beklentilerinizin ötesine geçmeye devam ediyor. En iyisini hedefleyen kullanıcılar için özel olarak tasarlanan serinin en üst segmentleri arasında yer alan Apple MacBook Pro 16”, bugüne kadarki diz üstü bilgisayar kavramını yeniden şekillendiriyor. Her kullanımda farkını ortaya koymayı başaran yeni nesil özelliklerle tüm işlemler çok daha hızlı ve keyifli bir hale bürünüyor. Sizlere sadece cihazın büyüleyici ekran tasarımı, üstün performans sunan donanımı, benzersiz grafikleri, yüksek pil kapasitesi ve geniş depolama alanının keyfini sürmek kalıyor. Bu üst düzey dizüstü bilgisayarla farklı bir deneyime hazır olun!",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "otaeoyyr4z2psowchg0b",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125034027/125034027_0_MC/35243352.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "sp5jwza2ipcqubalxovf",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125034027/125034027_3_MC/35243355.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "ct95owu4gwuf1hrm8xsg",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125034027/125034027_5_MC/8829352738866_1578553683545.jpg",
                            }
                        },
                        Category = categories[0],
                        SubCategory = subCategories[0]
                    },
                    new Product
                    {
                        Name = "Apple Macbook Air MGN63TU/A M1 8C 8GB 256 GB SDD 13\" Uzay Grisi Dizüstü Bilgisayar",
                        Price = 10999,
                        Quantity = 25,
                        Description = "Apple MacBook Air uzay grisi MGN63TU/A ile muhteşem PC performansı, yüksek pil ömrü ve Apple’ın kendine has tasarım farkı yanınızda! Yüksek ekran çözünürlüğü sayesinde film, video ve benzeri görsel içeriklere de mükemmelen erişmenizi sağlayan MGN63TU/A pazara giriş yaptığından bu yana sayısız Apple tutkununun da dikkatini çekiyor. İster işlerinizi sürdürmek isteyen bir profesyonel olun ister internette gezinmenin tadını çıkarmak isteyin, MacBook Air MGN63TU/A uzay grisi ile tüm beklentileriniz karşılanacak. Apple’ın harika işlemci ailesi ile tanışmak için de bu laptop modelleri uzun yıllar favori dizüstünüz olmaya aday. Yüksek güvenlik standartları ile de veri gizliliği ve daha fazlasını son derece önemseyen bu laptoplar ile canlı toplantılarınıza katılın, çevrim içi etkinliklere dahil olun ya da oyun oynama heyecanınıza kaldığınız yerden devam edin. Saymak bitmeyecek özelliklere sahip bu modellere Teknosa farkı ile ulaşmak için siz de hemen incelemelere başlayabilirsiniz.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "dy7lu0m5j9u8fj865yg2",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125036113/125036113_0_MC/48345076.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "npcoxd1wnwxw1d2hnvoi",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125036113/125036113_1_MC/48412702.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "ersew7dzgt1tseiw5xja",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125036113/125036113_3_MC/48345079.jpg",
                            }
                        },
                        Category = categories[0],
                        SubCategory = subCategories[0]
                    },
                    new Product
                    {
                        Name = "Samsung 50TU8500 50\" 125 Ekran 4K CRYSTAL UHD TV",
                        Price = 6499,
                        Quantity = 25,
                        Description = "Samsung Ultra HD 4K 124 cm televizyon; yüksek çözünürlüklü görüntüleri, akıllı teknolojilerle bir arada sunar. Bu sayede televizyon daha verimli ve keyifli hale gelir. Ürün, Samsung’un Tizen ve akıllı ev sistemi olan SmartThings özelliklerini destekler. Tüm bu teknolojiler televizyonun daha akıllı hale gelmesini sağlar. Ayrıca Samsung, tek tuşla dijital platformlardaki film ve dizilere ulaşmak gibi birçok özelliğiyle pratik kullanım sunar. Bu sayede en sevdiğiniz yayınları canlı ve parlak görüntülerle takip etmenize yardımcı olur. LED teknolojisine sahip olan televizyon, canlı ve net renkleri ışık saçan diyotlar vasıtasıyla ekrana yansıtır. Buna ek olarak da marka tüm dünyada kullanılan en iyi görüntü teknolojilerini destekler. Ayrıca markaya özel görüntü teknolojileri de mevcuttur. Görüntü teknolojisini, kaliteli ses sistemiyle tamamlayarak kaliteli bir seyir deneyimi yaşamanızı hedefler. Aynı zamanda bağlantı noktalarıyla da seyir deneyiminizi bir üst düzeye taşır.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "ollk6n4u6w0hz3pzbs8o",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/110019335/110019335_0_MC/43976886.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "ix8sfcg87z7zjzh7pkpt",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/110019335/110019335_1_MC/44166922.png",
                            },
                            new ProductPhoto
                            {
                                Id = "o3l94tkqk65wor9nuzyk",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/110019335/110019335_2_MC/44166923.png",
                            }
                        },
                        Category = categories[2],
                        SubCategory = subCategories[2]
                    },
                    new Product
                    {
                        Name = "LG 75NANO906NA 75\" 190 Ekran UHD Nanocell TV",
                        Price = 19999,
                        Quantity = 15,
                        Description = "Saf Renkler Saf RGB renkleri gerçekçi görüntü kalitesinin anahtarıdır. NanoCell Teknolojisi, donuk renkleri filtreleyerek ve RGB spektrumunun saflığını artırarak arındırma renkleri oluşturan nanoparçacıklar uygular. Saf Renkler Tarafından Gerçekleştirilen Gerçek 4K NanoCell TV, uluslararası standart CM değerini karşılayan bir Gerçek 4K sunar. NanoCell Teknolojisi tarafından tamamlanan Gerçek 4K çözünürlüğü ile daha parlak ve net görsel deneyimi keşfedin.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "dfxqg2ubqes8a3jwf9op",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/110019364/110019364_0_MC/46320068.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "ljasc4mvydsb24v3fbzt",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/110019364/110019364_1_MC/45536924.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "6zg4pw7o7pop4u2o8r80",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/110019364/110019364_3_MC/45536932.jpg",
                            }
                        },
                        Category = categories[2],
                        SubCategory = subCategories[3]
                    },
                    new Product
                    {
                        Name = "Apple Watch Series 3 42MM Uzay Grisi Alüminyum Kasa Siyah Spor Kordon MTF32TU/A",
                        Price = 2149,
                        Quantity = 30,
                        Description = "Apple Watch S3 42mm Space Grey Alüminyum Kasa ve Black Sport Kordon (MTF32TU/A), sağlık değerlerinizi görüntüleyebileceğiniz, günün her saatinde aktif kalabileceğiniz, yeni nesil bir akıllı saat. Antrenmanlarınızı takip edebilmenize olanak tanıyan Apple Watch S3, gün içerisinde sağlık değerlerinizle ilgili önemli bilgilendirmeler de yapar. Sağlık ve aktivite bilgilendirmelerinin yanı sıra bağlı akıllı telefonunuza gelen çağrıları ve bildirimleri de alabilmenizi sağlar.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "tdwl6v8qebgln33itrky",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145058189/145058189_0_MC/27884510.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "ylolho6fbf4sskwwyn1f",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145058189/145058189_1_MC/27884512.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "uyiqa0o1vacnbonllc6b",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145058189/145058189_2_MC/27884520.jpg",
                            }
                        },
                        Category = categories[3],
                        SubCategory = subCategories[4]
                    },
                    new Product
                    {
                        Name = "Apple Watch SE 40MM Gold Alüminyum Kasa Kum Pembesi Spor Kordon MYDN2TU/A",
                        Price = 2699,
                        Quantity = 30,
                        Description = "Şaşırtıcı birçok özellik. Çok şaşırtıcı bir fiyat. Bir bakışta çok daha fazlasını görebilmeniz için büyük Retina ekran. Tüm hareketlerinizi takip edebilmeniz için gelişmiş sensörler. Ve hem sağlıklı hem de güvende kalmanıza yardımcı olacak daha birçok güçlü özellik. Apple Watch SE yetenekleriyle de şaşırtıyor, fiyatıyla da. Bileklerden düşmeyecek bir saat. Apple Watch Series 6 ile aynı ikonik tasarıma ve büyük ekran boyutuna sahip. Çok güçlü bir performans sergileyen S5 çift çekirdekli SiP sayesinde çok da hızlı.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "5etkeq4nt0vuvauhog8a",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145061250/145061250_0_MC/46601361.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "xwk4nvaka5ehal2m4d3m",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145061250/145061250_1_MC/46601362.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "3ruku4x71xi9roxlnzff",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145061250/145061250_2_MC/47108714.jpg",
                            }
                        },
                        Category = categories[3],
                        SubCategory = subCategories[4]
                    },
                    new Product
                    {
                        Name = "Apple MWP22TU/A AirPods Pro Kulak İçi Kablosuz Bluetooth Kulaklık",
                        Price = 2499,
                        Quantity = 50,
                        Description = "Kablosuz kulaklık teknolojisinin öncülerinden olan Apple, Airpods Pro modeli ile kullanıcıların beklentisini en iyi şekilde karşılar. Aktif gürültü engelleme özelliği müzik dinlerken dış ortamdan gelen sesleri engelleyerek keyfinizi en üst seviyeye çıkarır. Benzer şekilde şeffaf mod ise dış ortamda bulunan ve sizinle iletişime geçen diğer insanları rahatlıkla duymanızı sağlar. Bu sayede kulaklığınızla en sevdiğiniz müzikleri dinlerken aynı zamanda diğer insanlarda ve ortamlardan kopmamak sizin elinizde. Kulak içi kullanım özelliğine sahip olan kulaklık son derece kaliteli ve yüksek seviyeli sesler ile tüm müzik severleri memnun edecek türden sesler oluşturmayı başarır.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "ym0vud664tau9xltfp80",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145059504/145059504_0_MC/34920944.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "qjt9ur2xx68qqtea03iw",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145059504/145059504_1_MC/34920945.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "99vr5qtsrwjfwq91g43y",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145059504/145059504_2_MC/34920946.jpg",
                            }
                        },
                        Category = categories[4],
                        SubCategory = subCategories[5]
                    },
                    new Product
                    {
                        Name = "Apple AirPods 2.Nesil ve Şarj Kutusu (MV7N2TU/A)",
                        Price = 1599,
                        Quantity = 50,
                        Description = "AirPods 2. nesil (MV7N2TU/A) kulaklığı, H1 çip sistemi sayesinde çok daha yüksek bağlantı hızı vadediyor. “Hey Siri” diyerek sanal asistana bağlanmak da cabası. Dolayısıyla hızlı ve gelişmiş fonksiyonlara sahip bir kulaklık arıyorsanız bu cihaz tam size göre. Üstelik Macintosh bağlantısına izin vermesi sayesinde bilgisayarınıza entegre ederek de kullanabileceğiniz MV7N2TU/A bluetooth kulaklığı ile telefonunuzu kontrol edebileceğiniz birkaç opsiyon da var. Bu model sayesinde Siri’den mesajlarınızı seslendirmesini isteyebilir ve iki çift AirPods kullanarak favori parçalarınızı da paylaşabilirsiniz. Modern hayatın kapılarını aralamak için ihtiyaç duyulabilecek harika cihazlardan biri olan bu 2. nesil AirPods, H1 çipin getirdiği yenilikler ile nefes kesici teknolojileri ayağınıza getiriyor. Düşük gecikme süresi sayesinde avantajı yakalamanızı sağlayan H1 çip, çok daha hızlı bağlantı imkânı ile de yavaşlığa son veriyor.",
                        Photos = new List<ProductPhoto>
                        {
                            new ProductPhoto
                            {
                                Id = "izdd1ckeqll692wydt1a",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145058647/145058647_0_MC/31157116.jpg"
                            },
                            new ProductPhoto
                            {
                                Id = "5ghv4r34ir1f7cfpg9v9",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145058647/145058647_1_MC/31157118.jpg",
                            },
                            new ProductPhoto
                            {
                                Id = "fi070w4arl3wa1m62nqe",
                                Url = "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145058647/145058647_2_MC/31157117.jpg",
                            }
                        },
                        Category = categories[4],
                        SubCategory = subCategories[5]
                    },
                };



                await context.Products.AddRangeAsync(products);
                await context.Categories.AddRangeAsync(categories);
                await context.SubCategories.AddRangeAsync(subCategories);
                await context.SaveChangesAsync();
            };
        }
    }
}