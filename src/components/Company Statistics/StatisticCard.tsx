import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  number: number;
  suffix: string;
  title: string;
  icon: React.ElementType;
}

const StatisticCard = ({
  number,
  suffix,
  title,
  icon: Icon,
}: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += Math.ceil(number / 50);

      if (start >= number) {
        start = number;
        clearInterval(timer);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B2D234] hover:shadow-[0_20px_60px_rgba(178,210,52,.25)]"
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#B2D234]/10 text-4xl text-[#B2D234] transition duration-500 group-hover:rotate-12 group-hover:bg-[#B2D234] group-hover:text-black">
        <Icon />
      </div>

      <h3 className="mt-8 text-center text-5xl font-bold text-white">
        {count}
        {suffix}
      </h3>

      <p className="mt-4 text-center text-gray-400">{title}</p>

      <div className="mx-auto mt-6 h-1 w-0 rounded-full bg-[#B2D234] transition-all duration-500 group-hover:w-full"></div>
    </motion.div>
  );
};

export default StatisticCard;