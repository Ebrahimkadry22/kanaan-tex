import { motion } from "framer-motion";
import {
  FaAward,
  FaCheckCircle,
  FaGlobe,
  FaIndustry,
} from "react-icons/fa";

import Container from "../ui/Container";
import storyImage from "../../assets/images/about/pexels-onuryumlu-37892692.jpg";

const CompanyStory = () => {
  return (
    <section className="bg-[#0F1115] py-32 overflow-hidden">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={storyImage}
              alt="Company Story"
              className="h-[650px] w-full rounded-[32px] object-cover"
            />

            <div className="absolute -bottom-8 -right-8 rounded-[24px] bg-[#B2D234] p-8 shadow-2xl">

              <h2 className="text-5xl font-bold text-black">
                30+
              </h2>

              <p className="mt-2 font-semibold text-black">
                Years Experience
              </p>

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
              Our Story
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white">

              Building Quality

              <span className="text-[#B2D234]">
                {" "}Since 1991
              </span>

            </h2>

            <p className="mt-8 leading-8 text-gray-400">

              KANAAN TEX has grown from a local textile manufacturer
              into a trusted international supplier of woven labels,
              printed labels, ribbons and premium garment accessories.

            </p>

            <div className="mt-10 space-y-6">

              {[
                "Premium Quality Materials",
                "Modern Manufacturing Technology",
                "Worldwide Export Standards",
                "Experienced Production Team",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-[#B2D234]" />

                  <span className="text-lg text-white">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-2 gap-6">

              {[
                {
                  icon: FaIndustry,
                  number: "500+",
                  title: "Projects",
                },
                {
                  icon: FaGlobe,
                  number: "15+",
                  title: "Countries",
                },
                {
                  icon: FaAward,
                  number: "30+",
                  title: "Years",
                },
                {
                  icon: FaCheckCircle,
                  number: "99%",
                  title: "Quality",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-[#B2D234]"
                  >

                    <Icon className="text-3xl text-[#B2D234]" />

                    <h3 className="mt-4 text-4xl font-bold text-white">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {item.title}
                    </p>

                  </div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default CompanyStory;