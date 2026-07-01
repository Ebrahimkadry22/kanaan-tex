import { motion } from "framer-motion";
import Container from "../ui/Container";
import {
  FaAward,
  FaLeaf,
  FaShippingFast,
  FaIndustry,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={34} />,
    title: "Premium Quality",
    description:
      "Manufactured with the highest quality standards to deliver durable and elegant textile accessories.",
  },
  {
    icon: <FaIndustry size={34} />,
    title: "Modern Manufacturing",
    description:
      "Advanced production technology ensures precision, consistency, and high efficiency.",
  },
  {
    icon: <FaLeaf size={34} />,
    title: "Eco-Friendly",
    description:
      "We use sustainable materials and environmentally responsible manufacturing processes.",
  },
  {
    icon: <FaShippingFast size={34} />,
    title: "Worldwide Shipping",
    description:
      "Reliable logistics and fast worldwide delivery for clients across different markets.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#11151A] py-32">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#B2D234]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            Excellence In Every Thread
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Combining innovation, craftsmanship, and decades of experience to
            create premium textile accessories trusted by leading brands.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#B2D234] hover:shadow-[0_20px_50px_rgba(178,210,52,0.2)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B2D234]/0 to-[#B2D234]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B2D234]/10 text-[#B2D234] transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;