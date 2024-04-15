import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  calculateSubtotal,
  getTotal,
  clearCart,
} from "@/store/reducers/cartSlice";
import { playPopAudio } from "@/utils/audio";

function generateRandomId() {
  return Math.floor(Math.random() * Date.now()).toString();
}

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart);

  React.useEffect(() => {
    dispatch(getTotal());
    dispatch(calculateSubtotal());
  }, [cart, dispatch]);

  const addToCartHandler = ({ productId, size, quantity = 0 }) => {
    dispatch(addToCart({ id: generateRandomId(), productId, size, quantity }));

    playPopAudio();
  };

  const removeFromCartHandler = (itemId) => {
    dispatch(removeFromCart(itemId));
    playPopAudio();
  };

  const update = (id, newQuantity) => {
    dispatch(updateQuantity({ id, newQuantity }));
    playPopAudio();
  };

  const incrementQuantity = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    update(itemId, item.quantity + 1);
  };
  const decrementQuantity = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    if (item.quantity === 1) {
      removeFromCartHandler(itemId);
    } else {
      update(itemId, item.quantity - 1);
    }
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
    playPopAudio();
  };

  return {
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    incrementQuantity,
    decrementQuantity,
    clearCart: clearCartHandler,
  };
};

export default useCart;
