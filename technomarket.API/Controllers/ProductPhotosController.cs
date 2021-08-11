using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using technomarket.application.ProductPhotos;

namespace technomarket.API.Controllers
{
    public class ProductPhotosController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> AddPhoto([FromForm] Add.Command photo)
        {
            return HandleResult(await Mediator.Send(photo));
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePhoto(Delete.Command photos)
        {
            return HandleResult(await Mediator.Send(photos));
        }
    }
}