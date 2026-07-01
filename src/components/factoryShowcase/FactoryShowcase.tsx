import { motion } from "framer-motion";
import Container from "../ui/Container";
import FactoryCard from "./FactoryCard";
import { factoryImages } from "./factoryImages";

const FactoryShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-[#11151A] py-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#B2D234]/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B2D234]/10 blur-[170px]" />

      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >

          <span className="inline-flex rounded-full bg-[#B2D234]/10 px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B2D234]">

            Inside Our Factory

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">

            Where Quality
            <span className="text-[#B2D234]"> Comes To Life</span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            Explore our modern manufacturing facility where every woven label,
            ribbon and textile accessory is crafted with precision and care.

          </p>

        </motion.div>

        {/* Masonry Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6">

          {factoryImages.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
            >

              <FactoryCard
                image={item.image}
                title={item.title}
                size={item.size as "large" | "wide" | "small"}
              />

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default FactoryShowcase;