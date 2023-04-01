using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]

    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<User> users = _userRepository.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _userRepository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            bool added = _userRepository.AddUser(user);
            if (!added)
            {
                return BadRequest("Failed to add user");
            }

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, User updatedUser)
        {
            bool updated = _userRepository.UpdateUser(updatedUser);
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
            bool deleted = _userRepository.DeleteUser(id);
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
    