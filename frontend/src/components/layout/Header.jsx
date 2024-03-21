import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/constants/icons";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "../../utils/hooks/useWishlist";

import Container from "@/components/ui/Container";
import Banner from "@/components/layout/Banner";
import NavItem from "@/components/layout/NavItem";

const navLinks = [
  { label: "Adidas", url: "/adidas" },
  { label: "Yeezy", url: "/yeezy" },
  { label: "New Balance", url: "/new-balance" },
  { label: "Nike", url: "/nike" },
];

export default function Header() {
  const { quantity } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <>
      <Banner />
      <Container className="flex items-center justify-between py-4">
        <Link className="font-bold" to="/">
          <h1>STORE</h1>
        </Link>
        <ul className="flex items-center gap-2">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavItem item={item} />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link to="/account">
            <FontAwesomeIcon icon={icons.user} />
          </Link>
          <Link to="/wishlist" className="flex items-center">
            <FontAwesomeIcon icon={icons.heart} />
            {wishlistCount > 0 && (
              <span>{wishlistCount > 9 ? "9+" : wishlistCount} </span>
            )}
          </Link>
          <Link to="/cart">
            Shopping bag <span>({quantity > 9 ? "9+" : quantity})</span>
          </Link>
        </div>
      </Container>
    </>
  );
}
