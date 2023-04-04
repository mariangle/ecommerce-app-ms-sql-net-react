using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using backend;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]

    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IRepository<User> _userRepository;

        public UserController(IConfiguration configuration, IRepository<User> userRepository)
        {
            _configuration = configuration;
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<User> users = _userRepository.GetAll();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _userRepository.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            bool added = _userRepository.Add(user);
            if (!added)
            {
                return BadRequest("Failed to add user");
            }

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(User updatedUser)
        {
            bool updated = _userRepository.Update(updatedUser);
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
            bool deleted = _userRepository.Delete(id);
            if (deleted)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost("login")]
        public IActionResult Login(UserLoginRequest loginRequest)
        {
            // Find the user with the provided username
            var user = _userRepository.GetAll().FirstOrDefault(u => u.Email == loginRequest.Email);

            // Check if the user exists and the password matches
            if (user == null || !user.CheckPassword(loginRequest.Password))
            {
                return Unauthorized("Invalid username or password");
            }

            // Generate a JWT token for the authenticated user
            var jwtService = new JwtService(_configuration);
            var token = jwtService.GenerateJwtToken(user);

            // Return the token to the client
            return Ok(new { Token = token });
        }

    }
}
    