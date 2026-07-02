import { useState } from "react";
import ProductFilters from "../components/products/ProductFilters"
import ProductHero from "../components/products/ProductHero"
import ProductGrid from "../components/products/ProductGrid";


const Products = () => {
  const [search, setSearch] = useState("");
const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
    <ProductHero />
    <ProductFilters
  search={search}
  setSearch={setSearch}
  activeCategory={activeCategory}
  setActiveCategory={setActiveCategory}
/>
<ProductGrid
      search={search}
      activeCategory={activeCategory}
    />


    </>
  )
}

export default Products