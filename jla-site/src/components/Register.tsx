import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(stepValue * currentStep), target));
      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
}

export default function Register() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");

  const phoneNumber = "254727376323";

  const regPattern = /^[A-Za-z0-9\/-]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (!regPattern.test(regNo)) {
      setError("Enter a valid registration number");
      return;
    }

    setError("");

    const message = `I am ${name}, Registration Number: ${regNo}, ready to join Juris Leadership Alliance`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="register" className="py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Join the Movement
          </h2>
          <p className="mt-4 text-gray-200">
            Become part of a community shaping the future of law and leadership
          </p>
        </motion.div>

        {/* FORM + IMAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white text-black rounded-2xl shadow-xl p-8 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Registration Number
              </label>
              <input
                type="text"
                placeholder="e.g. LLB/1234/2023"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Register Now
            </button>
          </motion.form>

          {/* IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src={logo}
              alt="JLA Logo"
              className="w-60 md:w-80 drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} // 🔥 important (runs once)
        >
          {[
            { label: "Members", value: 600 },
            { label: "Events", value: 25 },
            { label: "Leaders", value: 12 },
            { label: "Impact Areas", value: 8 },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-xl py-6 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                <Counter target={stat.value} />
              </h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}