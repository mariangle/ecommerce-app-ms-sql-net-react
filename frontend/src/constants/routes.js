import Landing from "@/pages/Landing";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import AdminPanel from "@/pages/AdminPanel";
import Login from "@/pages/Login";
import ProductList from "@/pages/ProductList";
import Wishlist from "@/pages/Wishlist";

export const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/sneakers",
    component: ProductList,
  },
  {
    path: "/sneakers/:brand",
    component: ProductList,
  },
  {
    path: "/sneakers/sale",
    component: ProductList,
  },
  {
    path: "/products/:slug",
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
    path: "/auth",
    component: Login,
  },
  {
    path: "/wishlist",
    component: Wishlist,
  },
];
