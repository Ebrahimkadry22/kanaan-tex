import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import ctaImage from "../../assets/images/factory/factory1.jpg";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-36">

      {/* Background */}

      <img
        src={ctaImage}
        alt="Factory"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#0F1115]/85" />

      {/* Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#B2D234]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B2D234]/10 blur-[180px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative z-10 mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-14 text-center backdrop-blur-xl"
        >

          <span className="inline-flex rounded-full bg-[#B2D234]/10 px-6 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">

            Ready To Work Together?

          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">

            Let's Create
            <br />

            <span className="text-[#B2D234]">
              Something Exceptional
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

            Whether you need woven labels, printed labels,
            ribbons or premium textile accessories,
            our team is ready to deliver world-class quality.

          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-full bg-[#B2D234] px-10 py-5 text-lg font-semibold text-black transition duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(178,210,52,.4)]"
            >
              Request A Quote
            </Link>

            <Link
              to="/products"
              className="rounded-full border border-white/20 px-10 py-5 text-lg font-semibold text-white transition duration-500 hover:border-[#B2D234] hover:bg-[#B2D234] hover:text-black"
            >
              Explore Products
            </Link>

          </div>

          {/* Statistics */}

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

            <div>
              <h3 className="text-4xl font-bold text-[#B2D234]">
                30+
              </h3>

              <p className="mt-2 text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B2D234]">
                500+
              </h3>

              <p className="mt-2 text-gray-400">
                Global Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B2D234]">
                24/7
              </h3>

              <p className="mt-2 text-gray-400">
                Customer Support
              </p>
            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
};

export default CallToAction;