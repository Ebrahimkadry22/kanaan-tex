import { FaCheckCircle } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <div>

      <span className="rounded-full bg-[#B2D234]/10 px-4 py-2 text-[#B2D234]">
        Woven Labels
      </span>

      <h1 className="mt-6 text-5xl font-bold text-white">
        Premium Woven Labels
      </h1>

      <p className="mt-6 leading-8 text-gray-400">
        Premium woven labels manufactured with high-quality yarns,
        excellent durability and luxury finishing for fashion brands.
      </p>

      <div className="mt-10 space-y-5">

        {[
          "High Durability",
          "Premium Materials",
          "Custom Designs",
          "Worldwide Shipping",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <FaCheckCircle className="text-[#B2D234]" />
            <span className="text-white">{item}</span>
          </div>
        ))}

      </div>

      <button className="mt-12 rounded-full bg-[#B2D234] px-10 py-4 font-semibold text-black transition hover:scale-105">
        Request Quote
      </button>

    </div>
  );
};

export default ProductInfo;