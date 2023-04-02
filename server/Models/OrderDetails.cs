namespace backend.Models
{
    public class OrderDetails
    {
        public int OrderID { get; set; }
        public int ProductSizeID { get; set; }
        public int Quantity { get; set; }

        public OrderDetails(int orderID, int productSizeID, int quantity)
        {
            OrderID = orderID;
            ProductSizeID = productSizeID;
            Quantity = quantity;
        }
    }
}
