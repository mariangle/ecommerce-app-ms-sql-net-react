namespace backend.Models
{
    public class OrderDetail
    {
        public int OrderDetailID { get; set; }
        public int OrderID { get; set; }
        public int ProductSizeID { get; set; }
        public int Quantity { get; set; }

        public OrderDetail(int orderDetailID, int orderID, int productSizeID, int quantity)
        {
            OrderDetailID = orderDetailID;
            OrderID = orderID;
            ProductSizeID = productSizeID;
            Quantity = quantity;
        }
    }
}
