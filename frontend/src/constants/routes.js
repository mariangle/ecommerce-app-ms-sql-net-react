import Landing from "../pages/Landing";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AdminPanel from "../pages/AdminPanel";
import Account from "../components/checkout/LogIn";
import Authentication from "../pages/Authentication";
import ProductList from "../pages/ProductList";
import Wishlist from "../pages/Wishlist";

export const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/:category",
    component: ProductList,
  },
  {
    path: "/products/:id",
    component: ProductDetails,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/admin",
    component: AdminPanel,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/auth",
    component: Authentication,
  },
  {
    path: "/wishlist",
    component: Wishlist,
  },
];
