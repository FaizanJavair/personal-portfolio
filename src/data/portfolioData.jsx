export const DATA = {
  hero: {
    title: "Faizan Javair",
    subtitle: "Software Developer from planet Earth.",
  },
  projects: [
    {
      name: "Pulsyte",
      description: "One-page agency website with animations and 3D.",
      image: "/projects/pulsyte.png",
      stack: [
        "HTML",
        "CSS",
        "Tailwind CSS", // Updated to match icon mapping key if needed, or keep "Tailwind" if mapped
        "React",
        "ThreeJS",
        "EmailJS",
        "Framer Motion",
      ],
      links: { live: "#", github: null },
    },
    {
      name: "Socializze",
      description: "Full social media platform with posts, friends and chat.",
      image: "/projects/social-media.png",
      stack: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Django",
        "Django Rest-Framework", // Mapped to DRF in icons
        "Python",
        "PostgreSQL",
        "Redis",
      ],
      links: { live: null, github: "#" },
    },
    {
      name: "TickTrack",
      description: "3-in-1 app — todo list, habit tracker, weather.",
      image: "/projects/ticktrack.png",
      stack: [
        "React Native",
        "CSS",
        "JavaScript",
        "Firebase",
        "JSON",
        "OpenWeather API",
      ],
      links: { live: "#", github: "#" },
    },
    {
      name: "Weatherly",
      description: "Mobile weather app with real-time data + forecasting.",
      image: "/projects/weatherly.png",
      stack: ["React Native", "JavaScript", "CSS", "OpenWeather API"],
      links: { live: "#", github: "#" },
    },
  ],
  experience: [
    {
      company: "TechThree",
      role: "Front-end & Mobile Developer",
      period: "Jul 2024 – Present",
      achievements: [
        "Developed 4+ DApps using React + React Native with 90% code parity",
        "Integrated APIs & smart contracts to accelerate delivery by 15%",
        "Resolved 98% critical bugs pre-launch through QA collaboration",
        "Integrated Wagmi + WalletConnect supporting multi-chain flows",
      ],
    },
    {
      company: "TechThree",
      role: "Creative Designer",
      period: "Nov 2024 – Present",
      achievements: [
        "Designed 15+ DApp UI/UX prototypes improving retention by 20%",
        "Created 50+ assets with avg 12% engagement boosting subscriber count",
        "Led brand strategy — consistent content drove 20% monthly engagement lift",
      ],
    },
    {
      company: "Parkyeri",
      role: "Software Engineer Intern",
      period: "Aug 2023 – Feb 2024",
      achievements: [
        "Deployed 10+ server-side functions improving reliability & UX",
        "Cut system errors by 25% through debugging & automation",
        "Deployed Django apps with NGINX + PostgreSQL boosting performance by 30%",
        "Served as Scrum Master for cross-team execution",
      ],
    },
  ],
  skills: {
    languages: [
      "JavaScript",
      "Python",
      "C++",
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Node",
      "Django",
      "Docker",
      "Flask",
      "PostgreSQL",
      "MySQL",
    ],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "CI/CD",
      "Docker",
      "Linux",
      "Nginx",
      "Gunicorn",
      "Vagrant",
      "Figma",
    ],
  },
  contact: {
    email: "faizanjavair@gmail.com",
    github: "https://github.com/FaizanJavair",
    linkedin: "https://linkedin.com/in/faizan-j-827a2a146",
    youtube: "https://www.youtube.com/@FaizanJavair", // Update with your actual link
    instagram: "https://www.instagram.com/faizan.javair/", // Update with your actual link,
    twitter: "https://twitter.com/FaizanJavair", // Update with your actual link
    resume:
      "https://drive.google.com/file/d/1tc3hxWyss06ZEzscpzO2lzGU0-0ycpdy/view?usp=sharing",
    about: {
      image: "/pfp.jpg",
      background:
        "Specializing in the intersection of design and engineering. I build high-fidelity interfaces backed by robust architecture, delivering complete, scalable solutions.",
      approach:
        "Complexity belongs to the system, not the user. I build solutions that feel inevitable—crafting narratives through interaction and asking the hard questions to ensure clarity.",
    },
  },
};
