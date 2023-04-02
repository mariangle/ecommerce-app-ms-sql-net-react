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
        private readonly IProductSizeRepository<ProductSize> _psRepository;

        public ProductSizeController(IProductSizeRepository<ProductSize> productSizeRepo)
        {
            _psRepository = productSizeRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ProductSize> productSizes = _psRepository.GetAll();
            return Ok(productSizes);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productSizes = _psRepository.GetById(id);
            if (productSizes == null)
            {
                return NotFound();
            }
            return Ok(productSizes);
        }

        [HttpPost]
        public IActionResult Post(ProductSize ps)
        {
            bool added = _psRepository.Add(ps);
            if (!added)
            {
                return BadRequest("Failed to add Product Size");
            }

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(ProductSize ps)
        {
            bool updated = _psRepository.Update(ps);
            if (updated)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            bool deleted = _psRepository.Delete(id);
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
