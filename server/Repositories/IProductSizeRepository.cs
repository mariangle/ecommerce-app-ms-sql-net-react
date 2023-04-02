using backend.Models;

namespace backend.Repositories
{
    public interface IProductSizeRepository<ProductSize>
    {
        IEnumerable<ProductSize> GetAll();
        public List<ProductSize> GetById(int productId);
        bool Add(ProductSize item);
        bool Update(ProductSize item);
        bool Delete(int id);
    }
}
