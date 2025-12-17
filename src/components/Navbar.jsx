import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useScroll";

const Navbar = ({ darkMode, setDarkMode, navLinks }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const activeSection = useActiveSection(navLinks);

  // Array of IDs that should trigger the navbar to hide
  // You can add more IDs here in the future
  const fullScreenSections = ["what-i-do"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If any of the full-screen sections are intersecting (visible in viewport)
        const isOverlapping = entries.some((entry) => entry.isIntersecting);
        // If overlapping, hide navbar (isVisible = false). If not, show it.
        setIsVisible(!isOverlapping);
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the section is visible
      }
    );

    fullScreenSections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (name) => {
    // Convert "What I Do" -> "what-i-do"
    const id = name.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-full md:w-max max-w-[90%] md:max-w-[90%] transition-all duration-700 ease-in-out ${
        isVisible
          ? "top-6 opacity-100 translate-y-0" // Visible State
          : "-top-20 opacity-0 -translate-y-full" // Hidden State (Slide Up)
      }`}
    >
      <div className="flex items-center justify-between gap-1 md:gap-2 px-2 py-2 md:px-3 md:py-2.5 rounded-full bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50">
        <div className="flex items-center">
          <a
            href="#"
            className="pl-3 pr-2 text-xl font-bold font-syne tracking-tighter hover:text-primary dark:hover:text-secondary transition-colors"
          >
            FJ.
          </a>

          <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700 mx-1 md:mx-2 hidden md:block"></div>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`px-4 py-2 text-xs font-semibold font-syne uppercase rounded-full transition-all duration-300 tracking-widest ${
                activeSection === link.toLowerCase().replace(/\s+/g, "-")
                  ? "bg-page-dark dark:bg-page text-page dark:text-page-dark"
                  : "text-muted hover:text-page-dark dark:hover:text-page"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700 mx-1 md:mx-2 hidden md:block"></div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-page-dark dark:text-page"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 ml-1 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col gap-2 md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`px-4 py-3 text-sm font-bold font-syne text-left rounded-lg transition-colors ${
                activeSection === link.toLowerCase().replace(/\s+/g, "-")
                  ? "bg-zinc-100 dark:bg-zinc-800 text-primary dark:text-secondary"
                  : "text-muted"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
