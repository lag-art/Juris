import { motion } from "framer-motion";

import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import forum from "../assets/forum.png";

export default function Events() {
  const events = [
    {
      title: "JLA Leadership Forum",
      date: "May 25, 2026",
      status: "Upcoming",
      description:
        "Engaging law students on leadership, governance, and justice.",
      image: forum,
    },
    {
      title: "Student Justice Conference",
      date: "April 10, 2026",
      status: "Upcoming",
      description:
        "A platform to discuss legal reforms and student representation.",
      image: event2,
    },
    {
      title: "Faculty Engagement Meeting",
      date: "February 15, 2026",
      status: "Past",
      description:
        "Connecting leadership with the student body for inclusive growth.",
      image: event3,
    },
    {
      title: "Legal Awareness Campaign",
      date: "January 20, 2026",
      status: "Past",
      description:
        "Empowering students with knowledge on legal rights and responsibilities.",
      image: event1,
    },
  ];

  return (
    <section id="events" className="py-24 px-6 bg-gray-50">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

                {/* STATUS BADGE */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs rounded-full font-semibold ${
                    event.status === "Upcoming"
                      ? "bg-gold text-black"
                      : "bg-gray-900 text-white"
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

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
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
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a
            href="#register"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition"
          >
            Get Involved
          </a>
        </motion.div>

      </div>
    </section>
  );
}