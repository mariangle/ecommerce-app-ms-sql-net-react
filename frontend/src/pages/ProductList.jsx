import React from "react";
import SearchBar from "@/components/SearchBar";
import Container from "@/components/ui/Container";
import ProductListGrid from "@/components/product/ProductList";
import ProductFilter from "@/components/filter/ProductFilter";

export default function ProductList() {
  return (
    <>
      <SearchBar />
      <Container page>
        <ProductFilter />
        <ProductListGrid />
      </Container>
    </>
  );
}
