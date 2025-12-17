import React, { useEffect, useRef } from "react";
import { Code2, Terminal } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DATA } from "../data/portfolioData";

// 1. Import specific icons from react-icons/si
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
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// 2. Map your data strings to Icons and Brand Colors
const SKILL_ICONS = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Python: { icon: SiPython, color: "#3776AB" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Node: { icon: SiNodedotjs, color: "#339933" },
  Django: { icon: SiDjango, color: "#092E20" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Flask: { icon: SiFlask, color: "#000000" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
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

const SkillPill = ({ skill, className }) => {
  const skillData = SKILL_ICONS[skill];
  const Icon = skillData?.icon;

  const isDarkBrand = ["#000000", "#181717", "#092E20"].includes(
    skillData?.color
  );

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm border border-zinc-200 dark:border-zinc-800 rounded-full hover:border-primary dark:hover:border-secondary transition-colors cursor-default font-sans bg-zinc-50 dark:bg-zinc-900/50 ${className}`}
    >
      {Icon && (
        <Icon
          style={{ color: isDarkBrand ? undefined : skillData.color }}
          className={`text-lg ${
            isDarkBrand ? "text-black dark:text-white" : ""
          }`}
        />
      )}
      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
        {skill}
      </span>
    </span>
  );
};

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Use matchMedia to handle Mobile vs Desktop logic
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (min-width: 768px) ---
      // Original "Popcorn" Pinned Animation
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=1000",
            scrub: 1,
          },
        });

        tl.from(".skills-header", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 1,
        });

        tl.from(
          ".skill-pill-lang",
          {
            y: 300,
            opacity: 0,
            scale: 0.5,
            stagger: { amount: 1, from: "random" },
            ease: "back.out(1.5)",
          },
          "<+=0.2"
        );

        tl.from(
          ".skill-pill-tool",
          {
            y: -300,
            opacity: 0,
            scale: 0.5,
            stagger: { amount: 1, from: "random" },
            ease: "back.out(1.5)",
          },
          "<"
        );
      });

      // --- MOBILE ANIMATION (max-width: 767px) ---
      // Simple Waterfall Fade Up (No Pinning)
      mm.add("(max-width: 767px)", () => {
        // Headers fade in first
        gsap.from(".skills-header", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
        });

        // Languages cascade up
        gsap.from(".skill-pill-lang", {
          scrollTrigger: {
            trigger: ".lang-container",
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.05, // Fast ripple effect
          duration: 0.6,
          ease: "power2.out",
        });

        // Tools cascade up
        gsap.from(".skill-pill-tool", {
          scrollTrigger: {
            trigger: ".tool-container",
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      // Changed h-screen to min-h-screen to accommodate content stacking on mobile
      // Added py-24 to ensure top/bottom spacing on mobile natural scroll
      className="min-h-screen w-full flex flex-col justify-center overflow-hidden dark:border-zinc-800 py-24 md:py-0"
    >
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16">
        {/* LEFT COLUMN: Languages */}
        <div className="lang-container">
          <div className="skills-header mb-8 md:mb-12 flex items-center gap-3 text-primary dark:text-secondary">
            <Code2 size={24} />
            <h3 className="text-3xl md:text-4xl font-bold font-syne text-page-dark dark:text-page">
              Languages & Frameworks
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.languages.map((skill, i) => (
              <SkillPill key={i} skill={skill} className="skill-pill-lang" />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Tools */}
        <div className="tool-container">
          <div className="skills-header mb-8 md:mb-12 flex items-center gap-3 text-primary dark:text-secondary">
            <Terminal size={24} />
            <h3 className="text-3xl md:text-4xl font-bold font-syne text-page-dark dark:text-page">
              Tools & Technologies
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.tools.map((skill, i) => (
              <SkillPill key={i} skill={skill} className="skill-pill-tool" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
