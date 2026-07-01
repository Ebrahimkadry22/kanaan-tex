import { motion } from "framer-motion";
import {
  FaGlobeAfrica,
  FaShippingFast,
  FaBoxOpen,
  FaHandshake,
} from "react-icons/fa";

import Container from "../ui/Container";
import worldMap from "../../assets/images/free-stock-world-map-white-texture-white-board-clothing-transparent-png-1271227.png";

const countries = [
  "Egypt",
  "Turkey",
  "Germany",
  "Spain",
  "Italy",
  "France",
  "Saudi Arabia",
  "UAE",
];

const features = [
  {
    icon: FaShippingFast,
    title: "Fast Worldwide Shipping",
    desc: "Reliable export and on-time delivery.",
  },
  {
    icon: FaBoxOpen,
    title: "Export Quality",
    desc: "Products manufactured to international standards.",
  },
  {
    icon: FaHandshake,
    title: "Trusted Partnership",
    desc: "Long-term relationships with global brands.",
  },
];

const GlobalPresence = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] py-32">

      {/* Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#B2D234]/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B2D234]/10 blur-[180px]" />

      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Global Presence
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Delivering Quality
            <span className="text-[#B2D234]"> Worldwide</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We proudly serve fashion brands and manufacturers across multiple
            countries with premium textile accessories.
          </p>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative mt-20"
        >
          <img
            src={worldMap}
            alt="World Map"
            className="mx-auto max-w-6xl opacity-70"
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {countries.map((country) => (
              <span
                key={country}
                className="rounded-full border border-[#B2D234]/30 bg-[#B2D234]/10 px-5 py-2 text-sm text-[#B2D234] transition hover:scale-105 hover:bg-[#B2D234] hover:text-black"
              >
                🌍 {country}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#B2D234] hover:shadow-[0_20px_60px_rgba(178,210,52,.25)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B2D234]/10 text-3xl text-[#B2D234] transition duration-500 group-hover:bg-[#B2D234] group-hover:text-black">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default GlobalPresence;