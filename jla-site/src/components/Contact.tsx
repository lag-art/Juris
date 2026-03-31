import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import contactImg from "../assets/juris.png"; // you can change image if needed

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-100 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - CONTACT CARD */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* IMAGE */}
          <img
            src={contactImg}
            alt="JLA Office"
            className="w-full h-64 object-cover"
          />

          {/* CONTENT */}
          <div className="p-6 space-y-4">
            <p className="text-green-600 font-semibold uppercase text-sm">
              Nairobi Office
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Juris Leadership Alliance
            </h2>

            {/* PHONE */}
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-primary" size={20} />
              <span>+254 727 376323</span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-primary" size={20} />
              <span>juriscartels@gmail.com</span>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-primary" size={20} />
              <span>Bogani E Rd, Nairobi</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - MAP */}
        <motion.div
          className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4296.7673035043545!2d36.75426744523793!3d-1.35204578273569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0539d181204b%3A0x6e7169577881d08f!2sCatholic%20University%20of%20Eastern%20Africa!5e1!3m2!1sen!2ske!4v1773803700040!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}