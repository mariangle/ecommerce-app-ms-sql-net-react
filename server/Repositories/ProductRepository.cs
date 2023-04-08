using backend.Models;
using System.Data;
using System.Data.SqlClient;

namespace backend.Repositories
{
    public class ProductRepository : IRepository<Product>
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public ProductRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("UserAppCon");
        }

        public IEnumerable<Product> GetAll()
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
                products.Add(new Product(
                    (int)row["ProductID"],
                    row["Name"].ToString(),
                    row["Brand"].ToString(),
                    row["Description"].ToString(),
                    row["ImageURL"].ToString()
                ));
            }
            return products;
        }

        public Product GetById(int productId)
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
                        product = new Product(
                         reader.GetInt32(0),
                         reader.GetString(1),
                         reader.GetString(2),
                         reader.GetString(3),
                         reader.GetString(4)
                     );
                    }

                    reader.Close();
                }

                connection.Close();
            }

            return product;
        }

        public bool Add(Product product)
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
        public bool Update(Product product)
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

                    return rowsAffected > 0; 

                }
            }
        }

        public bool Delete(int productId)
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
