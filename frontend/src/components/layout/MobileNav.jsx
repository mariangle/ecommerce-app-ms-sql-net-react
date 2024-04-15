import { Link } from "react-router-dom";

import { XIcon } from "lucide-react";
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
          <XIcon className="size-5" />
        </button>
        <div>
          <Link className="mb-4 block text-lg font-bold" to="/" onClick={close}>
            restocks
          </Link>
        </div>
        <ul className="space-y-4">
          {navLinks.map((item, index) => (
            <li className="p-0" key={index} onClick={close}>
              <Link
                to={item.url}
                className={cn(
                  "text-base",
                  item.url === "/sneakers/sale" && "text-red-700",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
