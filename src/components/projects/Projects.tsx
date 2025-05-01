import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered Portfolio Generator",
    description:
      "A web application that uses AI to generate personalized portfolio websites based on user input and preferences.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "Next.js", "AI", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Smart Home Dashboard",
    description:
      "A comprehensive dashboard for controlling and monitoring smart home devices with real-time updates and analytics.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    tags: ["IoT", "React", "Node.js", "WebSockets"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology to ensure integrity and prevent fraud.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    tags: ["Blockchain", "Solidity", "Ethereum", "Web3.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Augmented Reality Shopping App",
    description:
      "An AR application that allows users to visualize products in their own space before making a purchase.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    tags: ["AR", "React Native", "Three.js", "Mobile"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Machine Learning Stock Predictor",
    description:
      "A machine learning model that predicts stock market trends based on historical data and current market conditions.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tags: ["Python", "TensorFlow", "Data Science", "ML"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-16">
          {projects.slice(3, 5).map((project, index) => (
            <ProjectCard key={index + 3} project={project} index={index + 3} />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4">
        <Button
          onClick={() => scrollToSection("skills")}
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
        <Button
          onClick={() => scrollToSection("achievements")}
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

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/5 text-white h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-white">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>

        <CardContent className="py-2">
          <CardDescription className="text-gray-300">
            {project.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="pt-2 mt-auto">
          <div className="flex gap-3">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Github className="h-4 w-4" /> Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                size="sm"
                className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" /> View Project
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
