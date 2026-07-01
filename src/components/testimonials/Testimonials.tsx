import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../ui/Container";
import FeaturedTestimonial from "./FeaturedTestimonial";
import ClientCard from "./ClientCard";
import { testimonials } from "./testimonialsData";

const Testimonials = () => {
  const [selected, setSelected] = useState(testimonials[0]);

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
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >

          <span className="rounded-full bg-[#B2D234]/10 px-6 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">

            Testimonials

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">

            Trusted By
            <span className="text-[#B2D234]">
              {" "}Global Brands
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">

            Hear what our international partners say about
            quality, reliability and long-term cooperation.

          </p>

        </motion.div>

        {/* Featured Card */}

        <AnimatePresence mode="wait">

          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: .5 }}
          >

            <FeaturedTestimonial
              name={selected.name}
              company={selected.company}
              position={selected.position}
              image={selected.image}
              review={selected.review}
            />

          </motion.div>

        </AnimatePresence>

        {/* Clients */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {testimonials.map((client) => (

            <ClientCard
              key={client.id}
              image={client.image}
              name={client.name}
              company={client.company}
              position={client.position}
              active={selected.id === client.id}
              onClick={() => setSelected(client)}
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Testimonials;