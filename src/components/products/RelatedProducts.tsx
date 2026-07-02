import { motion } from "framer-motion";
import { products } from "../products/productsData";
import ProductCard from "../products/ProductCard";
import Container from "../ui/Container";

interface Props {
  currentProductId: number;
}

const RelatedProducts = ({ currentProductId = 1 }: Props) => {
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 3);

  return (
    <section className="mt-32 border-t border-white/10 pt-24">

     <Container>

         <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
          You May Also Like
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Related Products
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Explore more premium textile accessories from our collection.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
     </Container>

    </section>
  );
};

export default RelatedProducts;