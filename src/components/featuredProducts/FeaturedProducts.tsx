import { motion } from "framer-motion";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";
import { products } from "./products";

const FeaturedProducts = () => {
  return (
    <section className="bg-[#0F1115] py-32">

      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >

          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Featured Products
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Crafted For Premium Brands
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Explore our premium textile accessories manufactured with precision,
            innovation and exceptional quality.
          </p>

        </motion.div>

        {/* Bento Grid */}

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[320px] gap-6">

          {/* Large */}

          <motion.div
            className="md:col-span-2 md:row-span-2"
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
          >
            <ProductCard {...products[0]} />
          </motion.div>

          {/* Top Right */}

          <motion.div
            className="md:col-span-2"
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
          >
            <ProductCard {...products[1]} />
          </motion.div>

          {/* Bottom Right */}

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
          >
            <ProductCard {...products[2]} />
          </motion.div>

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
          >
            <ProductCard {...products[3]} />
          </motion.div>

          {/* Bottom Wide */}

          <motion.div
            className="md:col-span-3"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
          >
            <ProductCard {...products[4]} />
          </motion.div>

          {/* Small */}

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
          >
            <ProductCard {...products[5]} />
          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default FeaturedProducts;