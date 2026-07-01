import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

const ProductCard = ({
  title,
  description,
  image,
  link,
  
}: ProductCardProps) => {
  return (
   <Link
  to={link}
  className="
group
relative
block
h-full
overflow-hidden
rounded-[28px]
transition-all
duration-500
hover:-translate-y-3
hover:shadow-[0_20px_60px_rgba(178,210,52,0.25)]
"
>
      <img
  src={image}
  alt={title}
  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-115
duration-700
ease-out"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t
from-black/90
via-black/30
to-transparent
group-hover:from-black/70
transition-all
duration-500" />

      {/* Badge */}
      <div className="absolute top-6 left-6 rounded-full bg-[#B2D234] px-4 py-2 text-xs font-bold text-black">
        Premium
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">

        <h3 className="text-2xl md:text-3xl font-bold leading-tight  text-white transition-all
duration-500
group-hover:-translate-y-2">
          {title}
        </h3>

        <p className="mt-3
text-gray-300
transition-all
duration-500
opacity-80
group-hover:opacity-100
group-hover:translate-x-1">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-3 text-[#B2D234] font-semibold">

          View Details

          <FaArrowRight className="transition-all
duration-500
group-hover:translate-x-3
group-hover:rotate-[-15deg]" />

        </div>

      </div>

      {/* Hover Glow */}
      <div className="absolute
inset-0
rounded-[28px]
bg-[#B2D234]/0
transition-all
duration-500
group-hover:bg-[#B2D234]/5" />
{/* border */}
<div
className="
absolute
inset-0
rounded-[28px]
border
border-white/5
transition-all
duration-500
group-hover:border-[#B2D234]
"
/>
    </Link>
  );
};

export default ProductCard;