import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  clearWishlist,
  removeFromWishlist,
} from "@/store/reducers/wishlistSlice";
import { playPopAudio } from "@/utils/audio";

export const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const addToWishlistHandler = (product) => {
    dispatch(addToWishlist(product));
    playPopAudio();
  };

  const removeFromWishlistHandler = (product) => {
    dispatch(removeFromWishlist(product));
    playPopAudio();
  };

  const clearWishlistHandler = () => {
    dispatch(clearWishlist());
    playPopAudio();
  };

  return {
    clearWishlist: clearWishlistHandler,
    addToWishlist: addToWishlistHandler,
    removeFromWishlist: removeFromWishlistHandler,
    wishlistItems,
  };
};
