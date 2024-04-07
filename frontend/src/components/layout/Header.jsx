import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/constants/icons";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "../../utils/hooks/useWishlist";
import { navLinks } from "@/constants/navLinks";

import Container from "@/components/ui/Container";
import Banner from "@/components/layout/Banner";

export default function Header() {
  const { quantity } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <div className="border-b">
      <Banner />
      <Container className="flex items-center justify-between py-4">
        <Link className="font-bold" to="/">
          <h1>SNEAKERSTORE</h1>
        </Link>
        <ul className="flex items-center gap-2">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className={cn(item.url === "/sale" && "text-red-700")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 justify-end">
          <Link to="/account">
            <FontAwesomeIcon icon={icons.user} />
          </Link>
          <Link to="/wishlist" className="flex items-center w-4">
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
    </div>
  );
}
