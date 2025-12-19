import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- DATA CONFIGURATION ---
const SERVICES_DATA = [
  {
    id: 1,
    number: "01",
    title: "Software Development",
    description:
      "I craft robust and scalable digital solutions, bridging the gap between complex backend logic and intuitive frontend interactions to build complete applications from the ground up.",
    imageSrc: "/soft.webp",
    imageAlt: "Software Development",
    features: [
      "Full-stack Development",
      "Scalable Architecture",
      "Database Management",
      "API Design",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Web3 Contract Integrations",
    description:
      "I connect traditional web applications with the blockchain ecosystem. I specialize in integrating smart contracts into front-end interfaces, ensuring secure and seamless decentralized user experiences.",
    imageSrc: "/web3.webp",
    imageAlt: "Web3 Integration",
    features: [
      "Smart Contract Integration",
      "Wagmi & Ethers.js",
      "Wallet Connections",
      "dApp Logic",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "UI/UX Design",
    description:
      "I believe code needs purpose. I design interfaces that are not just visually appealing but are intuitively usable, focusing on user flows and creating design systems that ensure consistency.",
    imageSrc: "/ui.webp",
    imageAlt: "UI/UX Design",
    features: [
      "Interactive Prototyping",
      "Design Systems",
      "User Flows",
      "Wireframing",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Content Creation",
    description:
      "Beyond code and design, I create digital assets and narratives. I run a YouTube channel where I simplify technical concepts, and I help brands grow through strategic social media management.",
    imageSrc: "/youtube.webp",
    imageAlt: "Content Creation",
    features: [
      "YouTube (2k+ Subs, 300k+ Views)",
      "Social Media Strategy",
      "Video Production",
      "Visual Storytelling",
    ],
  },
];

// --- SUB-COMPONENTS ---

const FeaturePill = ({ label }) => (
  <div
    className="px-3 py-2 rounded-full 
    bg-zinc-100/50 dark:bg-zinc-800/50 
    backdrop-blur-md 
    border border-primary/30 dark:border-white/30
    ring-1 ring-primary/20 dark:ring-secondary/20
    shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.2)] dark:shadow-[0_0_10px_rgba(var(--color-secondary-rgb),0.2)]
    text-sm font-medium font-sans text-page-dark/70 dark:text-page/70 
    transition-all duration-300 
    hover:bg-primary/10 dark:hover:bg-secondary/10
    hover:border-primary/50 dark:hover:border-secondary/50
    hover:ring-primary/40 dark:hover:ring-secondary/40
    hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)] dark:hover:shadow-[0_0_15px_rgba(var(--color-secondary-rgb),0.4)]
    hover:text-page-dark dark:hover:text-page
    cursor-default"
  >
    {label}
  </div>
);

const SectionContainer = ({ children, imageSrc, imageAlt, number }) => {
  return (
    <div className="section-panel w-full md:w-screen min-h-[90vh] md:h-screen flex-shrink-0 flex flex-col justify-center items-center overflow-hidden relative border-b border-zinc-200 dark:border-zinc-800 md:border-none">
      <div className="w-full max-w-7xl h-full relative px-6 flex flex-col justify-start md:justify-center pt-24 md:pt-0">
        {/* Changed items-center to items-start for Top Alignment */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 mt-8 md:mt-0">
          {/* Left Content Column */}
          {/* justify-start ensures content stacks from top */}
          <div className="flex flex-col justify-start space-y-8 order-2 lg:order-1 text-left relative">
            <div className="relative z-10">{children}</div>

            {/* Desktop Big Number (Bottom Left) */}
            <div className="hidden md:block absolute top-80 -left-8 text-[10rem] md:text-[20rem] font-bold leading-none text-zinc-200 dark:text-zinc-800/50 select-none pointer-events-none">
              {number}
            </div>
          </div>

          {/* Right Image Column Wrapper */}
          <div className="relative order-1 lg:order-2 w-full h-[40vh] md:h-[600px] group">
            {/* Mobile Number: Top Left behind image */}
            <div className="md:hidden absolute -top-26 -left-2 text-[8rem] font-bold leading-none text-zinc-200 dark:text-zinc-800/50 select-none pointer-events-none z-0">
              {number}
            </div>

            {/* Image Container */}
            <div className="h-full w-full rounded-3xl overflow-hidden relative z-10 border border-zinc-200 dark:border-zinc-800">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const WhatIDo = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (min-width: 768px) ---
      mm.add("(min-width: 768px)", () => {
        const slides = sectionRef.current;
        const scrollAmount = slides.scrollWidth - window.innerWidth;

        gsap.to(slides, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollAmount}`,
            invalidateOnRefresh: true,
          },
        });
      });

      // --- MOBILE ANIMATION (max-width: 767px) ---
      mm.add("(max-width: 767px)", () => {
        const panels = gsap.utils.toArray(".section-panel");

        panels.forEach((panel) => {
          gsap.fromTo(
            panel.querySelector("img"), // Parallax effect on image
            { scale: 1.1 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            panel.querySelectorAll("h3, p, .pill-container"), // Fade content
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              scrollTrigger: {
                trigger: panel,
                start: "top 70%",
              },
            }
          );
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="what-i-do" className="relative">
      <div className="pt-24 max-w-7xl mx-auto px-6 mb-12 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold font-syne text-page-dark dark:text-page mb-4">
          What I Do?
        </h2>
        <p className="text-muted text-lg max-w-xl font-sans">
          Bridging the gap between engineering and creativity through code,
          design, and content.
        </p>
      </div>

      <div
        ref={triggerRef}
        className="min-h-screen overflow-hidden bg-transparent"
      >
        <div
          ref={sectionRef}
          className="flex flex-col md:flex-row h-auto md:h-full w-full md:w-max"
        >
          {SERVICES_DATA.map((service) => (
            <SectionContainer
              key={service.id}
              number={service.number}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold font-syne text-page-dark dark:text-page mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-muted font-sans leading-relaxed max-w-xl mb-6">
                  {service.description}
                </p>
                <div className="pill-container flex flex-wrap gap-3">
                  {service.features.map((feature, index) => (
                    <FeaturePill key={index} label={feature} />
                  ))}
                </div>
              </div>
            </SectionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
