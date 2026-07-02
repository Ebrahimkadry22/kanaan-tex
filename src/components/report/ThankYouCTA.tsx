import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { FaArrowRight } from "react-icons/fa";

const ThankYouCTA = () => {
  return (
    <section className="bg-[#0F1115] pb-32">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-[#1B1F26] to-[#121418] px-10 py-20 text-center"
        >

          {/* Glow */}
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#B2D234]/10 blur-3xl" />
          <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-[#B2D234]/10 blur-3xl" />

          <div className="relative z-10">

            <span className="rounded-full bg-[#B2D234]/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#B2D234]">
              Need Help?
            </span>

            <h2 className="mt-8 text-5xl font-bold text-white">
              Need Immediate Assistance?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              If your issue requires immediate attention, our support team
              is ready to assist you. Contact us directly for faster
              communication.
            </p>

            <div className="mt-10">
              <p className="text-3xl font-bold text-[#B2D234]">
                +20 123 456 7890
              </p>
            </div>

            <Link
              to="/contact"
              className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-[#B2D234] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Contact Us

              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

          </div>

        </motion.div>

      </Container>

    </section>
  );
};

export default ThankYouCTA;