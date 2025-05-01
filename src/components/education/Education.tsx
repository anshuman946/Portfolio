import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Btech Computer Science and Engineering",
    institution: "Lovely Professional University",
    year: "2022 - 2026",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Advanced Neural Network Architectures for Real-time Decision Making Systems'.",
  },
  {
    degree: "Intermediate",
    institution: "BBL Public School",
    year: "2020 - 2022",
    description:
      "Completed with 76%"
  },
  {
    degree: "High School",
    institution: "BBL Public School",
    year: "2018 - 2020",
    description:
      "Completed with 90.06%",
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
      id="education"
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
          Education
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700"></div>

          {/* Timeline Items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? "md:pr-8 md:text-right md:ml-auto md:mr-1/2" : "md:pl-8 md:ml-1/2"} md:w-1/2`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-blue-500 transform -translate-y-1/2 md:translate-x-1/2"></div>

              {/* Content */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-800"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                <h4 className="text-blue-400 font-medium mb-2">
                  {item.institution}
                </h4>
                <p className="text-gray-400 mb-3">{item.year}</p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
