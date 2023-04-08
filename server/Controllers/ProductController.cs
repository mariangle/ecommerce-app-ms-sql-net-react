using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;


namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]

    public class ProductController : ControllerBase
    {
        private readonly IRepository<Product> _productRepository;

        public ProductController(IRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Product> products = _productRepository.GetAll();
            return Ok(products);
        }

        [HttpGet("{productId}")]
        public IActionResult Get(int productId)
        {
            var product = _productRepository.GetById(productId);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            _productRepository.Add(product);
            return Ok();
        }

        [HttpPut("{productId}")]
        public IActionResult Put(Product updatedProduct)
        {
            bool updated = _productRepository.Update(updatedProduct);
            if (updated)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{productId}")]
        public IActionResult Delete(int productId)
        {
            bool deleted = _productRepository.Delete(productId);
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
