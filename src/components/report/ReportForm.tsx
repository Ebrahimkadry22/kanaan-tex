import { motion } from "framer-motion";

const ReportForm = () => {
  return (
    <section className="bg-[#0F1115] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-[32px] border border-white/10 bg-[#15181E] p-10">

          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-white">
              Submit Your Report
            </h2>

            <p className="mt-4 text-gray-400">
              Please provide as much detail as possible so we can assist you effectively.
            </p>
          </div>

          <form className="space-y-6">

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
              />

              <input
                type="text"
                placeholder="Company Name (Optional)"
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

            <select className="w-full rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]">
              <option>Product Issue</option>
              <option>Delivery Issue</option>
              <option>Complaint</option>
              <option>Suggestion</option>
            </select>

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
            />

            <textarea
              rows={6}
              placeholder="Describe your issue..."
              className="w-full rounded-2xl border border-white/10 bg-[#1B1F26] p-4 text-white outline-none focus:border-[#B2D234]"
            />

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="block w-full rounded-2xl border border-dashed border-white/20 bg-[#1B1F26] p-4 text-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-[#B2D234] file:px-5 file:py-2 file:font-semibold file:text-black hover:file:opacity-90"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-[#B2D234] px-10 py-4 font-semibold text-black"
            >
              Submit Report
            </motion.button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ReportForm;