using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    public class OrderItemController : ControllerBase
    {
        private readonly IListRepository<OrderItem> _orderItemRepo;

        public OrderItemController(IListRepository<OrderItem> orderItemRepo)
        {
            _orderItemRepo = orderItemRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<OrderItem> orderItems = _orderItemRepo.GetAll();
            return Ok(orderItems);
        }

        [HttpGet("{orderId}")]
        public IActionResult Get(int orderId)
        {
            var orderItems = _orderItemRepo.GetById(orderId);
            if (orderItems == null)
            {
                return NotFound();
            }
            return Ok(orderItems);
        }

        [HttpPost]
        public IActionResult Post(OrderItem orderItem)
        {
            bool added = _orderItemRepo.Add(orderItem);
            if (!added)
            {
                return BadRequest("Failed to add Order Item");
            }

            return Ok();
        }

        [HttpPut("{orderItemId}")]
        public IActionResult Put(OrderItem orderItem)
        {
            bool updated = _orderItemRepo.Update(orderItem);
            if (updated)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{orderItemId}")]
        public IActionResult Delete(int orderItemId)
        {
            bool deleted = _orderItemRepo.Delete(orderItemId);
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
