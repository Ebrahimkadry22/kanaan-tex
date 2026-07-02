import { motion } from "framer-motion";
import type { IconType } from "react-icons";


interface Props {
  icon: IconType;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}

const ReportCategoryCard = ({
  icon: Icon,
  title,
  description,
  active,
  onClick,
}: Props) => {
  return (
    <motion.button
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full rounded-[28px] border p-8 text-left transition-all duration-300 ${
        active
          ? "border-[#B2D234] bg-[#B2D234]/10"
          : "border-white/10 bg-[#15181E] hover:border-[#B2D234]"
      }`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B2D234]/10 text-3xl text-[#B2D234]">
        <Icon />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>
    </motion.button>
  );
};

export default ReportCategoryCard;