import React from "react";
import { ArrowDown } from "lucide-react";
import Reveal from "./ui/Reveal";
import { DATA } from "../data/portfolioData";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-[90vh] w-full flex flex-col justify-center items-center py-20 overflow-hidden text-center relative"
    >
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <h1 className="text-[9vw] font-bold font-syne tracking-tight mb-4 leading-[0.8] text-page-dark dark:text-page whitespace-nowrap">
          {DATA.hero.title}
        </h1>

        <Reveal delay={100}>
          <div className="flex flex-col items-center gap-6 mt-8 max-w-2xl mx-auto px-4">
            <p className="text-xs md:text-3xl font-syne text-muted tracking-widest">
              {DATA.hero.subtitle}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <Reveal delay={200}>
          <button
            onClick={scrollToProjects}
            // Added 'hover:-translate-y-2' to move the button up
            className="group p-3 rounded-full bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
            aria-label="Scroll to projects"
          >
            <ArrowDown size={24} className="text-primary dark:text-secondary" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
