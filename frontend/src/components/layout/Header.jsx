import * as React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeartIcon, UserIcon, SearchIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import { navLinks } from "@/constants/navLinks";

import MobileNav from "@/components/layout/MobileNav";
import SearchDialog from "@/components/SearchDialog";
import Container from "@/components/ui/Container";
import Banner from "@/components/layout/Banner";

export default function Header() {
  const wishlistCount = useSelector((state) => state.wishlist.items).length;
  const cartCount = useSelector((state) => state.cart.items).length;

  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <>
      <MobileNav
        open={isMobileNavOpen}
        close={() => setIsMobileNavOpen(false)}
      />
      <SearchDialog close={() => setIsSearchOpen(false)} open={isSearchOpen} />
      <Banner />
      <header className="sticky top-0 z-20 border-b bg-white">
        <Container className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="space-y-1.5 lg:hidden"
            >
              <div className="h-px w-6 bg-black" />
              <div className="h-px w-4 bg-black" />
            </button>
            <Link className="text-base font-bold md:text-lg" to="/">
              restocks
            </Link>
          </div>
          <ul className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  className={cn(
                    item.url === "/sneakers/sale" && "text-red-700",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end gap-3">
            <button onClick={() => setIsSearchOpen(true)}>
              <SearchIcon className="size-4" />
            </button>
            <Link to="/account">
              <UserIcon className="size-4" />
            </Link>
            <Link to="/wishlist" className="flex items-center">
              <HeartIcon className="size-4" />
              {wishlistCount > 0 && (
                <span>{wishlistCount > 9 ? "9+" : wishlistCount} </span>
              )}
            </Link>
            <Link to="/cart">
              Shopping bag <span>({cartCount > 9 ? "9+" : cartCount})</span>
            </Link>
          </div>
        </Container>
      </header>
    </>
  );
}
