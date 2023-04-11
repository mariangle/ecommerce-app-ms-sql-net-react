namespace backend.Models
{
    public enum OrderStatus
    {
        Pending,
        Processing,
        Shipped,
        Delivered,
        Cancelled,
    }

    public class Order
    {
        public int OrderID { get; set; }
        public DateTime DateTime { get; set; }
        public decimal TotalPrice { get; set; }
        public OrderStatus Status { get; set; }
        public int UserID { get; set; }

        public Order(int orderID, DateTime dateTime, decimal totalPrice, OrderStatus status, int userID)
        {
            OrderID = orderID;
            DateTime = dateTime;
            TotalPrice = totalPrice;
            Status = status;
            UserID = userID;
        }
    }
}
