import { FaArrowRight } from "react-icons/fa";

interface ClientCardProps {
  image: string;
  name: string;
  company: string;
  position: string;
  active?: boolean;
  onClick?: () => void;
}

const ClientCard = ({
  image,
  name,
  company,
  position,
  active = false,
  onClick,
}: ClientCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`
      group
      relative
      w-full
      overflow-hidden
      rounded-[24px]
      border
      p-6
      text-left
      transition-all
      duration-500
      ${
        active
          ? "border-[#B2D234] bg-[#B2D234]/10 shadow-[0_20px_60px_rgba(178,210,52,.25)]"
          : "border-white/10 bg-white/5 hover:-translate-y-2 hover:border-[#B2D234]"
      }
      `}
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B2D234]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full border-2 border-[#B2D234] object-cover transition duration-500 group-hover:scale-110"
        />

        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>

          <p className="text-sm text-[#B2D234]">{position}</p>

          <p className="text-sm text-gray-400">{company}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 font-medium text-[#B2D234]">
        Read Story

        <FaArrowRight className="transition duration-500 group-hover:translate-x-2" />
      </div>
    </button>
  );
};

export default ClientCard;