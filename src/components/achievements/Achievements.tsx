import { motion } from "framer-motion";

interface Achievement {
  title: string;
  description: string;
  year: string;
}

const achievements: Achievement[] = [
  {
    title: "Runner-Up Smart India Hackathon",
    year: "2024",
    description:
      " Achieved runner-up position among 500+ teams in Smart India Hackathon.",
  },
  {
    title: "Winner - Web-A-Thon",
    year: "2023",
    description:
      "Won the Web-A-Thon Hackathon, competing against 40+ teams with a web-based solution.",
  },
  {
    title: "Second place in Inter University Coding competition",
    year: "2023",
    description:
      " Secured second place in a university-level coding competition for demonstrating advanced algorithm skills.",
  },
  
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="achievements"
      className="py-20 bg-black text-white min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headingVariants}
        >
          Achievements
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Achievements Column */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-8 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={headingVariants}
            >
              Achievements
            </motion.h3>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 mb-2">{achievement.year}</p>
                  <p className="text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
