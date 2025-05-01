import { useEffect } from "react";
import Layout from "./layout/Layout";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Achievements from "./achievements/Achievements";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import { motion } from "framer-motion";

function Home() {
  // Enable smooth scrolling
  useEffect(() => {
    // No need to disable overflow
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white min-h-screen"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </motion.div>
    </Layout>
  );
}

export default Home;
