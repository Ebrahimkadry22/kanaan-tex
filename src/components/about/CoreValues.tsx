import { motion } from "framer-motion";
import {
  FaAward,
  FaLeaf,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

import Container from "../ui/Container";

const values = [
  {
    icon: FaAward,
    title: "Premium Quality",
    desc: "Every product is manufactured according to international quality standards.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "We continuously invest in technology and modern production techniques.",
  },
  {
    icon: FaUsers,
    title: "Customer First",
    desc: "Building long-term partnerships through trust and exceptional service.",
  },
  {
    icon: FaLeaf,
    title: "Sustainability",
    desc: "Responsible manufacturing with environmentally conscious practices.",
  },
];

const CoreValues = () => {
  return (
    <section className="relative overflow-hidden bg-[#11161B] py-32">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#B2D234]/10 blur-[180px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Core Values
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            The Principles That
            <span className="text-[#B2D234]"> Drive Us</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Our values define how we work, innovate, and build lasting
            partnerships with brands around the world.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12 }}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B2D234] hover:shadow-[0_25px_60px_rgba(178,210,52,.2)]"
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[#B2D234]/10 text-4xl text-[#B2D234] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#B2D234] group-hover:text-black">
                  <Icon />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {value.desc}
                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-[#B2D234] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default CoreValues;