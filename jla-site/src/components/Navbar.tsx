import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["home", "about", "team", "events", "register", "contact"];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary tracking-wide">
          JLA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-gray-700 hover:text-gold transition duration-300 capitalize font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-gold text-lg capitalize"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}