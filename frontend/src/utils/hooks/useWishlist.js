import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  clearWishlist,
  removeFromWishlist,
} from "../../store/reducers/wishlistSlice";

export const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state) => state.wishlist && state.wishlist.items
  );
  const wishlistCount = wishlistItems.length;

  const toggleWishlistItemHandler = (product) => {
    const itemExists = wishlistItems.find((item) => item.id === product.id);
    if (!itemExists) {
      dispatch(addToWishlist(product));
    } else {
      dispatch(removeFromWishlist(product));
    }
  };

  const clear = () => {
    dispatch(clearWishlist());
  };

  return {
    toggleWishlistItem: toggleWishlistItemHandler,
    clearWishlist: clear,
    wishlistCount,
    wishlistItems,
  };
};
