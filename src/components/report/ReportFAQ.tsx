import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Container from "../ui/Container";
import { reportFaqData } from "./reportFaqData";

const ReportFAQ = () => {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section className="bg-[#0F1115] py-24">
      <Container>

        <div className="mb-16 text-center">

          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Find answers to common questions before submitting your report.
          </p>

        </div>

        <div className="mx-auto max-w-4xl space-y-5">

          {reportFaqData.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#15181E]"
            >

              <button
                onClick={() =>
                  setActive(active === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between p-7"
              >
                <h3 className="text-left text-xl font-semibold text-white">
                  {item.question}
                </h3>

                <FaChevronDown
                  className={`transition ${
                    active === item.id
                      ? "rotate-180 text-[#B2D234]"
                      : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {active === item.id && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-7 pb-7 leading-8 text-gray-400">
                      {item.answer}
                    </p>
                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
};

export default ReportFAQ;