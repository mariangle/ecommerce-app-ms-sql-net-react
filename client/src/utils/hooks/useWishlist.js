import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, clearWishlist, removeFromWishlist } from '../../store/reducers/wishlistSlice';

export const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist && state.wishlist.items);
  const wishlistCount = wishlistItems.length;
  
  const toggleWishlistItemHandler = (product) => {
    const itemExists = wishlistItems.find((item) => item.productID === product.productID);
    if (!itemExists){
      dispatch(addToWishlist(product));
    } else{
      dispatch(removeFromWishlist(product));
    }
  };

  const clearWishlistItemsHandler = () => {
    dispatch(clearWishlist());
  };

  return {
    toggleWishlistItem: toggleWishlistItemHandler,
    clearWishlist: clearWishlistItemsHandler,
    wishlistCount,
    wishlistItems,
  };
};
