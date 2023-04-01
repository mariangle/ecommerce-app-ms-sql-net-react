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
            _userRepository.AddUser(user);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody] User updatedUser)
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
    