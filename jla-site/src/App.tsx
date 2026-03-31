import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Team from "./components/Team";
import Events from "./components/Events";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import WhatsApp from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="text-gray-800">
      <Navbar />
      <Home />
      <About />
      <Team />
      <Events />
      <Register />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  );
}
