import { toKebabCase } from "@/utils/toKebabCase";

export const brands = ["Adidas", "Jordan", "New Balance", "Nike"];

const generateNavLinks = () => {
  const navLinks = brands.map((brand) => ({
    label: brand,
    url: `/sneakers/${toKebabCase(brand)}`,
  }));

  return [...navLinks];
};

export const navLinks = [
  { label: "All sneakers", url: "/sneakers" },
  ...generateNavLinks(),
  { label: "Sale", url: "/sneakers/sale" },
];
