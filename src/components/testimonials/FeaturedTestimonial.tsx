import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface FeaturedTestimonialProps {
  name: string;
  company: string;
  position: string;
  image: string;
  review: string;
}

const FeaturedTestimonial = ({
  name,
  company,
  position,
  image,
  review,
}: FeaturedTestimonialProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#B2D234] hover:shadow-[0_30px_80px_rgba(178,210,52,.25)]">

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#B2D234]/10 blur-[100px]" />

      {/* Quote */}
      <FaQuoteLeft className="absolute right-10 top-10 text-8xl text-white/10" />

      <div className="relative z-10 flex flex-col items-center text-center">

        <img
          src={image}
          alt={name}
          className="h-28 w-28 rounded-full border-4 border-[#B2D234] object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="mt-6 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xl leading-9 italic text-gray-300">
          "{review}"
        </p>

        <h3 className="mt-8 text-3xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-2 text-[#B2D234]">
          {position}
        </p>

        <p className="text-gray-400">
          {company}
        </p>

      </div>
    </div>
  );
};

export default FeaturedTestimonial;