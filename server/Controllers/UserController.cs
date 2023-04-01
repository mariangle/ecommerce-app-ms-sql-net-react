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
            string query = @"SELECT UserID, FirstName, LastName, Phone, Email FROM dbo.[USER]";

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
            string query = @"INSERT INTO dbo.[USER] 
                           (FirstName, LastName, Phone, Email, Password) 
                           VALUES (@FirstName, @LastName, @Phone, @Email, @Password)";

            string sqlDataSource = _configuration.GetConnectionString("UserAppCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@FirstName", user.FirstName);
                    myCommand.Parameters.AddWithValue("@LastName", user.LastName);
                    myCommand.Parameters.AddWithValue("@Phone", user.Phone);
                    myCommand.Parameters.AddWithValue("@Email", user.Email);
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
                             SET FirstName = @FirstName,
                             LastName = @LastName,
                             Phone = @Phone,
                             Email = @Email,
                             Password = @Password
                             WHERE UserID = @UserID";

            string sqlDataSource = _configuration.GetConnectionString("UserAppCon");

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@UserID", id);
                    myCommand.Parameters.AddWithValue("@FirstName", user.FirstName);
                    myCommand.Parameters.AddWithValue("@LastName", user.LastName);
                    myCommand.Parameters.AddWithValue("@Phone", user.Phone);
                    myCommand.Parameters.AddWithValue("@Email", user.Email);
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
