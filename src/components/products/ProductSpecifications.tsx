import { FaCheckCircle } from "react-icons/fa";
import Container from "../ui/Container";

const specifications = [
  {
    title: "Material",
    value: "Polyester / Cotton / Satin",
  },
  {
    title: "Width",
    value: "10mm - 100mm",
  },
  {
    title: "Colors",
    value: "Up to 12 Colors",
  },
  {
    title: "Production",
    value: "Custom Manufacturing",
  },
  {
    title: "Delivery",
    value: "Worldwide Shipping",
  },
  {
    title: "MOQ",
    value: "Based on Product Type",
  },
];

const features = [
  "Premium Quality",
  "Eco-Friendly Materials",
  "Custom Designs",
  "High Durability",
  "Luxury Finish",
  "Fast Production",
];

const ProductSpecifications = () => {
  return (
    <section className="mt-20">
        <Container>
      <div className="grid gap-10 lg:grid-cols-2">

        {/* Specifications */}

        <div className="rounded-[30px] border border-white/10 bg-[#15181E] p-8">

          <h2 className="mb-8 text-3xl font-bold text-white">
            Specifications
          </h2>

          <div className="space-y-5">

            {specifications.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span className="text-gray-400">
                  {item.title}
                </span>

                <span className="font-semibold text-white">
                  {item.value}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Features */}

        <div className="rounded-[30px] border border-white/10 bg-[#15181E] p-8">

          <h2 className="mb-8 text-3xl font-bold text-white">
            Features
          </h2>

          <div className="grid gap-5">

            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                <FaCheckCircle className="text-[#B2D234]" />

                <span className="text-white">
                  {feature}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
</Container>
    </section>
  );
};

export default ProductSpecifications;