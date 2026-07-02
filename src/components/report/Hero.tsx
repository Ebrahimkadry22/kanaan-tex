import { motion } from "framer-motion";
import Container from "../ui/Container";
import heroImage from "../../assets/images/pexels-yankrukov-7693692.jpg";

const Hero = () => {
  return (
    <section className="relative flex h-[80vh] items-center overflow-hidden">

      <img
        src={heroImage}
        alt="Report"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/15 to-transparent" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative z-10 max-w-3xl"
        >

          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-[#B2D234] uppercase tracking-[4px]">
            Report
          </span>

          <h1 className="mt-8 text-6xl font-bold text-white">
            Report an Issue
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            We value your feedback. Please report any issue,
            complaint, or suggestion to help us improve our
            products and services.
          </p>

        </motion.div>

      </Container>

    </section>
  );
};

export default Hero;