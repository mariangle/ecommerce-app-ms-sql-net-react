using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    public class ProductSizeController : ControllerBase
    {
        private readonly IListRepository<ProductSize> _psRepository;

        public ProductSizeController(IListRepository<ProductSize> productSizeRepo)
        {
            _psRepository = productSizeRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ProductSize> productSizes = _psRepository.GetAll();
            return Ok(productSizes);
        }

        [HttpGet("{productId}")]
        public IActionResult Get(int productId)
        {
            var productSizes = _psRepository.GetById(productId);
            if (productSizes == null)
            {
                return NotFound();
            }
            return Ok(productSizes);
        }

        [HttpGet("{id}/size")]
        public IActionResult GetProductSizeById(int id)
        {
            var productSizes = _psRepository.GetObjById(id);
            if (productSizes == null)
            {
                return NotFound();
            }
            return Ok(productSizes);
        }

        [HttpPost]
        public IActionResult Post(ProductSize newProductSize)
        {
            bool added = _psRepository.Add(newProductSize);
            if (!added)
            {
                return BadRequest("Failed to add Product Size");
            }

            return Ok();
        }

        [HttpPut("{productSizeId}")]
        public IActionResult Put(ProductSize updatedProductSize)
        {
            bool updated = _psRepository.Update(updatedProductSize);
            if (updated)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{productSizeId}")]
        public IActionResult Delete(int productSizeId)
        {
            bool deleted = _psRepository.Delete(productSizeId);
            if (deleted)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
