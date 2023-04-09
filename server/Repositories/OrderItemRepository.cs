using backend.Models;
using System.Data;
using System.Data.SqlClient;

namespace backend.Repositories
{
    public class OrderItemRepository : IListRepository<OrderItem>
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public OrderItemRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("UserAppCon");
        }

        public IEnumerable<OrderItem> GetAll()
        {
            string query = @"SELECT OrderItemID, Quantity, OrderID, ProductSizeID FROM dbo.ORDER_ITEM";

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

            var orderItems = new List<OrderItem>();
            foreach (DataRow row in table.Rows)
            {
                orderItems.Add(new OrderItem(
                    (int)row["OrderItemID"],
                    (int)row["Quantity"],
                    (int)row["OrderID"],
                        (int)row["ProductSizeID"]
                ));
            }
            return orderItems;
        }

        public List<OrderItem> GetById(int orderId)
        {
            string query = @"SELECT * FROM dbo.ORDER_ITEM WHERE OrderID = @OrderID";

            List<OrderItem> orderItems = new List<OrderItem>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@OrderID", orderId);

                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        OrderItem orderItem = new OrderItem(
                            reader.GetInt32(0),
                            reader.GetInt32(1),
                            reader.GetInt32(2),
                            reader.GetInt32(3)
                        );

                        orderItems.Add(orderItem);
                    }

                    reader.Close();
                }

                connection.Close();
            }

            return orderItems;
        }


        public bool Add(OrderItem orderItem)
        {
            string query = @"INSERT INTO dbo.ORDER_ITEM 
                             (Quantity, OrderID, ProductSizeID) 
                             VALUES (@Quantity, @OrderID, @ProductSizeID)";

            try
            {
                using (SqlConnection myCon = new SqlConnection(_connectionString))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@Quantity", orderItem.Quantity);
                        myCommand.Parameters.AddWithValue("@OrderID", orderItem.OrderID);
                        myCommand.Parameters.AddWithValue("@ProductSizeID", orderItem.ProductSizeID);
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
        public bool Update(OrderItem orderItem)
        {
            string query = @"UPDATE dbo.ORDER_ITEM
                             SET Quantity = @Quantity,
                             OrderID = @OrderID,
                             ProductSizeID = @ProductSizeID
                             WHERE OrderItemID = @OrderItemID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@OrderItemID", orderItem.OrderItemID);
                    myCommand.Parameters.AddWithValue("@Quantity", orderItem.Quantity);
                    myCommand.Parameters.AddWithValue("@OrderID", orderItem.OrderID);
                    myCommand.Parameters.AddWithValue("@ProductSizeID", orderItem.ProductSizeID);
                    int rowsAffected = myCommand.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
            }
        }

        public bool Delete(int orderItemId)
        {
            string query = @"DELETE FROM dbo.ORDER_ITEM WHERE OrderItemID = @OrderItemID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@OrderItemID", orderItemId);

                    int rowsAffected = myCommand.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
            }
        }

        public OrderItem GetObjById(int id)
        {
            throw new NotImplementedException();
        }
    }
}

