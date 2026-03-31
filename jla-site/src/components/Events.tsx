import { motion } from "framer-motion";
import eventImg from "../assets/event1.jpg";

export default function Events() {
  const events = [
    {
      title: "JLA Leadership Forum",
      date: "March 25, 2026",
      status: "Upcoming",
      description: "Engaging law students on leadership, governance, and justice.",
    },
    {
      title: "Student Justice Conference",
      date: "April 10, 2026",
      status: "Upcoming",
      description: "A platform to discuss legal reforms and student representation.",
    },
    {
      title: "Faculty Engagement Meeting",
      date: "February 15, 2026",
      status: "Past",
      description: "Connecting leadership with the student body for inclusive growth.",
    },
  ];

  return (
    <section id="events" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">
            Events & Activities
          </h2>
          <p className="text-gray-600 mt-4">
            Stay updated with our latest engagements and initiatives
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded"></div>
        </motion.div>

        {/* EVENTS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={eventImg}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />

                {/* STATUS BADGE */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs rounded-full font-semibold ${
                    event.status === "Upcoming"
                      ? "bg-gold text-black"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {event.status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {event.date}
                </p>

                <p className="text-gray-600 mt-3 text-sm">
                  {event.description}
                </p>

                {/* CTA */}
                <a
                  href="#register"
                  className="inline-block mt-4 text-gold font-semibold hover:underline"
                >
                  Participate →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAIN CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a
            href="#register"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition"
          >
            Get Involved in Upcoming Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}