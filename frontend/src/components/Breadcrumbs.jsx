import { cn } from "@/utils/cn";

import { useLocation, Link } from "react-router-dom";
import { navLinks } from "@/constants/navLinks";
import { toKebabCase } from "@/utils/toKebabCase";

const frontPage = {
  label: "Home",
  url: "/",
};

const IndexBreadcrumb = () => (
  <>
    <li className="p-0">
      <Link to={frontPage.url}>{frontPage.label}</Link>
    </li>
    <span className="text-sm">/</span>
  </>
);

export default function Breadcrumbs({ className = "", product }) {
  const pathname = useLocation().pathname;
  const routes = pathname.split("/").filter((item) => item);

  if (routes.length === 0) return null;

  if (product) {
    return (
      <ul className={cn("flex items-center justify-start gap-2", className)}>
        <IndexBreadcrumb />
        <li className="p-0">
          <Link to={`/sneakers/${toKebabCase(product.brand)}`}>
            {product.brand}
          </Link>
        </li>
        <span className="text-sm">/</span>
        <li className="p-0">{product.name}</li>
      </ul>
    );
  }

  return (
    <ul className={cn("flex items-center justify-start gap-2", className)}>
      <IndexBreadcrumb />
      {routes.map((route, index) => {
        const navLink = navLinks.find((link) => link.url.includes(route));
        return (
          <div key={index} className="flex items-center gap-2">
            <li className="p-0">
              <Link to={navLink.url}>{navLink.label}</Link>
            </li>
            {index !== routes.length - 1 && <span className="text-sm">/</span>}
          </div>
        );
      })}
    </ul>
  );
}
