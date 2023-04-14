using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    public class OrderController : ControllerBase
    {
        private readonly IListRepository<Order> _orderRepository;

        public OrderController(IListRepository<Order> orderRepo)
        {
            _orderRepository = orderRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Order> orders = _orderRepository.GetAll();
            return Ok(orders);
        }

        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            var orders = _orderRepository.GetById(userId);
            if (orders == null)
            {
                return NotFound();
            }
            return Ok(orders);
        }

        [HttpPost]
        public IActionResult Post(Order newOrder)
        {
            bool added = _orderRepository.Add(newOrder);
            if (!added)
            {
                return BadRequest("Failed to create Order");
            }

            return Ok();
        }

        [HttpPut("{orderId}")]
        public IActionResult Put(Order updatedOrder)
        {
            bool updated = _orderRepository.Update(updatedOrder);
            if (updated)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{orderId}")]
        public IActionResult Delete(int orderId)
        {
            bool deleted = _orderRepository.Delete(orderId);
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
