import { motion } from "framer-motion";
import Container from "../ui/Container";
import heroImage from "../../assets/images/about/about-hero.jfif";

const AboutHero = () => {
  return (
    <section
      className="relative flex min-h-[80vh]  items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="rounded-full  bg-[#B2D234]/20 px-5 py-2 text-sm uppercase tracking-[3px] text-[#B2D234]">
            About KANAAN TEX
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-white">
            Crafting Excellence
            <br />
            Since 1991
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            We are one of the leading manufacturers of woven labels,
            printed labels, ribbons, hang tags and premium textile
            accessories trusted by fashion brands worldwide.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;