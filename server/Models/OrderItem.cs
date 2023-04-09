namespace backend.Models
{
    public class OrderItem
    {
        public int OrderItemID { get; set; }
        public int Quantity { get; set; }
        public int OrderID { get; set; }
        public int ProductSizeID { get; set; }

        public OrderItem(int orderItemID, int quantity, int orderID, int productSizeID)
        {
            OrderItemID = orderItemID;
            Quantity = quantity;
            OrderID = orderID;
            ProductSizeID = productSizeID;
        }
    }
}
