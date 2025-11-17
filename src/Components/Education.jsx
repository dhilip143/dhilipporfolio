import { motion } from "framer-motion";

const educationData = [
  {
    left: {
      title: "Sri Sankara Matriculation Higher Secondary School",
      sub: "Higher Education",
    },
    right: { year: "2018 - 2020" },
    reverse: false, // Row 1 = normal
  },
  {
    left: {
      title: "Bharath Institute of Science and Technology",
      sub: "Bachelor of Technology • Mechatronics",
    },
    right: { year: "2020 - 2024" },
    reverse: true, // Row 2 = reversed
  },
];

export default function Education() {
  return (
    <section className="w-full min-h-screen py-20 bg-black text-white">
      <h1 className="text-center text-5xl font-bold mb-20">Education</h1>

      <div className="flex flex-col gap-32 px-10">
        {educationData.map((row, index) => {
          const leftContent = (
            <div className="text-center">
              <h2 className="text-blue-500 text-2xl font-semibold">
                {row.left.title}
              </h2>
              <p className="text-gray-400">{row.left.sub}</p>
            </div>
          );

          const rightContent = (
            <div className="text-center">
              <h1 className="text-gray-600 text-[120px] font-bold leading-none">
                {row.right.year}
              </h1>
            </div>
          );

          return (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* SWITCH LEFT & RIGHT BASED ON reverse VALUE */}
              {row.reverse ? rightContent : leftContent}
              {row.reverse ? leftContent : rightContent}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
