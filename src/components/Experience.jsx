import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";
import { DATA } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);
  const mobileLineRef = useRef(null);

  const [resizeListener, setResizeListener] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Handle Resize & check screen size
  useEffect(() => {
    const handleResize = () => {
      setResizeListener((prev) => prev + 1);
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP & Line Calculation Logic
  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const dots = dotsRef.current;
    const mobileLine = mobileLineRef.current;

    if (!container || dots.length === 0) return;

    // --- MOBILE LINE CALCULATION ---
    // We calculate position using getBoundingClientRect to ignore intermediate relative parents
    if (!isDesktop && mobileLine) {
      const firstDot = dots[0];
      const lastDot = dots[dots.length - 1];

      if (firstDot && lastDot) {
        const containerRect = container.getBoundingClientRect();
        const firstDotRect = firstDot.getBoundingClientRect();
        const lastDotRect = lastDot.getBoundingClientRect();

        // Calculate Start Top relative to container
        const startTop =
          firstDotRect.top - containerRect.top + firstDotRect.height / 2;
        // Calculate End Top relative to container
        const endTop =
          lastDotRect.top - containerRect.top + lastDotRect.height / 2;

        const height = endTop - startTop;

        mobileLine.style.top = `${startTop}px`;
        mobileLine.style.height = `${height}px`;
        mobileLine.style.display = "block"; // Ensure visibility
      }
    } else if (mobileLine) {
      // Hide mobile line on desktop to be safe
      mobileLine.style.display = "none";
    }

    let ctx = gsap.context(() => {
      // --- MOBILE ANIMATION (Simple Fade Up) ---
      if (!isDesktop) {
        itemsRef.current.forEach((item) => {
          if (item) {
            gsap.fromTo(
              item,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                },
              }
            );
          }
        });
        return; // Stop here, don't run SVG logic
      }

      // --- DESKTOP ANIMATION (Curved SVG) ---
      if (!path) return;

      const containerRect = container.getBoundingClientRect();
      let d = "";
      let prevX = 0;
      let prevY = 0;

      dots.forEach((dot, i) => {
        if (!dot) return;

        const dotRect = dot.getBoundingClientRect();
        const currentX = dotRect.left - containerRect.left + dotRect.width / 2;
        const currentY = dotRect.top - containerRect.top + dotRect.height / 2;

        if (i === 0) {
          d = `M ${currentX} ${currentY}`;
        } else {
          const distanceY = currentY - prevY;
          const cp1Y = prevY + distanceY * 0.5;
          const cp2Y = currentY - distanceY * 0.5;
          d += ` C ${prevX} ${cp1Y}, ${currentX} ${cp2Y}, ${currentX} ${currentY}`;
        }

        prevX = currentX;
        prevY = currentY;
      });

      path.setAttribute("d", d);

      // Animate Items (Desktop)
      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Draw Line (Desktop)
      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [resizeListener, isDesktop]);

  return (
    <section id="career" className="py-24 px-6 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 md:mb-24 pl-0 md:pl-0">
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-page-dark dark:text-page mb-6">
            Career Journey
          </h2>
          <p className="text-muted text-lg max-w-xl font-sans text-left">
            My professional path, from internships to leading development teams.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* --- MOBILE: STRAIGHT LINE --- */}
          <div
            ref={mobileLineRef}
            className="absolute left-[7px] w-0.5 bg-zinc-200 dark:bg-zinc-800 md:hidden z-0"
            // Default styles to prevent flicker, though JS overrides top/height
            style={{ display: isDesktop ? "none" : "block" }}
          ></div>

          {/* --- DESKTOP: SVG SNAKE LINE --- */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible">
              <path
                ref={pathRef}
                d=""
                fill="none"
                className="stroke-zinc-300 dark:stroke-zinc-700 transition-colors duration-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative z-10">
            {DATA.experience.map((job, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`relative mb-12 md:mb-32 flex flex-col md:flex-row items-start w-full gap-0 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* --- 1. DESKTOP DATE COLUMN (Hidden on Mobile) --- */}
                <div
                  className={`hidden md:block w-1/2 px-12 pt-8 mt-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <span className="font-mono text-sm tracking-widest text-primary dark:text-secondary opacity-80 uppercase">
                    {job.period}
                  </span>
                </div>

                {/* --- 2. THE DOT --- */}
                <div
                  ref={(el) => (dotsRef.current[index] = el)}
                  className={`
                    absolute z-20 w-4 h-4 rounded-full bg-page dark:bg-page-dark border-2 border-zinc-400 dark:border-zinc-500 shadow-sm
                    /* Mobile Positioning: Left Aligned */
                    left-0 top-0
                    /* Desktop Positioning: Centered & Offset */
                    md:top-9 md:left-1/2
                  `}
                  style={{
                    // Apply offset only on desktop
                    marginLeft: isDesktop
                      ? index % 2 === 0
                        ? "-38px"
                        : "22px"
                      : "0px",
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-primary dark:bg-secondary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* --- 3. CONTENT CARD --- */}
                <div className="w-full md:w-1/2 pl-10 md:pl-12 md:px-12">
                  {/* Mobile Date (Visible only on Mobile) */}
                  <span className="md:hidden block mb-2 text-xs font-mono font-bold text-primary dark:text-secondary uppercase tracking-widest pl-1">
                    {job.period}
                  </span>

                  <div className="text-left p-6 md:p-8 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold font-syne text-page-dark dark:text-page mb-2">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-6 text-muted justify-start">
                      <Briefcase size={16} />
                      <h4 className="text-base md:text-lg font-medium font-sans">
                        {job.company}
                      </h4>
                    </div>

                    <ul className="space-y-3 font-sans text-sm text-page-dark/80 dark:text-page/80">
                      {job.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 leading-relaxed"
                        >
                          <span className="mt-1.5 min-w-[4px] h-[4px] rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
