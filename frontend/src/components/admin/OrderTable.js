import React from 'react'

function OrderTable({user, selectedOrder}) {
    
      const handleStatusChange = (event) => {
        const newStatus = parseInt(event.target.value);
      };

  return (
    <>
        <div className="divider">
            <label>
                First Name
                <input value={user?.firstName || ""} readOnly/>
            </label>
            <label>
                Last Name
                <input value={user?.lastName || ""} readOnly/>
            </label>
        </div>
        <label>
            Email
            <input value={user?.email || ""} readOnly/>
        </label>
        <label>
            Phone
            <input value={user?.phone || ""} readOnly/>
        </label>
        <div className="divider">
            <label>
                Postal Code
                <input value={user?.postalCode || ""} readOnly/>
            </label>
            <label>
                City
                <input value={user?.city || ""} readOnly/>
            </label>
        </div>
        <label>
            Addresss
            <input value={user?.address || ""} readOnly/>
        </label>
        <div className="divider">
        <label>
             Update Status
            <select name="status" value={selectedOrder?.status} onChange={(e) => handleStatusChange(e)}>
                <option value={0} disabled={selectedOrder?.status === 0}>Pending</option>
                <option value={1} disabled={selectedOrder?.status === 1}>Processing</option>
                <option value={2} disabled={selectedOrder?.status === 2}>Shipped</option>
                <option value={3} disabled={selectedOrder?.status === 3}>Delivered</option>
                <option value={4} disabled={selectedOrder?.status === 4}>Cancelled</option>
            </select>
            </label>

            <label>
                Total Price
                <input value={selectedOrder?.totalPrice || ""} readOnly/>
            </label>
        </div>
    </>
  )
}

export default OrderTable