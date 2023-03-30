import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateSubtotal, getTotal, updateDeliveryCost } from '../store/reducers/cartReducer';

export const useCartData = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const subtotal = useSelector(state => state.cart.subtotal);
  const delivery = useSelector(state => state.cart.delivery);
  const total = useSelector(state => state.cart.total);

  useEffect(() => {
    const deliveryCost = 50;
    dispatch(updateDeliveryCost({ deliveryCost }));
    dispatch(calculateSubtotal());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getTotal());
  }, [subtotal, delivery, dispatch]);

  return { cartItems, subtotal, delivery, total };
};