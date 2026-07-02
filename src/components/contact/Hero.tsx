import { motion } from "framer-motion";
import Container from "../ui/Container";
import heroImage from "../../assets/images/pexels-tima-miroshnichenko-5453847.jpg";

const ContactHero = () => {
  return (
    <section className="relative flex h-[80vh] items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Contact Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/15 to-transparent" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative z-10 max-w-3xl"
        >

          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Contact Us
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-white">
            Let's Build Something
            <span className="text-[#B2D234]"> Great Together</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            Whether you need premium woven labels, printed labels,
            ribbons or custom textile accessories, our team is ready
            to help.
          </p>

        </motion.div>

      </Container>

    </section>
  );
};

export default ContactHero;