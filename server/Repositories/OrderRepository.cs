using backend.Models;
using System.Data;
using System.Data.SqlClient;

namespace backend.Repositories
{
    public class OrderRepository : IRepository<Order>
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public OrderRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("UserAppCon");
        }

        public IEnumerable<Order> GetAll()
        {
            string query = @"SELECT OrderID, OrderDateTime, TotalPrice, OrderStatus, UserID FROM dbo.[ORDER]";

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

            var orders = new List<Order>();
            foreach (DataRow row in table.Rows)
            {
                OrderStatus orderStatus = (OrderStatus)Enum.Parse(typeof(OrderStatus), row["OrderStatus"].ToString());
                orders.Add(new Order(
                    (int)row["OrderID"],
                    (DateTime)row["OrderDateTime"],
                    (decimal)row["TotalPrice"],
                    orderStatus,
                    (int)row["UserID"]
                ));
            }
            return orders;


        }

        public Order GetById(int userId)
        {
            string query = @"SELECT OrderID, OrderDateTime, TotalPrice, OrderStatus, UserID FROM dbo.[ORDER] WHERE UserID = @UserID";

            Order order = null;

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@UserID", userId);

                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.Read())
                    {
                        order = new Order(
                            reader.GetInt32(0),
                            reader.GetDateTime(1),
                            reader.GetDecimal(2),
                            Enum.Parse<OrderStatus>(reader.GetString(3)),
                            reader.GetInt32(4)
                        );
                    }
                }

                connection.Close();
            }

            return order;
        }

        public bool Add(Order order)
        {
            string query = @"INSERT INTO dbo.ORDER 
                     (OrderDateTime, TotalPrice, OrderStatus, UserID) 
                     VALUES (@DateTime, @TotalPrice, @Status, @UserID)";

            try
            {
                using (SqlConnection myCon = new SqlConnection(_connectionString))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        order.DateTime = DateTime.Now;

                        myCommand.Parameters.AddWithValue("@DateTime", order.DateTime);
                        myCommand.Parameters.AddWithValue("@TotalPrice", order.TotalPrice);
                        myCommand.Parameters.AddWithValue("@Status", order.Status.ToString());
                        myCommand.Parameters.AddWithValue("@UserID", order.UserID);
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

        public bool Update(Order order)
        {
            string query = @"UPDATE dbo.[ORDER] 
                     SET OrderStatus = @OrderStatus,
                     UserID = @UserID
                     WHERE OrderID = @OrderID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@OrderID", order.OrderID);
                    myCommand.Parameters.AddWithValue("@Status", order.Status.ToString());
                    myCommand.Parameters.AddWithValue("@UserID", order.UserID);

                    int rowsAffected = myCommand.ExecuteNonQuery();
                    myCon.Close();

                    return rowsAffected > 0;
                }
            }
        }

        public bool Delete(int orderId)
        {
            string query = @"DELETE FROM dbo.[ORDER] 
                     WHERE OrderID = @OrderID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@OrderID", orderId);
                    int rowsAffected = myCommand.ExecuteNonQuery();
                    myCon.Close();

                    return rowsAffected > 0;
                }
            }
        }
    }
}
