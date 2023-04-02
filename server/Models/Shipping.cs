namespace backend.Models
{
    public class Shipping
    {
        public int ShippingID { get; set; }
        public int FirstName { get; set; }
        public int LastName { get; set; }
        public int Address { get; set; }
        public int City { get; set; }
        public int PostalCode { get; set; }

        public Shipping(int shippingID, int firstName, int lastName, int address, int city, int postalCode)
        {
            ShippingID = shippingID;
            FirstName = firstName;
            LastName = lastName;
            Address = address;
            City = city;
            PostalCode = postalCode;
        }
    }
}
