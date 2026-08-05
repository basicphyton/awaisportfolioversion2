export const personalInfo = {
  name: "Muhammad Awais",
  title: "Full-Stack Developer & UI/UX Engineer",
  roles: [
    "Full-Stack Web Developer",
    "React & Node.js Specialist",
    "Frontend Architect",
    "UI/UX Enthusiast"
  ],
  location: "Lahore, Pakistan",
  email: "awais.dev.official@gmail.com",
  phone: "+92 300 1234567",
  github: "https://github.com/muhammadawais",
  linkedin: "https://linkedin.com/in/muhammad-awais-dev",
  twitter: "https://twitter.com/awais_dev",
  whatsapp: "https://wa.me/923001234567",
  availability: "Available for Full-time Roles & Projects",
  bio: "Passionate Full-Stack Developer with over 3+ years of experience crafting high-performance, scalable web applications. Dedicated to writing clean, maintainable code, building responsive interfaces with React & Tailwind CSS, and designing seamless user experiences.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "35+" },
    { label: "Satisfied Clients", value: "25+" },
    { label: "Code Commits", value: "2,400+" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 95, icon: "Code2" },
      { name: "JavaScript (ES6+)", level: 90, icon: "FileCode" },
      { name: "TypeScript", level: 85, icon: "FileJson" },
      { name: "Next.js", level: 88, icon: "Globe" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "HTML5 / CSS3", level: 95, icon: "Layout" },
      { name: "Redux Toolkit", level: 85, icon: "Boxes" },
      { name: "Framer Motion", level: 90, icon: "Sparkles" }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 88, icon: "Server" },
      { name: "Express.js", level: 90, icon: "Cpu" },
      { name: "RESTful APIs", level: 92, icon: "Zap" },
      { name: "GraphQL", level: 80, icon: "Share2" },
      { name: "JWT / OAuth Auth", level: 88, icon: "Lock" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 88, icon: "Database" },
      { name: "PostgreSQL", level: 82, icon: "HardDrive" },
      { name: "Firebase", level: 85, icon: "Flame" },
      { name: "AWS (S3, EC2)", level: 75, icon: "Cloud" },
      { name: "Docker", level: 78, icon: "Container" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 92, icon: "GitBranch" },
      { name: "Vite / Webpack", level: 90, icon: "Wrench" },
      { name: "Figma (UI Design)", level: 85, icon: "Figma" },
      { name: "Postman API Testing", level: 90, icon: "Send" },
      { name: "Vercel / Netlify", level: 95, icon: "CloudUpload" }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "SaaS Analytics & AI Dashboard",
    category: "Full Stack",
    description: "An enterprise real-time analytics platform powered by React, Node.js, and Chart.js featuring dynamic widgets and dark mode dashboard.",
    longDescription: "A comprehensive SaaS dashboard solution built for data-driven teams. Features live WebSocket data updates, multi-tenant workspace management, automated CSV export, customizable widgets, and JWT authentication.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Tailwind CSS", "Chart.js", "MongoDB"],
    liveUrl: "https://example.com/saas-dashboard",
    githubUrl: "https://github.com/muhammadawais/saas-analytics-dashboard",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Luxury Hub",
    category: "Full Stack",
    description: "Full-featured online shopping platform with interactive cart, Stripe payment gateway, and admin inventory panel.",
    longDescription: "Engineered a high-performance modern e-commerce storefront with instantaneous search filtering, seamless Stripe checkout integration, order tracking dashboard, and dark mode interface.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Express.js", "Stripe API", "Redux", "Tailwind CSS"],
    liveUrl: "https://example.com/ecommerce-hub",
    githubUrl: "https://github.com/muhammadawais/ecommerce-luxury-hub",
    featured: true
  },
  {
    id: 3,
    title: "DevFlow Code Collaboration App",
    category: "React",
    description: "Real-time collaborative developer platform for sharing snippets, snippet formatting, and live code rooms.",
    longDescription: "DevFlow allows developers to create, organize, and share syntax-highlighted code snippets with live real-time pair-programming rooms, comments, and automated tagging.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Framer Motion", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://example.com/devflow",
    githubUrl: "https://github.com/muhammadawais/devflow-collaboration",
    featured: true
  },
  {
    id: 4,
    title: "AI Image Generator Studio",
    category: "React",
    description: "Generative AI application connecting OpenAI DALL-E APIs to create, edit, and curate digital artwork.",
    longDescription: "A sleek creative suite allowing users to prompt AI models for custom graphics, apply style filters, generate high-resolution image downloads, and share artwork in a community gallery.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Vite", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://example.com/ai-image-studio",
    githubUrl: "https://github.com/muhammadawais/ai-image-studio",
    featured: false
  },
  {
    id: 5,
    title: "Modern Portfolio V2 System",
    category: "UI/UX",
    description: "Ultra-responsive interactive portfolio with multi-theme switcher, Framer Motion animations, and smooth glassmorphism.",
    longDescription: "A state-of-the-art developer portfolio with custom CSS variable theme engine, dark mode styling, automated particle animations, CV download, and accessible clean React modular architecture.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com/portfolio-v2",
    githubUrl: "https://github.com/muhammadawais/awais-portfolio-v2",
    featured: true
  },
  {
    id: 6,
    title: "TaskPulse Project Management",
    category: "Full Stack",
    description: "Kanban board application with drag-and-drop task tracking, deadline notifications, and team chat.",
    longDescription: "Streamlined project board with interactive Kanban columns, drag-and-drop card status updates, micro-task sublists, file attachments, and team member assignment.",
    image: "https://images.unsplash.com/photo-1540355153113-6270fd7077a7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/taskpulse",
    githubUrl: "https://github.com/muhammadawais/taskpulse-kanban",
    featured: false
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "TechNova Solutions",
    location: "Lahore, PK (Hybrid)",
    period: "2024 - Present",
    description: "Leading the frontend and backend architecture of core client web applications.",
    achievements: [
      "Architected scalable microservices using React, Node.js, and MongoDB, resulting in a 40% improvement in API response times.",
      "Mentored a team of 4 junior developers on modern React component design patterns and clean code practices.",
      "Implemented automated CI/CD deployment pipelines on Vercel and AWS EC2."
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Tailwind CSS"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "PixelCraft Studios",
    location: "Remote",
    period: "2023 - 2024",
    description: "Specialized in creating responsive pixel-perfect web applications and component design systems.",
    achievements: [
      "Developed over 20+ responsive UI web applications using React and Tailwind CSS with complex state management.",
      "Engineered sleek Framer Motion animations and glassmorphic UI elements for premium SaaS landing pages.",
      "Optimized Web Vitals score by 35% through lazy loading, code splitting, and asset compression."
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "InnoSoft Digital",
    location: "Lahore, PK",
    period: "2022 - 2023",
    description: "Built client landing pages, REST API integrations, and database schemas.",
    achievements: [
      "Integrated third-party RESTful APIs and authentication flows with JWT token handling.",
      "Collaborated with UI/UX designers to translate Figma design mockups into pixel-perfect React code.",
      "Resolved frontend cross-browser compatibility issues and bugs across 15+ web projects."
    ],
    tech: ["JavaScript", "React", "Express.js", "HTML5/CSS3", "Git"]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "University of Computer & Emerging Sciences",
    period: "2024 - 2028",
    location: "Pakistan",
    details: "Focused on Software Engineering, Data Structures, Algorithms, Web Technologies, Database Management, and Artificial Intelligence.",
    achievements: [
      "Deans Honor List for Academic Excellence",
      "Lead Developer of Final Year Capstone Project (AI SaaS Web System)"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary School Certificate (FSc Pre-Engineering / ICS)",
    institution: "Punjab College Jahanian",
    period: "2022 - 2024",
    location: "Pakistan",
    details: "Completed core foundation in Mathematics, Physics, and Computer Science fundamentals.",
    achievements: [
      "Top student rank in college physics & programming competitions"
    ]
  }
];

export const certificatesData = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2024",
    credentialId: "META-FE-984210",
    link: "https://coursera.org/verify/professional-cert/meta-frontend",
    skills: ["React.js", "Advanced JavaScript", "Web UX", "Version Control"]
  },
  {
    id: 2,
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-771239",
    link: "https://aws.amazon.com/verification",
    skills: ["AWS S3", "Lambda", "DynamoDB", "Cloud Deployment"]
  },
  {
    id: 3,
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UC-991823-FULLSTACK",
    link: "https://udemy.com/certificate/UC-991823",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "React"]
  },
  {
    id: 4,
    title: "UI/UX Design Specialization",
    issuer: "Google UX Design",
    date: "2022",
    credentialId: "G-UX-554109",
    link: "https://coursera.org/verify/google-ux",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping"]
  }
];
