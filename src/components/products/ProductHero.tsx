import { motion } from "framer-motion";
import Container from "../ui/Container";
import heroImage from "../../assets/images/products/Etichette-tessute-1.jpg";

const ProductHero = () => {
  return (
    <section className="relative flex h-[70vh] items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Products Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/70 to-transparent" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#B2D234]/10 blur-[180px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Our Products
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Premium Textile
            <span className="text-[#B2D234]"> Accessories</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            Explore our complete range of woven labels, printed labels,
            ribbons, hang tags, packaging and premium textile accessories
            crafted for global fashion brands.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProductHero;