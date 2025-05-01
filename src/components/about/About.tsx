import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "../ui/button";

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-black flex items-center justify-center py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300"
          >
            <p className="text-lg mb-6">
              Hi there! I'm Anshuman, a passionate developer and engineer with a
              love for creating elegant solutions to complex problems. With
              expertise in multiple programming languages and frameworks, I
              strive to build applications that are not only functional but also
              provide exceptional user experiences.
            </p>
            <p className="text-lg mb-8">
              My journey in technology has led me through various domains, from
              web development to machine learning, always with a focus on
              innovation and excellence. I'm constantly learning and exploring
              new technologies to stay at the cutting edge of the industry.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </Button>

              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </Button>

              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>

              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="h-4 w-4" /> Email
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                <AnimatedIllustration />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4">
        <Button
          onClick={() => scrollToSection("hero")}
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => scrollToSection("skills")}
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}

function AnimatedIllustration() {
  return (
    <motion.div
      className="w-full h-64 flex items-center justify-center"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="url(#paint0_linear)"
          strokeWidth="4"
          strokeDasharray="502"
          strokeDashoffset="502"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M70 80L100 110L130 80"
          stroke="url(#paint1_linear)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M70 110L100 140L130 110"
          stroke="url(#paint1_linear)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="20"
            y1="20"
            x2="180"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="70"
            y1="80"
            x2="130"
            y2="140"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
