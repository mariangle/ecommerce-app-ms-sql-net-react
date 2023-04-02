using backend.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace backend.Repositories
{
    public class ProductSizeRepository : IProductSizeRepository<ProductSize>
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public ProductSizeRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("UserAppCon");
        }

        public IEnumerable<ProductSize> GetAll()
        {
            string query = @"SELECT ProductSizeID, Size, Price, Quantity, ProductID FROM dbo.PRODUCT_SIZE";

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

            var productSizes = new List<ProductSize>();
            foreach (DataRow row in table.Rows)
            {
                productSizes.Add(new ProductSize(
                    (int)row["ProductSizeID"],
                    (int)row["Size"],
                    (decimal)row["Price"],
                    (int)row["Quantity"],
                    (int)row["ProductID"]
                ));
            }
            return productSizes;
        }

        public List<ProductSize> GetById(int productId)
        {
            string query = @"SELECT * FROM dbo.PRODUCT_SIZE WHERE ProductID = @ProductID";

            List<ProductSize> productSizes = new List<ProductSize>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@ProductID", productId);

                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        ProductSize productSize = new ProductSize(
                            reader.GetInt32(0),
                            reader.GetInt32(1),
                            reader.GetDecimal(2),
                            reader.GetInt32(3),
                            reader.GetInt32(4)
                        );

                        productSizes.Add(productSize);
                    }

                    reader.Close();
                }

                connection.Close();
            }

            return productSizes;
        }


        public bool Add(ProductSize productSize)
        {
            string query = @"INSERT INTO dbo.PRODUCT_SIZE 
                             (Size, Price, Quantity, ProductID) 
                             VALUES (@Size, @Price, @Quantity, @ProductID)";

            try
            {
                using (SqlConnection myCon = new SqlConnection(_connectionString))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@Size", productSize.Size);
                        myCommand.Parameters.AddWithValue("@Price", productSize.Price);
                        myCommand.Parameters.AddWithValue("@Quantity", productSize.Quantity);
                        myCommand.Parameters.AddWithValue("@ProductID", productSize.ProductID);
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
        public bool Update(ProductSize productSize)
        {
            string query = @"UPDATE dbo.PRODUCT_SIZE 
                             SET Size = @Size,
                             Price = @Price,
                             Quantity = @Quantity,
                             ProductID = @ProductID
                             WHERE ProductSizeID = @ProductSizeID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ProductSizeID", productSize.ProductSizeID);
                    myCommand.Parameters.AddWithValue("@Size", productSize.Size);
                    myCommand.Parameters.AddWithValue("@Price", productSize.Price);
                    myCommand.Parameters.AddWithValue("@Quantity", productSize.Quantity);
                    myCommand.Parameters.AddWithValue("@ProductID", productSize.ProductID);

                    int rowsAffected = myCommand.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
            }
        }

        public bool Delete(int productSizeID)
        {
            string query = @"DELETE FROM dbo.PRODUCT_SIZE WHERE ProductSizeID = @ProductSizeID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ProductSizeID", productSizeID);

                    int rowsAffected = myCommand.ExecuteNonQuery();
                    return rowsAffected > 0;
                }
            }
        }
    }
}

