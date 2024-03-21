import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  calculateSubtotal,
  getTotal,
  applyDiscount,
  clearCart,
} from "../store/reducers/cartSlice";
import { formatPrice } from "../utils/hooks/useUtil";

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const delivery = useSelector((state) => state.cart.delivery);
  const discount = useSelector((state) => state.cart.discount);
  const total = useSelector((state) => state.cart.total);
  const quantity = items.length ?? 0;

  useEffect(() => {
    dispatch(calculateSubtotal());
  }, [items, dispatch]);

  useEffect(() => {
    dispatch(getTotal());
  }, [subtotal, delivery, dispatch, discount]);

  const add = (item) => dispatch(addToCart(item));
  const remove = (itemId) => dispatch(removeFromCart(itemId));

  const update = (productId, size, newQuantity) => {
    if (newQuantity === 0) {
      const item = items.find(
        (item) => item.product.id === productId && item.size === size
      );
      if (item) {
        dispatch(removeFromCart({ product: item.product, size }));
      }
    } else if (newQuantity <= 10) {
      dispatch(updateQuantity({ productId, size, quantity: newQuantity }));
    }
  };

  const clear = () => {
    dispatch(clearCart());
  };

  const applyDiscountHandler = (discountCode) => {
    const discount = 0.1;
    if (discountCode.toLowerCase() === "10off") {
      dispatch(applyDiscount({ discount }));
    } else {
      alert("Wrong discount");
    }
  };

  return {
    addToCart: add,
    removeFromCart: remove,
    updateQuantity: update,
    clearCart: clear,
    applyDiscount: applyDiscountHandler,
    items,
    defaultSubtotal: subtotal,
    defaultTotal: total,
    subtotal: formatPrice(subtotal),
    delivery: formatPrice(delivery),
    total: formatPrice(total),
    quantity,
    discount,
  };
};

export default useCart;
