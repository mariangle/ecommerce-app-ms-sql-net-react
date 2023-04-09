using backend.Models;

namespace backend.Repositories
{
    public interface IListRepository<T>
    {
        IEnumerable<T> GetAll();
        public List<T> GetById(int id);
        T GetObjById(int id);
        bool Add(T item);
        bool Update(T item);
        bool Delete(int id);
    }
}
