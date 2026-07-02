import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

const ProductCard = ({
  id,
  title,
  image,
  description,
  category,
}: Props) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#15181E] transition-all duration-500 hover:-translate-y-3 hover:border-[#B2D234] hover:shadow-[0_20px_60px_rgba(178,210,52,.2)]"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-[#B2D234] px-4 py-2 text-sm font-semibold text-black">
          {category}
        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>
        <Link to={`/products/${id}`}>
        <div className="mt-8 flex items-center gap-3 font-semibold text-[#B2D234]">

          View Details

          <FaArrowRight className="transition group-hover:translate-x-2" />

        </div>
        </Link>

      </div>

    </Link>
  );
};

export default ProductCard;