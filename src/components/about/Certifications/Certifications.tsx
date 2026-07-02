import { motion } from "framer-motion";

import CertificationCard from "./CertificationCard";
import { certificates } from "./certificates";
import Container from "../../ui/Container";

const Certifications = () => {
  return (
    <section className="bg-[#11161B] py-32">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
            Certifications
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Quality You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Our commitment to quality and manufacturing excellence is reflected
            through our official certifications.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificationCard
              key={certificate.id}
              {...certificate}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Certifications;