namespace backend.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalPrice { get; set; }
        public string Status { get; set; }
        public int UserID { get; set; }
        public int ShippingID { get; set; }

        public Order(int orderID, DateTime orderDate, decimal totalPrice, string status, int userID, int shippingID)
        {
            OrderID = orderID;
            OrderDate = orderDate;
            TotalPrice = totalPrice;
            Status = status;
            UserID = userID;
            ShippingID = shippingID;
        }
    }
}
