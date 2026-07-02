import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090B0F]"
        >
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[#B2D234]/10 blur-[120px]" />

          <div className="relative flex flex-col items-center">

            {/* Logo */}

            <motion.img
              src={logo}
              alt="logo"
              className="w-52"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Ring */}

            <motion.div
              className="mt-10 h-16 w-16 rounded-full border-4 border-transparent border-t-[#B2D234]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Text */}

            <motion.h2
              className="mt-8 text-xl tracking-[8px] text-white"
              animate={{
                opacity: [.3, 1, .3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              LOADING
            </motion.h2>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;