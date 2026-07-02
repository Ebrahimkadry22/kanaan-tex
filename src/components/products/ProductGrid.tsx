import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "./productsData";

interface Props {
  search: string;
  activeCategory: string;
}

const ProductGrid = ({ search, activeCategory }: Props) => {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-[#0F1115] pb-32">
      <div className="mx-auto max-w-7xl px-6">

        {filteredProducts.length === 0 ? (
          <div className="py-40 text-center">

            <h3 className="text-3xl font-bold text-white">
              No Products Found
            </h3>

            <p className="mt-4 text-gray-400">
              Try another search or category.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;