import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { timeline } from "./timelineData";
import Container from "../../ui/Container";

const CompanyTimeline = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] py-32">

      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="rounded-full bg-[#B2D234]/10 px-6 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Company Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Our Timeline
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            More than three decades of innovation, craftsmanship,
            and trusted partnerships.
          </p>

        </motion.div>

        {/* Vertical Line */}

        <div className="relative">

          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#B2D234] via-[#B2D234]/50 to-transparent lg:block" />

          <div className="space-y-20">

            {timeline.map((item, index) => (

              <TimelineCard
                key={item.year}
                index={index}
                {...item}
              />

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
};

export default CompanyTimeline;