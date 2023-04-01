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
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository userRepository)
        {
            _productRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Product> products = _productRepository.GetAllProducts();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _productRepository.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            _productRepository.AddProduct(product);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Product updatedProduct)
        {
            bool updated = _productRepository.UpdateProduct(updatedProduct);
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
            bool deleted = _productRepository.DeleteProduct(id);
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
