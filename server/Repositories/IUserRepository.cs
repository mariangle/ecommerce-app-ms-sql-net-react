using System.Collections.Generic;
using backend.Models;

namespace backend.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        void AddUser(User user);
        bool UpdateUser(User user);
        bool DeleteUser(int id);
    }
}
