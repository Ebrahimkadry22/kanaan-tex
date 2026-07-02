import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <form className="space-y-6 rounded-[32px] border border-white/10 bg-[#15181E] p-10">

      <h2 className="text-4xl font-bold text-white">
        Send Us a Message
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="text"
          placeholder="Full Name"
          className="rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
        />

        <input
          type="text"
          placeholder="Company Name"
          className="rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
        />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="email"
          placeholder="Email Address"
          className="rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
        />

      </div>

      <select
        className="w-full rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
      >
        <option>Product Type</option>
        <option>Woven Labels</option>
        <option>Printed Labels</option>
        <option>Hang Tags</option>
        <option>Ribbon</option>
        <option>Packaging</option>
        <option>Accessories</option>
      </select>

      <textarea
        rows={6}
        placeholder="Tell us about your project..."
        className="w-full rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: .98 }}
        className="rounded-full bg-[#B2D234] px-10 py-4 font-semibold text-black"
      >
        Send Message
      </motion.button>

    </form>
  );
};

export default ContactForm;