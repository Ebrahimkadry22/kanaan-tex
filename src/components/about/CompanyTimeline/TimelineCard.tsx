import { motion } from "framer-motion";

interface Props {
  year: string;
  title: string;
  description: string;
  index: number;
}

const TimelineCard = ({
  year,
  title,
  description,
  index,
}: Props) => {
  const left = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: left ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .6,
      }}
      className={`relative flex items-center ${
        left ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`w-full lg:w-[45%] rounded-[28px]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition
        duration-500
        hover:border-[#B2D234]
        hover:shadow-[0_20px_60px_rgba(178,210,52,.25)]`}
      >
        <span className="text-[#B2D234] text-5xl font-bold">
          {year}
        </span>

        <h3 className="mt-5 text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          {description}
        </p>
      </div>

      {/* Dot */}

      <div className="absolute left-1/2 top-1/2 z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#B2D234] bg-[#0F1115] shadow-[0_0_30px_rgba(178,210,52,.7)]" />
    </motion.div>
  );
};

export default TimelineCard;