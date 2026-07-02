import { useState } from "react";
import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import { faqData } from "./faqData";
import Container from "../../ui/Container";

const FAQ = () => {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section className="bg-[#0F1115] py-32">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Find answers to the most common questions about our products,
            manufacturing process, and services.
          </p>

        </motion.div>

        <div className="mx-auto max-w-4xl space-y-5">

          {faqData.map((item) => (

            <FAQItem
              key={item.id}
              {...item}
              open={active === item.id}
              onClick={() =>
                setActive(active === item.id ? null : item.id)
              }
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default FAQ;