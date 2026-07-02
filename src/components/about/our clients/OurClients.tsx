import { motion } from "framer-motion";
import { clients } from "./clients";
import Container from "../../ui/Container";

const OurClients = () => {
  return (
    <section className="overflow-hidden bg-[#0F1115] py-32">

      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Our Clients
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Trusted By Leading
            <span className="text-[#B2D234]"> Brands</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We proudly collaborate with fashion brands and manufacturers
            around the world.
          </p>

        </motion.div>

      </Container>

      {/* Marquee */}

      <div className="relative">

        <div className="flex w-max animate-[marquee_30s_linear_infinite]">

          {[...clients, ...clients].map((logo, index) => (

            <div
              key={index}
              className="mx-8 flex h-40 w-60 items-center justify-center rounded-[24px]
              border border-white/10 bg-white/5
              backdrop-blur-xl transition duration-500
              hover:border-[#B2D234]
              hover:bg-white/10"
            >
              <img
                src={logo}
                alt=""
                className="max-h-20 max-w-[140px] grayscale transition duration-500 hover:grayscale-0"
              />
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default OurClients;