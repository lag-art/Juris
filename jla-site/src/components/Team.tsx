import { motion } from "framer-motion";
import { useState } from "react";

import teamImg from "../assets/team1.jpg";

import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";
import img5 from "../assets/image5.jpeg";
import img6 from "../assets/image6.jpeg";
import img7 from "../assets/image7.jpeg";

export default function Team() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="team" className="py-24 px-6 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={teamImg}
              alt="JLA Team"
              className="rounded-2xl shadow-xl w-full h-[350px] md:h-[450px] object-cover"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-700"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Our Movement
            </h2>

            <p className="leading-relaxed text-lg">
              Juris Leadership Alliance (JLA) is a dynamic movement where law meets leadership,
              dedicated to shaping a new generation of principled legal minds. Rooted in a strong
              commitment to justice, integrity, accountability, and transformative leadership, JLA
              empowers law students to excel academically while actively engaging in meaningful
              change within the faculty and society at large.
              <br /><br />
              Guided by a clear mission to represent and uplift every law student, and a vision of
              a united, progressive faculty led by ethical and service-driven leaders, JLA stands
              as a beacon of excellence inviting students to join a purpose-driven community that
              not only studies the law, but lives its highest ideals.
            </p>
          </motion.div>
        </div>

        {/* GALLERY SECTION */}
        <div className="relative overflow-hidden">
          
          {/* FADE EDGES */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <motion.div
            className="flex gap-6 w-max"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            animate={
              isPaused
                ? {}
                : { x: ["0%", "-50%"] }
            }
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-[300px] h-[200px] md:h-[250px] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition duration-100"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}