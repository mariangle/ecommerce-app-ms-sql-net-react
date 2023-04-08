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

        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            var user = _userRepository.GetById(userId);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(User newUser)
        {
            bool added = _userRepository.Add(newUser);
            if (!added)
            {
                return BadRequest("Failed to add user");
            }

            return Ok();
        }

        [HttpPut("{userId}")]
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

        [HttpDelete("{userId}")]
        public IActionResult Delete(int userId)
        {
            bool deleted = _userRepository.Delete(userId);
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
                var user = _userRepository.GetAll().FirstOrDefault(u => u.Email == loginRequest.Email);

                if (user == null || !user.CheckPassword(loginRequest.Password))
                {
                    return Unauthorized("Invalid username or password");
                }

                var jwtService = new JwtService(_configuration);
                var token = jwtService.GenerateJwtToken(user);

                return Ok(new { Token = token });
            }

        }
}
    