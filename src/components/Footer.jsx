import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaXTwitter, // Import X (Twitter) icon
} from "react-icons/fa6";
import { DATA } from "../data/portfolioData";

const SocialLink = ({ href, icon: Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // UPDATED COLORS:
      // Default: Black (Light Mode) / White (Dark Mode)
      // Hover: Brand Teal (Light Mode) / Brand Lime (Dark Mode)
      className="text-page-dark dark:text-page 
      hover:text-primary dark:hover:text-secondary 
      transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    >
      <Icon size={26} />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="w-full pt-24 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
        {/* TOP ROW: Info & Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Left: Copyright & Tagline */}
          <div className="max-w-md">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-page-dark dark:text-page mb-4">
              Let's build something together.
            </h2>
            <p className="text-muted text-sm font-sans">
              © {new Date().getFullYear()} Faizan Javair.{" "}
              <br className="hidden md:block" />
              Crafted with precision and code.
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            <SocialLink
              href={`mailto:${DATA.contact.email}`}
              icon={FaEnvelope}
            />
            <SocialLink href={DATA.contact.github} icon={FaGithub} />
            <SocialLink href={DATA.contact.linkedin} icon={FaLinkedin} />
            <SocialLink href={DATA.contact.twitter} icon={FaXTwitter} />
            <SocialLink href={DATA.contact.instagram} icon={FaInstagram} />
            <SocialLink href={DATA.contact.youtube} icon={FaYoutube} />
          </div>
        </div>

        {/* BOTTOM ROW: Massive Name */}
        <div className="relative border-t border-zinc-200 dark:border-zinc-800/80 pt-8 md:pt-16">
          <h1 className="text-[11vw] md:text-[12.5vw] leading-[0.8] font-black font-syne text-center uppercase tracking-tighter select-none pointer-events-none transition-colors duration-500 text-page-dark dark:text-page opacity-20">
            FAIZAN JAVAIR
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
