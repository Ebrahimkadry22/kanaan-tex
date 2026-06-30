import { FaAward, FaGlobe, FaLeaf, FaIndustry } from "react-icons/fa";
import Container from "../ui/Container";
import factoryImage from "../../assets/images/unnamed.png";

const About = () => {
  return (
    <section className="bg-[#0F1115] py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <img
              src={factoryImage}
              alt="KANAAN TEX Factory"
              className="h-[650px] w-full rounded-[30px] object-cover bg-cover"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 rounded-3xl border border-[#B2D234]/20 bg-white/10 p-8 backdrop-blur-xl">

              <h2 className="text-6xl font-black text-[#B2D234]">
                30+
              </h2>

              <p className="mt-2 text-lg text-white">
                Years of Experience
              </p>

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B2D234]">
              About KANAAN TEX
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">
              Crafting Premium Textile Accessories Since 1991
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              KANAAN TEX is a trusted manufacturer of woven labels,
              printed labels, ribbons, hang tags, and textile
              accessories. Our mission is to help fashion brands
              create products that combine premium quality with
              outstanding craftsmanship.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              <div className="flex items-start gap-4">
                <FaAward className="mt-1 text-3xl text-[#B2D234]" />
                <div>
                  <h3 className="font-bold text-white">
                    Premium Quality
                  </h3>
                  <p className="mt-2 text-gray-400">
                    High-end manufacturing standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaIndustry className="mt-1 text-3xl text-[#B2D234]" />
                <div>
                  <h3 className="font-bold text-white">
                    Modern Factory
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Advanced production technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaGlobe className="mt-1 text-3xl text-[#B2D234]" />
                <div>
                  <h3 className="font-bold text-white">
                    Global Export
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Delivering products worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaLeaf className="mt-1 text-3xl text-[#B2D234]" />
                <div>
                  <h3 className="font-bold text-white">
                    Eco Friendly
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Sustainable materials and processes.
                  </p>
                </div>
              </div>

            </div>

            <button className="mt-14 rounded-full bg-[#B2D234] px-10 py-4 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(178,210,52,.35)]">
              Learn More →
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;