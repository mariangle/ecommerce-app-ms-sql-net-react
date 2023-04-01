using backend.Models;
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
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Get()
        {
            string query = @"SELECT UserID, UserFirstName, UserLastName, UserPhone, UserEmail, DateJoined FROM dbo.[USER]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("UserAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            // Use Newtonsoft.Json to serialize the DataTable to a JSON string
            string jsonString = JsonConvert.SerializeObject(table, Formatting.Indented);

            // Return the JSON string as a ContentResult with the appropriate MIME type
            return new ContentResult
            {
                Content = jsonString,
                ContentType = "application/json",
                StatusCode = 200
            };
        }
        [HttpPost]
        public IActionResult Post(User user)
        {
            string query = @"INSERT INTO dbo.[USER] (UserFirstName, UserLastName, UserPhone, UserEmail, IsAdmin, DateJoined, Password) 
                     VALUES (@UserFirstName, @UserLastName, @UserPhone, @UserEmail, @IsAdmin, @DateJoined, @Password)";

            string sqlDataSource = _configuration.GetConnectionString("UserAppCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@UserFirstName", user.FirstName);
                    myCommand.Parameters.AddWithValue("@UserLastName", user.LastName);
                    myCommand.Parameters.AddWithValue("@UserPhone", user.Phone);
                    myCommand.Parameters.AddWithValue("@UserEmail", user.Email);
                    myCommand.Parameters.AddWithValue("@IsAdmin", user.IsAdmin);
                    myCommand.Parameters.AddWithValue("@DateJoined", user.DateJoined);
                    myCommand.Parameters.AddWithValue("@Password", user.Password);

                    myCommand.ExecuteNonQuery();
                    myCon.Close();
                }
            }

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, User user)
        {
            string query = @"UPDATE dbo.[USER] 
                     SET UserFirstName = @UserFirstName,
                         UserLastName = @UserLastName,
                         UserPhone = @UserPhone,
                         UserEmail = @UserEmail,
                         IsAdmin = @IsAdmin,
                         DateJoined = @DateJoined,
                         Password = @Password
                         WHERE UserID = @UserID";

            string sqlDataSource = _configuration.GetConnectionString("UserAppCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@UserID", id);
                    myCommand.Parameters.AddWithValue("@UserFirstName", user.FirstName);
                    myCommand.Parameters.AddWithValue("@UserLastName", user.LastName);
                    myCommand.Parameters.AddWithValue("@UserPhone", user.Phone);
                    myCommand.Parameters.AddWithValue("@UserEmail", user.Email);
                    myCommand.Parameters.AddWithValue("@IsAdmin", user.IsAdmin);
                    myCommand.Parameters.AddWithValue("@DateJoined", user.DateJoined);
                    myCommand.Parameters.AddWithValue("@Password", user.Password);

                    myCommand.ExecuteNonQuery();
                    myCon.Close();
                }
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            string query = @"DELETE FROM dbo.[USER] 
                     WHERE UserID = @UserID";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("UserAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@UserID", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            // Use Newtonsoft.Json to serialize the DataTable to a JSON string
            string jsonString = JsonConvert.SerializeObject(table, Formatting.Indented);

            // Return the JSON string as a ContentResult with the appropriate MIME type
            return new ContentResult
            {
                Content = jsonString,
                ContentType = "application/json",
                StatusCode = 200
            };
        }

    }
}
