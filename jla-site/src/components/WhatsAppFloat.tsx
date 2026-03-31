import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://chat.whatsapp.com/Dqxjj7GpVL7HSCLZM8tIfP?mode=gi_t"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      title="Join our WhatsApp Community"
    >
      <div
        className="bg-green-500 text-white p-4 rounded-full shadow-lg 
                      hover:bg-green-600 transition duration-300 
                      transform hover:scale-110 animate-bounce">
      
        <FaWhatsapp size={24} />
      </div>
    </a>
  );
};

export default WhatsAppFloat;