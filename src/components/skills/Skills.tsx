import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

type Skill = {
  name: string;
  category: "languages" | "frameworks" | "soft";
};

const skills: Skill[] = [
  // Languages
  { name: "C++", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "C", category: "languages" },

  // Frameworks/Tools
  { name: "React.js", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Git", category: "frameworks" },
  { name: "Docker", category: "frameworks" },
  { name: "Figma", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },

  // Soft Skills
  { name: "Teamwork", category: "soft" },
  { name: "Leadership", category: "soft" },
  { name: "Critical Thinking", category: "soft" },
  { name: "Problem Solving", category: "soft" },
  { name: "Communication", category: "soft" },
  { name: "Time Management", category: "soft" },
];

export default function Skills() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const languageSkills = skills.filter(
    (skill) => skill.category === "languages",
  );
  const frameworkSkills = skills.filter(
    (skill) => skill.category === "frameworks",
  );
  const softSkills = skills.filter((skill) => skill.category === "soft");

  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory
            title="Coding Languages"
            skills={languageSkills}
            delay={0.2}
          />
          <SkillCategory
            title="Frameworks & Tools"
            skills={frameworkSkills}
            delay={0.4}
          />
          <SkillCategory title="Soft Skills" skills={softSkills} delay={0.6} />
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4">
        <Button
          onClick={() => scrollToSection("about")}
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => scrollToSection("projects")}
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

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay: number;
}

function SkillCategory({ title, skills, delay }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-indigo-300">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

interface SkillItemProps {
  name: string;
  index: number;
}

function SkillItem({ name, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-black/50 border border-indigo-500/30 rounded-lg text-gray-300 hover:text-white hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
    >
      {name}
    </motion.div>
  );
}
