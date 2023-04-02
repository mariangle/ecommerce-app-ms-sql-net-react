namespace backend.Models
{
    public class User
    {
        public int UserID { get; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }

        public User(int userId, string firstName, string lastName, string email, string phone, string password)
        {
            UserID = userId;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Phone = phone;
            Password = password;
        }
    }
}
