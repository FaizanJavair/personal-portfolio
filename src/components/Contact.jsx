import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import { DATA } from "../data/portfolioData";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const catImageStr =
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=870&auto=format&fit=crop";

  // 1. CAT EMOJI CURSOR
  // We embed the emoji inside an SVG <text> tag so we can use it as a cursor.
  // '20 20' sets the "hotspot" (click point) to the center of the 40x40 emoji.
  const catCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='32'>🐱</text></svg>") 20 20, auto`;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-start h-full">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-syne mb-12 text-page-dark dark:text-page">
                Info
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-bold font-syne text-muted mb-2">
                    Background
                  </h3>
                  <p className="text-lg font-sans font-light text-page-dark dark:text-page leading-relaxed">
                    {DATA.contact.about.background}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-syne text-muted mb-2">
                    Approach
                  </h3>
                  <p className="text-lg font-sans font-light text-page-dark dark:text-page leading-relaxed">
                    {DATA.contact.about.approach}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 mt-16">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="group flex items-center gap-3 text-xl font-bold font-syne text-page-dark dark:text-page hover:text-primary dark:hover:text-secondary transition-colors"
              >
                Get In Touch
                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={DATA.contact.resume}
                className="group flex items-center gap-3 text-xl font-bold font-syne text-page-dark dark:text-page hover:text-primary dark:hover:text-secondary transition-colors"
              >
                View Resume
                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Image Wrapper */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <Reveal delay={200}>
            <div
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-white/5 shadow-2xl isolate"
              // 2. Apply the emoji cursor here
              style={{ cursor: catCursor }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* --- Background: THE CAT --- */}
              <img
                src={catImageStr}
                alt="A surprise cat!"
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />

              {/* --- Foreground: YOUR IMAGE --- */}
              <img
                src={DATA.contact.about.image}
                alt="Faizan Javair"
                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* --- CAT CAPTION --- */}
              <div
                className={`absolute bottom-6 left-0 right-0 flex justify-center transition-all duration-500 delay-100 ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white text-sm font-medium shadow-lg">
                  Don't worry, it's just my cat lurking again 🐱
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-20"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
