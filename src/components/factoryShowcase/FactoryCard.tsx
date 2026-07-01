import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

interface FactoryCardProps {
    image: string;
    title: string;
    size: "large" | "wide" | "small";
}

const FactoryCard = ({ image, title, size }: FactoryCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className={`
group
relative
overflow-hidden
rounded-[28px]
cursor-pointer
h-full
${size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : size === "wide"
                        ? "md:col-span-2"
                        : ""
                }
`}
        >
            {/* Image */}

           <img
  src={image}
  alt={title}
  className="absolute inset-0 h-full  object-top w-full transition duration-700 group-hover:scale-110"
/>

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Glow */}

            <div className="absolute inset-0 bg-[#B2D234]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Border */}

            <div className="absolute inset-0 rounded-[28px] border border-transparent transition duration-500 group-hover:border-[#B2D234]" />

            {/* Zoom Button */}

            <div className="absolute right-6 top-6 flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-[#B2D234] text-black transition duration-500 group-hover:scale-100">
                <FaSearchPlus />
            </div>

            {/* Content */}

            <div className="absolute bottom-8 left-8">

                <span className="rounded-full bg-[#B2D234]/20 px-4 py-2 text-xs uppercase tracking-[3px] text-[#B2D234]">
                    Factory
                </span>

                <h3 className="mt-4 text-3xl font-bold text-white">
                    {title}
                </h3>

            </div>
        </motion.div>
    );
};

export default FactoryCard;