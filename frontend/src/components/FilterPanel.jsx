import ProductFilter from "@/components/ProductFilter";

export default function FilterPanel({ loading }) {
  return (
    <div className="hidden lg:block">
      <ProductFilter loading={loading} />
    </div>
  );
}
