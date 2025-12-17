import React from "react";
import { ArrowDown, Hand } from "lucide-react";
import Reveal from "./ui/Reveal";
import { DATA } from "../data/portfolioData";

const HeroAlternate = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center py-25 md:py-20 overflow-hidden relative"
    >
      {/* Changed max-w-[1500px] to max-w-7xl */}
      <div className="w-full max-w-[90%] md:max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-4 relative z-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center md:items-start order-1 md:order-1 md:justify-self-end relative z-20">
          <Reveal delay={100}>
            <div className="flex flex-col items-center md:block md:relative">
              <span className="block text-sm md:text-lg font-bold font-syne text-primary dark:text-secondary mb-2 md:mb-0 tracking-[0.2em] uppercase text-center md:text-left md:absolute md:-top-8 md:left-1 md:w-max">
                {DATA.hero.title}
              </span>
              <h1 className="text-[11vw] md:text-[3vw] font-bold font-syne leading-[0.8] text-page-dark dark:text-page tracking-tighter uppercase text-center md:text-left">
                <span className="md:hidden">SOFTWARE</span>
                <span className="hidden md:inline">SOFTWARE</span>
              </h1>
            </div>
          </Reveal>
        </div>

        {/* CENTER COLUMN: Image */}
        <div className="relative order-2 md:order-2 flex justify-center group my-2 md:my-0">
          <Reveal>
            <div className="relative w-[80vw] h-[50vh] md:w-[25vw] md:h-[65vh] rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
              <img
                src={DATA.contact.about.image}
                alt="Profile"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="absolute bottom-4 left-[-10px] md:bottom-8 md:-left-12 z-20">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-primary dark:bg-secondary rounded-full flex items-center justify-center animate-[levitate_4s_ease-in-out_infinite] shadow-lg shadow-primary/30 dark:shadow-secondary/30">
                <Hand className="w-6 h-6 md:w-10 md:h-10 text-white dark:text-black" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center md:items-end order-3 md:order-3 md:justify-self-start relative z-20">
          <Reveal delay={200}>
            <div className="flex flex-col items-center md:block md:relative">
              <h1 className="text-[11vw] md:text-[3vw] font-bold font-syne leading-[0.8] text-page-dark dark:text-page tracking-tighter mb-6 md:mb-0 uppercase text-center md:text-right">
                <span className="md:hidden">DEVELOPER</span>
                <span className="hidden md:inline">DEVELOPER</span>
              </h1>
              <p className="max-w-xs text-sm md:text-base font-syne text-muted font-medium leading-relaxed text-center md:text-right md:absolute md:-bottom-20 md:right-1 md:w-64">
                Based on Planet Earth.
                <br />
                Creating digital experiences that bridge creativity and
                engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroAlternate;
