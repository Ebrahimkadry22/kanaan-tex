
import { brands } from "./brands";

const TrustedBrands = () => {
  return (
    <section className="bg-[#0B0D11] py-24 overflow-hidden">

     

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#B2D234] text-sm font-semibold">
            Trusted Worldwide
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Trusted by Fashion Brands
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            We proudly manufacture premium textile accessories for
            fashion companies around the world.
          </p>

        </div>

        <div className="mt-20 overflow-hidden">

          <div className="flex whitespace-nowrap animate-marquee gap-20">

            {[...brands, ...brands].map((brand, index) => (

              <div
                key={index}
                className="text-4xl font-black text-white/20 hover:text-[#B2D234] transition duration-300 cursor-pointer"
              >
                {brand}
              </div>

            ))}

          </div>

        </div>

      

    </section>
  );
};

export default TrustedBrands;