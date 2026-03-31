import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import logo from "../assets/logo.jpeg";
import constitution from "../assets/constitution.pdf";

const Footer = () => {
  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* LEFT - LOGO */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="Juris Leadership Alliance"
            className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-[#D4AF37]"
          />
          <h2 className="mt-3 text-lg font-semibold tracking-wide">
            Juris Leadership Alliance
          </h2>
          <p className="text-sm text-gray-300 italic mt-1">
            Where Law Meets Leadership
          </p>
        </div>

        {/* CENTER - SOCIALS */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Stay Connected
          </h3>

          <div className="flex gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/juris_cartels?igsh=bW02amxwNW5va3p1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="Follow us on Instagram"
            >
              <div className="bg-white text-[#0B3C5D] p-3 rounded-full shadow-md 
                              group-hover:bg-[#D4AF37] group-hover:text-[#0B3C5D] 
                              transition duration-300 transform group-hover:scale-110">
                <FaInstagram size={18} />
              </div>
            </a>

            {/* X */}
            <a
              href="https://x.com/juris_cartels"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="Follow us on X"
            >
              <div className="bg-white text-[#0B3C5D] p-3 rounded-full shadow-md 
                              group-hover:bg-[#D4AF37] group-hover:text-[#0B3C5D] 
                              transition duration-300 transform group-hover:scale-110">
                <FaXTwitter size={18} />
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@juris.cartels6?_r=1&_t=ZS-94wuHDwylWb"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="Follow us on TikTok"
            >
              <div className="bg-white text-[#0B3C5D] p-3 rounded-full shadow-md 
                              group-hover:bg-[#D4AF37] group-hover:text-[#0B3C5D] 
                              transition duration-300 transform group-hover:scale-110">
                <FaTiktok size={18} />
              </div>
            </a>
          </div>

          {/* Optional micro-copy */}
          <p className="text-xs text-gray-400 mt-4">
            Follow our movement online
          </p>
        </div>

        {/* RIGHT - VISION + DOWNLOAD */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
            Our Vision
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed max-w-xs mb-5">
            Empowering leadership through law, integrity, and service to the people.
          </p>

          {/* Download Constitution */}
          <a
            href={constitution}
            download="JLA-Constitution.pdf"
            className="bg-[#D4AF37] text-[#0B3C5D] px-5 py-2 rounded-full text-sm font-semibold 
                       shadow-md hover:bg-white hover:text-[#0B3C5D] 
                       transition duration-300 transform hover:scale-105"
          >
            Download Constitution
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#D4AF37]/40 py-5 text-center text-sm text-gray-300 px-4">
        © {new Date().getFullYear()} Juris Leadership Alliance. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;