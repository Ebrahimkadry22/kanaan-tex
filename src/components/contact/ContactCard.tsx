import { motion } from "framer-motion";
import type { IconType } from "react-icons";


interface Props {
  icon: IconType;
  title: string;
  value: string;
}

const ContactCard = ({ icon: Icon, title, value }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="group rounded-[30px] border border-white/10 bg-[#15181E] p-8 transition-all duration-500 hover:border-[#B2D234] hover:shadow-[0_20px_60px_rgba(178,210,52,.15)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B2D234]/10 text-3xl text-[#B2D234] transition-all duration-500 group-hover:bg-[#B2D234] group-hover:text-black">
        <Icon />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        {value}
      </p>
    </motion.div>
  );
};

export default ContactCard;