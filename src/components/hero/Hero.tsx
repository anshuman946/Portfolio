import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Animated background with particles */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #111111 0%, #000000 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <ParticleBackground />
        <WavyBackground />
      </div>

      {/* Content */}
      <div className="z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 text-left md:pr-8 mb-10 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block mb-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium"
          >
            Full Stack Developer
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">Hello, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Anshuman Dixit
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build exceptional digital experiences that combine cutting-edge
            technology with stunning design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-6 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2"
            >
              View My Work <ExternalLink className="h-4 w-4" />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2"
            >
              Contact Me <Mail className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300 border border-white/5"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anshuman946/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300 border border-white/5"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:anshudixit2004@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-500/20 transition-colors duration-300 border border-white/5"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Profile image with effects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Animated rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-indigo-500/20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border-2 border-purple-500/20"
              animate={{ scale: [1.05, 1, 1.05], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20" />

            {/* Profile image */}
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 relative z-10"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src="/imggggg.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-5 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-xs font-medium text-gray-400">
                Experience
              </div>
              <div className="text-lg font-bold">8+ Years</div>
            </motion.div>

            <motion.div
              className="absolute -left-6 bottom-10 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-xs font-medium text-gray-400">Projects</div>
              <div className="text-lg font-bold">50+ Completed</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Button
          onClick={() => scrollToSection("about")}
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-transparent rounded-full"
          animate={{ height: [8, 24, 8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

function ParticleBackground() {
  // Generate random particles
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function WavyBackground() {
  return (
    <motion.div
      className="absolute inset-0 z-0 opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient1)"
          animate={{
            d: [
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,122.7C672,149,768,235,864,266.7C960,299,1056,277,1152,261.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient2)"
          animate={{
            d: [
              "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,122.7C672,149,768,235,864,266.7C960,299,1056,277,1152,261.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,112C672,117,768,203,864,208C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
