import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-900 to-black text-white px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Juris Leadership Alliance
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Where Law Meets Leadership
          </motion.p>

          <motion.p
            className="mt-6 text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Empowering law students through principled leadership, academic excellence,
            and a strong commitment to justice, integrity, and accountability.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#register"
              className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Join Movement
            </a>

            <a
              href="#about"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* RIGHT CONTENT (LOGO) */}
        <div className="flex justify-center">
          <motion.img
            src={logo}
            alt="JLA Logo"
            className="w-60 md:w-80 drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
}