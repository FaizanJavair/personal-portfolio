import React, { useEffect } from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ALL_PROJECTS as DATA } from "../data/portfolioData";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiDocker,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiNginx,
  SiGunicorn,
  SiVagrant,
  SiFigma,
  SiGithubactions,
  SiBootstrap,
  SiTailwindcss,
  SiFirebase,
  SiRedis,
  SiThreedotjs,
  SiFramer,
  SiJson,
} from "react-icons/si";

// 1. SKILL ICON MAPPING
const SKILL_ICONS = {
  // Core
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Javascript: { icon: SiJavascript, color: "#F7DF1E" },
  Python: { icon: SiPython, color: "#3776AB" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JSON: { icon: SiJson, color: "#000000" },

  // Frameworks & Libs
  React: { icon: SiReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  ThreeJS: { icon: SiThreedotjs, color: "#000000" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  "Django Rest-Framework": { icon: SiDjango, color: "#092E20" },

  // Backend & DB
  Node: { icon: SiNodedotjs, color: "#339933" },
  Django: { icon: SiDjango, color: "#092E20" },
  Flask: { icon: SiFlask, color: "#000000" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Redis: { icon: SiRedis, color: "#DC382D" },

  // DevOps & Tools
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
  GitLab: { icon: SiGitlab, color: "#FC6D26" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Nginx: { icon: SiNginx, color: "#009639" },
  Gunicorn: { icon: SiGunicorn, color: "#499D4B" },
  Vagrant: { icon: SiVagrant, color: "#1563FF" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
};

// 2. PROJECT SKILL PILL COMPONENT
const ProjectSkillPill = ({ skill }) => {
  const skillData = SKILL_ICONS[skill];
  const Icon = skillData?.icon;
  const isDarkBrand = ["#000000", "#181717", "#092E20"].includes(
    skillData?.color
  );

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
      bg-zinc-100/50 dark:bg-zinc-800/50 
      backdrop-blur-md 
      border border-primary/30 dark:border-white/30
      ring-1 ring-primary/20 dark:ring-secondary/20
      shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.2)] dark:shadow-[0_0_10px_rgba(var(--color-secondary-rgb),0.2)]
      transition-all duration-300 
      hover:bg-primary/10 dark:hover:bg-secondary/10
      hover:border-primary/50 dark:hover:border-secondary/50
      hover:ring-primary/40 dark:hover:ring-secondary/40
      hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)] dark:hover:shadow-[0_0_15px_rgba(var(--color-secondary-rgb),0.4)]
      group/pill cursor-default"
    >
      {Icon && (
        <Icon
          style={{ color: isDarkBrand ? undefined : skillData.color }}
          className={`text-sm ${
            isDarkBrand ? "text-black dark:text-white" : ""
          }`}
        />
      )}
      <span className="text-xs font-medium font-sans text-page-dark/70 dark:text-page/70 group-hover/pill:text-page-dark dark:group-hover/pill:text-page transition-colors">
        {skill}
      </span>
    </div>
  );
};

// 3. PROJECT CARD COMPONENT
const ProjectCard = ({ project, index }) => {
  return (
    <div className="group flex flex-col gap-5 w-full">
      {/* Image Container */}
      <div className="aspect-video w-full overflow-hidden relative bg-zinc-900 rounded-2xl border border-white/5 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
        <div className="absolute inset-0 p-3 md:p-4">
          <img
            src={
              project.image ||
              `https://loremflickr.com/1200/800/tech?lock=${index}`
            }
            alt={project.name}
            className="w-full h-full object-cover rounded-lg border border-white/5"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 px-1">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold font-syne text-page-dark dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
            {project.name}
          </h3>

          <div className="flex gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-secondary transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-secondary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-base font-sans text-muted line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3 mt-1">
          {project.stack.map((tech) => (
            <ProjectSkillPill key={tech} skill={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AllProjects = () => {
  // Ensure page starts at top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted hover:text-page-dark dark:hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold font-syne text-page-dark dark:text-page mb-4">
          All Projects
        </h1>
        <p className="text-muted text-lg max-w-2xl font-sans">
          A comprehensive list of my experiments, production apps, and
          open-source contributions.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {DATA.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
