import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}

const FAQItem = ({
  question,
  answer,
  open,
  onClick,
}: Props) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#15181E] overflow-hidden">

      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-7"
      >
        <h3 className="text-left text-xl font-semibold text-white">
          {question}
        </h3>

        <FaChevronDown
          className={`transition duration-300 ${
            open ? "rotate-180 text-[#B2D234]" : ""
          }`}
        />
      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .3 }}
          >
            <p className="px-7 pb-7 leading-8 text-gray-400">
              {answer}
            </p>
          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
};

export default FAQItem;