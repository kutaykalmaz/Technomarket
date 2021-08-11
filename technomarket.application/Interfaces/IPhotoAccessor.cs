using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using technomarket.application.Core;

namespace technomarket.application.Interfaces
{
    public interface IPhotoAccessor
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);
        Task<string> DeletePhoto(string publicId);
    }
}