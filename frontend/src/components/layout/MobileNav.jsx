import { Link } from "react-router-dom";

import { cn } from "@/utils/cn";
import { navLinks } from "@/constants/navLinks";

export default function MobileNav({ open, close }) {
  return (
    <>
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-30 bg-black/50 backdrop-blur-sm duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      ></div>
      <div
        className={cn(
          "fixed inset-0 z-40 max-w-sm bg-white p-8 backdrop-blur-xl duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button className="absolute right-4 top-4" onClick={close}>
          x
        </button>
        <ul className="space-y-4">
          {navLinks.map((item, index) => (
            <li className="p-0" key={index} onClick={close}>
              <Link to={item.url} className="text-lg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
