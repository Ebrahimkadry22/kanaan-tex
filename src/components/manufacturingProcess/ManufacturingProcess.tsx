import { motion } from "framer-motion";
import Container from "../ui/Container";
import {steps} from './processData'

const ManufacturingProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] py-32">
      {/* Background Glow */}

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#B2D234]/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#B2D234]/10 blur-[120px]" />

      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-24"
        >
          <span className="inline-flex rounded-full bg-[#B2D234]/10 px-6 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            From Concept
            <span className="text-[#B2D234]"> To Delivery</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every textile accessory goes through a carefully controlled process
            to ensure outstanding quality and consistency.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative hidden lg:block">
          <div className="absolute top-10 left-0 right-0 h-[3px] bg-white/10 rounded-full">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-full bg-gradient-to-r from-[#B2D234] to-[#D9EC8A]"
            />

          </div>

          <div className="grid grid-cols-4 gap-8">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .2 }}
                  className="relative text-center"
                >
                  {/* Circle */}

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#B2D234] bg-[#101418] shadow-[0_0_30px_rgba(178,210,52,.25)]">

                    <Icon className="text-3xl text-[#B2D234]" />

                  </div>

                  {/* Card */}

                  <div className="group mt-12 flex h-[250px] flex-col rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#B2D234] hover:shadow-[0_20px_60px_rgba(178,210,52,.25)]">

                    <span className="text-sm font-bold tracking-[3px] text-[#B2D234]">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-gray-400">
                      {step.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}

        <div className="space-y-8 lg:hidden">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#B2D234]/10">

                  <Icon className="text-3xl text-[#B2D234]" />

                </div>

                <div>

                  <span className="text-sm font-bold text-[#B2D234]">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ManufacturingProcess;