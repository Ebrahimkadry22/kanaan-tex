import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  description: string;
}

const CertificationCard = ({ image, title, description }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 6,
        rotateY: -6,
      }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificationCard;