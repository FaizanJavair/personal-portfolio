// 1. MAIN PORTFOLIO DATA (Selected Works + Bio)
export const DATA = {
  hero: {
    title: "Faizan Javair",
    subtitle: "Software Developer from planet Earth.",
  },
  projects: [
    {
      name: "NoraQA",
      description:
        "A scalable and comprehensive QA platform focused on real-time data and efficient state management.",
      image: "/projects/noraqa.webp",
      stack: ["Next.js", "Supabase", "Zustand", "HTML", "CSS", "Tailwind CSS"],
      links: { live: "https://trynora.app/", github: null },
    },
    {
      name: "NextGPU",
      description:
        "High-conversion landing page for a decentralized hardware sharing platform for AI compute.",
      image: "/projects/nextgpu-landing.webp",
      stack: [
        "Next.js",
        "Supabase",
        "Zustand",
        "Wagmi",
        "ethers.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      links: { live: "https://nextgpu.ai/", github: null },
    },
    {
      name: "LayerTao",
      description: "Website for a decentralized application middleware layer.",
      image: "/projects/layertao-landing.webp",
      stack: [
        "Next.js",
        "Supabase",
        "Zustand",
        "Wagmi",
        "ethers.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      links: {
        live: "https://layertao.com/",
        github: "https://github.com/LayerTao/layertao-website",
      },
    },
    {
      name: "LayerTao Developer",
      description:
        "API-driven developer platform and dashboard for the LayerTao middleware ecosystem.",
      image: "/projects/layertao-developer.webp",
      stack: [
        "Next.js",
        "Supabase",
        "Zustand",
        "Wagmi",
        "ethers.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      links: {
        live: "https://platform.layertao.com/",
        github: "https://github.com/LayerTao/layertao-dapp",
      },
    },
    {
      name: "NextGPU App",
      description:
        "A desktop application designed to share your GPU and run AI models locally.",
      image: "/projects/nextgpu-app.webp",
      stack: ["Jetpack Compose", "Kotlin", "Spring Boot"],
      links: {
        live: "https://nextgpu.ai/download/",
        github: "https://github.com/NextGPUNetwork/nextgpu-app",
      },
    },
    {
      name: "NextGPU Staking",
      description:
        "Web3 staking dashboard and interface allowing users to participate in the decentralized hardware network.",
      image: "/projects/nextgpu-staking.webp",
      stack: [
        "Next.js",
        "Supabase",
        "Zustand",
        "Wagmi",
        "ethers.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      links: { live: "https://provider.nextgpu.ai/", github: null },
    },
    {
      name: "Bubsy",
      description:
        "Website for AI powered Telegram community management bot. [Project Closed]",
      image: "/projects/bubsy.webp",
      stack: [
        "React",
        "SASS",
        "Redux",
        "Javascript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      links: { live: "https://bubsy.netlify.app/", github: null },
    },
    {
      name: "CogniLearn",
      description:
        "An interface-based educational platform mapping abstract technical definitions into multi-representational formats.",
      image: "/projects/cognilearn-ai.webp",
      stack: ["Next.js", "OpenAI", "Zustand", "HTML", "CSS", "Tailwind CSS"],
      links: {
        live: "https://cognitivelearn.netlify.app/",
        github: "https://github.gatech.edu/fjavair3/cognilearn",
      },
    },
    {
      name: "Cellex",
      description: "A launchpad to fair launch tokens easily. [Project Closed]",
      image: "/projects/cellex.webp",
      stack: [
        "React",
        "SASS",
        "Redux",
        "Javascript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      links: { live: "https://cellex-test.netlify.app/", github: null },
    },
  ],
  experience: [
    {
      company: "TechThree",
      role: "Senior Frontend Engineer | Creative Engineer",
      period: "Jan 2025 – Present",
      achievements: [
        "Led technical discovery and optimized UI/UX concepts for scalable React/React Native performance",
        "Streamlined developer-designer handoffs with a unified Figma component library linked directly to code",
        "Architected automated CI/CD pipelines on AWS Lightsail using Jenkins, Docker, and SonarQube",
        "Collaborated with cross-functional teams to align technical deliverables with product and marketing strategies",
      ],
    },
    {
      company: "TechThree",
      role: "Front-end & Mobile Developer",
      period: "Jul 2024 – Jan 2025",
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
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Python",
      // "C++",
      "HTML",
      "CSS",
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
      "Jenkins",
      "CI/CD",
      "Docker",
      "Linux",
      "Nginx",
      "Gunicorn",
      "SonarQube",
      "Figma",
    ],
  },
  contact: {
    email: "faizanjavair@gmail.com",
    github: "https://github.com/FaizanJavair",
    linkedin: "https://linkedin.com/in/faizan-j-827a2a146",
    youtube: "https://www.youtube.com/@FaizanJavair",
    instagram: "https://www.instagram.com/faizan.javair/",
    twitter: "https://twitter.com/FaizanJavair",
    resume:
      "https://drive.google.com/file/d/12TfNOFkKO-iTYLqk1BuT09KO3xG995yM/view?usp=sharing",
    about: {
      image: "/pfp.webp",
      background:
        "Specializing in the intersection of design and engineering. I build high-fidelity interfaces backed by robust architecture, delivering complete, scalable solutions.",
      approach:
        "Complexity belongs to the system, not the user. I build solutions that feel inevitable—crafting narratives through interaction and asking the hard questions to ensure clarity.",
    },
  },
};

// 2. COMPLETE ARCHIVE (For AllProjects Page)
// Mapped to match the schema: name, description, image, stack, links
export const ALL_PROJECTS = [
  {
    name: "NoraQA",
    description:
      "A scalable and comprehensive QA platform focused on real-time data and efficient state management.",
    image: "/projects/noraqa.webp",
    stack: ["Next.js", "Supabase", "Zustand", "HTML", "CSS", "Tailwind CSS"],
    links: { live: "https://trynora.app/", github: null },
  },
  {
    name: "NextGPU",
    description:
      "High-conversion landing page for a decentralized hardware sharing platform for AI compute.",
    image: "/projects/nextgpu-landing.webp",
    stack: [
      "Next.js",
      "Supabase",
      "Zustand",
      "Wagmi",
      "ethers.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    links: { live: "https://nextgpu.ai/", github: null },
  },
  {
    name: "LayerTao",
    description: "Website for a decentralized application middleware layer.",
    image: "/projects/layertao-landing.webp",
    stack: [
      "Next.js",
      "Supabase",
      "Zustand",
      "Wagmi",
      "ethers.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    links: {
      live: "https://layertao.com/",
      github: "https://github.com/LayerTao/layertao-website",
    },
  },
  {
    name: "LayerTao Developer",
    description:
      "API-driven developer platform and dashboard for the LayerTao middleware ecosystem.",
    image: "/projects/layertao-developer.webp",
    stack: [
      "Next.js",
      "Supabase",
      "Zustand",
      "Wagmi",
      "ethers.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    links: {
      live: "https://platform.layertao.com/",
      github: "https://github.com/LayerTao/layertao-dapp",
    },
  },
  {
    name: "NextGPU App",
    description:
      "A desktop application designed to share your GPU and run AI models locally.",
    image: "/projects/nextgpu-app.webp",
    stack: ["Jetpack Compose", "Kotlin", "Spring Boot"],
    links: {
      live: "https://nextgpu.ai/download/",
      github: "https://github.com/NextGPUNetwork/nextgpu-app",
    },
  },
  {
    name: "NextGPU Staking",
    description:
      "Web3 staking dashboard and interface allowing users to participate in the decentralized hardware network.",
    image: "/projects/nextgpu-staking.webp",
    stack: [
      "Next.js",
      "Supabase",
      "Zustand",
      "Wagmi",
      "ethers.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    links: { live: "https://provider.nextgpu.ai/", github: null },
  },
  {
    name: "Bubsy",
    description:
      "Website for AI powered Telegram community management bot. [Project Closed]",
    image: "/projects/bubsy.webp",
    stack: [
      "React",
      "SASS",
      "Redux",
      "Javascript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    links: { live: "https://bubsy.netlify.app/", github: null },
  },
  {
    name: "CogniLearn",
    description:
      "An interface-based educational platform mapping abstract technical definitions into multi-representational formats.",
    image: "/projects/cognilearn-ai.webp",
    stack: ["Next.js", "OpenAI", "Zustand", "HTML", "CSS", "Tailwind CSS"],
    links: {
      live: "https://cognitivelearn.netlify.app/",
      github: "https://github.gatech.edu/fjavair3/cognilearn",
    },
  },
  {
    name: "Cellex",
    description: "A launchpad to fair launch tokens easily. [Project Closed]",
    image: "/projects/cellex.webp",
    stack: [
      "React",
      "SASS",
      "Redux",
      "Javascript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Wagmi",
      "ethers.js",
    ],
    links: { live: "https://cellex-test.netlify.app/", github: null },
  },
  {
    name: "Pulsyte",
    description:
      "One page website for a web agency made on react and advanced motion.",
    image: "/projects/pulsyte.webp",
    stack: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "ThreeJS",
      "EmailJS",
      "Framer Motion",
    ],
    links: { live: "https://pulsyte.com/", github: null },
  },
  {
    name: "Spotify Live Concept",
    description:
      "A Web3-integrated live music streaming interface concept with seamless wallet connections.",
    image: "/projects/spotifylive-concept.webp",
    stack: ["Next.js", "HTML", "CSS", "Tailwind CSS"],
    links: { live: "https://threebugsandafeature.netlify.app/", github: null },
  },
  {
    name: "Socializze",
    description:
      "Social Media Platform where you can post, make friends and chat.",
    image: "/projects/social-media.webp",
    stack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Django",
      "Django Rest-Framework",
      "Python",
      "PostgreSQL",
      "Redis",
    ],
    links: { live: null, github: "https://github.com/FaizanJavair/Socializze" },
  },
  {
    name: "TickTrack",
    description:
      "A 3-in-1 App where you can make todo list, track habits and check weather updates.",
    image: "/projects/ticktrack.webp",
    stack: [
      "React Native",
      "CSS",
      "Javascript",
      "Firebase",
      "JSON",
      "OpenWeather API",
    ],
    links: {
      live: "https://www.youtube.com/watch?v=03DLpGk_Rv4",
      github: "https://github.com/FaizanJavair/TickTrack",
    },
  },
  {
    name: "Weatherly",
    description:
      "An intuitive mobile app that shows hourly, daily and current weather according to location.",
    image: "/projects/weatherly.webp",
    stack: ["React Native", "Javascript", "CSS", "JSON", "OpenWeather API"],
    links: {
      live: "https://youtu.be/iN6SQHM4M9k",
      github: "https://github.com/FaizanJavair/Weatherly_Weather-App",
    },
  },
  {
    name: "Sentiment Analysis - IMDB Dataset",
    description:
      "Training a model to conduct binary classification and analysing using average and precision values.",
    image: "/projects/sentiment-bc.webp",
    stack: [
      "Python",
      "Keras",
      "Matplotlib",
      "Jupyter Notebook",
      "Binary Classification",
    ],
    links: {
      live: "https://delightful-figolla-730cb6.netlify.app/",
      github: null,
    },
  },
  {
    name: "Wine Data Machine Learning - KNN",
    description:
      "Implementing KNN and conducting Cross-Validation using KNN. Seeing the difference in Euclidean and Manhattan distance function and comparing average and folds.",
    image: "/projects/ml-knn.webp",
    stack: ["Python", "SciKit Learn"],
    links: {
      live: "https://comfy-mermaid-2e2392.netlify.app/",
      github: null,
    },
  },
  {
    name: "Kindle Review Sentiment Analysis",
    description:
      "Using Amazon Kindle Reviews to use VADER and Roberta Model to compare differences in sentiment analysis of each model.",
    image: "/projects/kindle.webp",
    stack: ["Python", "VADER", "Roberta Model", "Transformers"],
    links: {
      live: "https://zesty-paletas-2bc009.netlify.app/",
      github: null,
    },
  },
  {
    name: "Battle Space",
    description:
      "A top down 2D Shooter with rich features and amazing levels. [Group Project]",
    image: "/projects/battle.webp",
    stack: ["Unity", "C#"],
    links: {
      live: "https://faizanjavair.itch.io/battle-space",
      github: "https://github.com/neveensakr/games-development-t10",
    },
  },
  {
    name: "Astronaut Data Modeling",
    description:
      "A simple website that does CRUD operation on astronaut modeled data.",
    image: "/projects/astronaut.webp",
    stack: [
      "HTML",
      "Bootstrap",
      "Javascript",
      "EJS",
      "MySQL",
      "Express",
      "NodeJS",
    ],
    links: {
      live: null,
      github: "https://github.com/FaizanJavair/Blogging-website-template/",
    },
  },
  {
    name: "OtoDecks DJ Application",
    description: "A DJing application with two simultaneous tracks.",
    image: "/projects/dj.webp",
    stack: ["C++", "JUCE"],
    links: {
      live: null,
      github: "https://github.com/FaizanJavair/juce-dj-app/",
    },
  },
  {
    name: "Simple Blog Website",
    description:
      "A simple website that displays blogs in cards with custom front-end styling.",
    image: "/projects/dailybugle.webp",
    stack: ["HTML", "CSS", "Javascript"],
    links: {
      live: "https://mellow-madeleine-e74cc0.netlify.app/",
      github: "https://github.com/FaizanJavair/Blogging-website-template/",
    },
  },
  {
    name: "Pencil Man",
    description: "Simple platformer game.",
    image: "/projects/pencilmangame.webp",
    stack: ["Javascript", "p5.js", "HTML"],
    links: {
      live: "https://wondrous-cocada-a557b0.netlify.app/",
      github: "https://github.com/FaizanJavair/pencilman/",
    },
  },
  {
    name: "Music Visualizer",
    description:
      "Music Visualizer that shows different music propeties such as treble, high mids etc. [Use Spacebar to see Menu or select options from 1-5 to see the Visuals]",
    image: "/projects/music.webp",
    stack: ["Javascript", "p5.js", "HTML"],
    links: {
      live: "https://bejewelled-centaur-3e8397.netlify.app/",
      github: null,
    },
  },
];
