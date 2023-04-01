using backend.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace backend.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public ProductRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("UserAppCon");
        }

        public IEnumerable<Product> GetAllProducts()
        {
            string query = @"SELECT ProductID, Name, Brand, Description, ImageURL FROM dbo.PRODUCT";

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

            var products = new List<Product>();
            foreach (DataRow row in table.Rows)
            {
                products.Add(new Product
                {
                    ProductID = (int)row["ProductID"],
                    Name = row["Name"].ToString(),
                    Brand = row["Brand"].ToString(),
                    Description = row["Description"].ToString(),
                    ImageURL = row["ImageURL"].ToString()
                });
            }
            return products;
        }

        public Product GetProductById(int productId)
        {
            string query = @"SELECT ProductID, Name, Brand, Description, ImageURL FROM dbo.PRODUCT WHERE ProductID = @ProductID";

            Product product = null;

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@ProductID", productId);

                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.Read())
                    {
                        product = new Product
                        {
                            ProductID = reader.GetInt32(0),
                            Name = reader.GetString(1),
                            Brand = reader.GetString(2),
                            Description = reader.GetString(3),
                            ImageURL = reader.GetString(4)
                        };
                    }

                    reader.Close();
                }

                connection.Close();
            }

            return product;
        }

        public bool AddProduct(Product product)
        {
            string query = @"INSERT INTO dbo.PRODUCT 
                             (Name, Brand, Description, ImageURL) 
                             VALUES (@Name, @Brand, @Description, @ImageURL)";

            try
            {
                using (SqlConnection myCon = new SqlConnection(_connectionString))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@Name", product.Name);
                        myCommand.Parameters.AddWithValue("@Brand", product.Brand);
                        myCommand.Parameters.AddWithValue("@Description", product.Description);
                        myCommand.Parameters.AddWithValue("@ImageURL", product.ImageURL);
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
        public bool UpdateProduct(Product product)
        {
            string query = @"UPDATE dbo.[PRODUCT] 
                             SET Name = @Name,
                             Brand = @Brand,
                             Description = @Description,
                             ImageURL = @ImageURL
                             WHERE ProductID = @ProductID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ProductID", product.ProductID);
                    myCommand.Parameters.AddWithValue("@Name", product. Name);
                    myCommand.Parameters.AddWithValue("@Brand", product.Brand);
                    myCommand.Parameters.AddWithValue("@Description", product.Description);
                    myCommand.Parameters.AddWithValue("@ImageURL", product.ImageURL);

                    int rowsAffected = myCommand.ExecuteNonQuery();
                    myCon.Close();

                    return rowsAffected > 0; // Return true if rowsAffected is greater than 0

                }
            }
        }

        public bool DeleteProduct(int productId)
        {
            string query = @"DELETE FROM dbo.PRODUCT 
                     WHERE ProductID = @ProductID";

            using (SqlConnection myCon = new SqlConnection(_connectionString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ProductID", productId);
                    int rowsAffected = myCommand.ExecuteNonQuery();
                    myCon.Close();

                    return rowsAffected > 0;
                }
            }
        }
    }
}
