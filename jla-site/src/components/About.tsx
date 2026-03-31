import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">
            About Juris Leadership Alliance
          </h2>

          <p className="mt-4 text-lg text-gray-600 italic">
            “Where Law Meets Leadership”
          </p>

          <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded"></div>
        </motion.div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* MISSION CARD */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border-t-4 border-gold"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To represent and empower law students through principled leadership,
              promote academic excellence, and uphold justice, integrity, and
              accountability within the faculty and beyond.
            </p>
          </motion.div>

          {/* VISION CARD */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border-t-4 border-primary"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To build a united and progressive faculty of law led by principled
              student leaders committed to justice, excellence, and service to society.
            </p>
          </motion.div>
        </div>

        {/* VALUES / HIGHLIGHT SECTION */}
        <motion.div
          className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            "Justice",
            "Integrity",
            "Accountability",
            "Leadership",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-primary text-white py-6 rounded-xl shadow-md hover:scale-105 transition"
            >
              <p className="font-semibold text-lg">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}