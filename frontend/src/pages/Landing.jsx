import { Link } from "react-router-dom";

import Container from "@/components/ui/Container";
import Newsletter from "@/components/Newsletter";
import ProductList from "@/components/ProductList";

import useProducts from "@/hooks/useProducts";

export default function Landing() {
  const { loading, products } = useProducts();

  const latestProducts = products.reverse().slice(0, 5);

  return (
    <>
      <Container className="py-20">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold uppercase">Just dropped</h2>
            <Link
              to="/sneakers"
              className="text-sm text-neutral-500 underline underline-offset-2"
            >
              View All
            </Link>
          </div>
          <ProductList products={latestProducts} loading={loading} big />
        </div>
      </Container>
      <div className="bg-neutral-100 py-16">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {brands.map((brand, index) => (
            <div>
              <Link to={brand.url} key={index} className="block">
                <img
                  src={brand.image}
                  alt=""
                  className="aspect-square h-full w-full object-cover"
                />
                <div className="mt-4">
                  <div className="font-semibold uppercase">{brand.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </Container>
      </div>
      <Newsletter />
    </>
  );
}

const brands = [
  {
    name: "Nike",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e31b33a1b5911193c47e7b5/279b45e0-3243-4e58-aee2-dd18403e2085/nike-swoosh-logo.jpeg",
    url: "/sneakers/nike",
  },
  {
    name: "Adidas",
    image: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
    url: "/sneakers/adidas",
  },
  {
    name: "Jordan",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png",
    url: "/sneakers/jordan",
  },
  {
    name: "New Balance",
    image: "https://logowik.com/content/uploads/images/new-balance.jpg",
    url: "/sneakers/new-balance",
  },
];
