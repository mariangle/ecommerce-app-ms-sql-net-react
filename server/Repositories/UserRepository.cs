using backend.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace backend.Repositories
{
    public class UserRepository : IRepository<User>
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public UserRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("UserAppCon");
        }

        public IEnumerable<User> GetAll()
        {
            string query = @"SELECT UserID, FirstName, LastName, Phone, Email, Password FROM dbo.[USER]";

            DataTable table = new DataTable();
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(_connectionString))
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

            var users = new List<User>();
            foreach (DataRow row in table.Rows)
            {
                users.Add(new User(
                    (int)row["UserID"],
                    row["FirstName"].ToString(),
                    row["LastName"].ToString(),
                    row["Phone"].ToString(),
                    row["Email"].ToString(),
                    row["Password"].ToString() 
                ));
            }
            return users;
        }

        public User GetById(int userId)
        {
            string query = @"SELECT UserID, FirstName, LastName, Phone, Email FROM dbo.[USER] WHERE UserID = @UserID";

            User user = null;

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@UserID", userId);

                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.Read())
                    {
                        user = new User(
                         reader.GetInt32(0),
                         reader.GetString(1),
                         reader.GetString(2),
                         reader.GetString(3),
                         reader.GetString(4),
                         ""
                     );
                    }

                    reader.Close();
                }

                connection.Close();
            }

            return user;
        }

        public bool Add(User user)
        {
            string query = @"INSERT INTO dbo.[USER] 
                             (FirstName, LastName, Phone, Email, Password) 
                             VALUES (@FirstName, @LastName, @Phone, @Email, @Password)";

            try
            {
                using (SqlConnection myCon = new SqlConnection(_connectionString))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@FirstName", user.FirstName);
                        myCommand.Parameters.AddWithValue("@LastName", user.LastName);
                        myCommand.Parameters.AddWithValue("@Email", user.Email);
                        myCommand.Parameters.AddWithValue("@Phone", user.Phone);
                        myCommand.Parameters.AddWithValue("@Password", user.Password);
                        myCommand.ExecuteNonQuery();
                        myCon.Close();
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool Update(User user)
        {
            string query = @"UPDATE dbo.[USER] 
                             SET FirstName = @FirstName,
                             LastName = @LastName,
                             Phone = @Phone,
                             Email = @Email,
                             Password = @Password
                             WHERE UserID = @UserID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@UserID", user.UserID);
                    myCommand.Parameters.AddWithValue("@FirstName", user.FirstName);
                    myCommand.Parameters.AddWithValue("@LastName", user.LastName);
                    myCommand.Parameters.AddWithValue("@Phone", user.Phone);
                    myCommand.Parameters.AddWithValue("@Email", user.Email);
                    myCommand.Parameters.AddWithValue("@Password", user.Password);

                    int rowsAffected = myCommand.ExecuteNonQuery();
                    myCon.Close();

                    return rowsAffected > 0; 

                }
            }
        }

        public bool Delete(int id)
        {
            string query = @"DELETE FROM dbo.[USER] 
                             WHERE UserID = @UserID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@UserID", id);
                    int rowsAffected = myCommand.ExecuteNonQuery();
                    myCon.Close();

                    return rowsAffected > 0;
                }
            }
        }
    }
}

