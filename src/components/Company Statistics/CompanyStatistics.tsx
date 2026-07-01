import { motion } from "framer-motion";
import Container from "../ui/Container";
import StatisticCard from "./StatisticCard";
import { statistics } from "./statisticsData";

const CompanyStatistics = () => {
  return (
    <section className="relative overflow-hidden bg-[#101418] py-32">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#B2D234]/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B2D234]/10 blur-[170px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full bg-[#B2D234]/10 px-6 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Our Achievements
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Numbers That
            <span className="text-[#B2D234]"> Define Excellence</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every number represents years of dedication, quality craftsmanship,
            and trusted partnerships around the world.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <StatisticCard {...item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyStatistics;