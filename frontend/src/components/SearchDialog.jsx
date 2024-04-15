import * as React from "react";

import { cn } from "@/utils/cn";
import { SearchIcon, XIcon } from "lucide-react";

import products from "@/constants/Products.json";

import { ProductCardSearch } from "@/components/ProductCard";
import Container from "@/components/ui/Container";

export default function SearchDialog({ close, open }) {
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const results = products?.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setSearchResults(results);
  };

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white/80 py-24 backdrop-blur-sm duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <button
        onClick={close}
        className="fixed right-0 top-0 flex h-10 w-full justify-end bg-black/50 text-white"
      >
        <XIcon className="m-3 size-4" />
        <span className="sr-only">close</span>
      </button>
      <Container className="max-w-screen-md">
        <div className="relative bg-black/5 p-2">
          <SearchIcon className="absolute left-5 top-1/2 z-50 size-4 -translate-y-1/2" />
          <input
            type="text"
            id="search"
            placeholder="Search for a product..."
            name="search"
            className="relative h-12 w-full border border-black bg-white px-10 text-sm focus:outline-none"
            onChange={handleSearchChange}
          />
        </div>
        <div>
          {searchResults.length > 0 && searchTerm && (
            <div className="grid w-full grid-cols-2 gap-4 py-12 sm:grid-cols-3 lg:grid-cols-4">
              {searchResults.map((product) => (
                <ProductCardSearch
                  key={product.id}
                  product={product}
                  close={close}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
