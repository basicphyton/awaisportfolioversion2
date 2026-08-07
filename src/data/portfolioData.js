export const personalInfo = {
  name: "Muhammad Awais",
  title: "Full-Stack & AI Engineer",
  roles: [
    "Full-Stack Web Developer",
    "Full Stack AI Engineer",
    "Python Developer",
    "React & Node.js Specialist"
  ],
  location: "Multan, Pakistan",
  email: "muhammadawais760a@gmail.com",
  phone: "+92 307 0560260",
  github: "https://github.com/mawais066",
  linkedin: "https://www.linkedin.com/in/muhammad-awais-133689345/",
  whatsapp: "https://wa.me/923070560260",
  availability: "Available for Projects",
  bio: "Passionate Full-Stack Developer & AI Engineer with 2+ years of experience building scalable, high-performance web applications and Python intelligent systems. Completed 3-Month Full Stack AI Engineer Internship at Falcon Swift Software House — driven to craft data-powered applications using React, Node.js, Python, and cutting-edge AI technologies.",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "38+" },
    { label: "Satisfied Clients", value: "25+" },
    { label: "Code Commits", value: "2,500+" }
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
    category: "Backend & AI",
    skills: [
      { name: "Python", level: 92, icon: "Terminal" },
      { name: "Node.js", level: 88, icon: "Server" },
      { name: "Express.js", level: 90, icon: "Cpu" },
      { name: "RESTful APIs", level: 92, icon: "Zap" },
      { name: "FastAPI / Flask", level: 85, icon: "Share2" },
      { name: "JWT / OAuth Auth", level: 88, icon: "Lock" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 88, icon: "Database" },
      { name: "PostgreSQL / SQL", level: 85, icon: "HardDrive" },
      { name: "SQLite", level: 90, icon: "Database" },
      { name: "Firebase", level: 85, icon: "Flame" },
      { name: "AWS (S3, EC2)", level: 75, icon: "Cloud" }
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
  },
  {
    id: 7,
    title: "Login Authentication System",
    category: "Full Stack",
    description: "Secure user authentication system built on SQL with JWT-based login, registration, role-based access control, and session management.",
    longDescription: "A robust full-stack authentication solution featuring secure user registration, hashed password storage (bcrypt), JWT token-based login, role-based access control (admin/user), session expiry handling, and a clean React dashboard UI — all backed by a relational SQL database (MySQL/PostgreSQL).",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express.js", "SQL", "JWT", "bcrypt"],
    liveUrl: "#",
    githubUrl: "https://github.com/mawais066/login-auth-system",
    featured: true
  },
  {
    id: 8,
    title: "College Transport Management System",
    category: "Full Stack",
    description: "A comprehensive college transport management system with real-time route tracking, student seat booking, driver management, and an admin control panel.",
    longDescription: "Designed and developed a full-featured College Transport Management System enabling students to book seats, track bus routes in real-time, and receive arrival notifications. The admin panel supports driver management, route planning, schedule management, and report generation — all powered by a SQL relational database.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Express.js", "SQL", "Real-Time Tracking"],
    liveUrl: "#",
    githubUrl: "https://github.com/mawais066/college-transport-system",
    featured: true
  },
  {
    id: 9,
    title: "Banking Management System",
    category: "Python",
    description: "Secure Python-based banking solution featuring account creation, fund transfers, transaction logs, and encrypted database management.",
    longDescription: "A robust Banking Management System engineered in Python with SQLite and desktop GUI/CLI interfaces. Features secure PIN hashing, multi-account ledger management, real-time balance calculations, deposit/withdrawal workflows, and detailed audit logging.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "SQLite", "OOP", "Tkinter", "Cryptography"],
    liveUrl: "#",
    githubUrl: "https://github.com/mawais066/banking-management-system-python",
    featured: true
  },
  {
    id: 10,
    title: "Vehicle Management System",
    category: "Python",
    description: "Automated Python fleet tracking application for vehicle allocation, maintenance scheduling, fuel logs, and driver management.",
    longDescription: "Engineered an end-to-end Vehicle Management System in Python to streamline vehicle allocation, maintenance reminders, fuel consumption records, driver assignments, and trip history reporting with relational database persistence.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "SQL", "OOP", "Fleet Management", "CLI/GUI"],
    liveUrl: "#",
    githubUrl: "https://github.com/mawais066/vehicle-management-system-python",
    featured: true
  },
  {
    id: 11,
    title: "Library Management System",
    category: "Python",
    description: "Comprehensive Python library automation tool for cataloging books, managing member borrowings, fine calculation, and search indexing.",
    longDescription: "A feature-rich Library Management System built with Python and relational database storage. Includes automated book issuance and return tracking, overdue fine calculation, ISBN search indexing, member membership tiering, and analytical reports.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "SQLite", "OOP", "Data Structures", "File Handling"],
    liveUrl: "#",
    githubUrl: "https://github.com/mawais066/library-management-system-python",
    featured: true
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Full-Stack & AI Developer",
    company: "TechNova Solutions",
    location: "Lahore, PK (Hybrid)",
    period: "2024 - Present (1 Year)",
    description: "Leading the frontend and backend architecture of core client web applications and REST APIs.",
    achievements: [
      "Architected scalable microservices using React, Python, Node.js, and MongoDB.",
      "Mentored junior developers on modern React component design patterns and clean code practices.",
      "Implemented automated CI/CD deployment pipelines on Vercel and AWS EC2."
    ],
    tech: ["React", "Python", "Node.js", "MongoDB", "AWS", "Tailwind CSS"]
  },
  {
    id: 2,
    role: "Full Stack AI Engineer Intern",
    company: "Falcon Swift Software House",
    location: "Multan / Remote, PK",
    period: "3 Months Internship (2024 - 2025)",
    description: "Completed intensive 3-month Full Stack AI Engineer Internship working on intelligent web applications and AI model integration.",
    achievements: [
      "Integrated machine learning models with FastAPI REST endpoints and interactive React dashboards.",
      "Developed responsive frontend interfaces with automated real-time data visualizers.",
      "Earned official Full Stack AI Engineer Internship Certificate from Falcon Swift Software House."
    ],
    tech: ["Python", "React", "AI/ML", "FastAPI", "REST APIs", "Tailwind CSS"]
  },
  {
    id: 3,
    role: "Software Developer",
    company: "PixelCraft Studios",
    location: "Remote",
    period: "2023 - 2024 (1 Year)",
    description: "Specialized in creating responsive pixel-perfect web applications and Python automation tools.",
    achievements: [
      "Developed over 20+ responsive UI web applications using React, Python, and Tailwind CSS.",
      "Engineered sleek Framer Motion animations and glassmorphic UI elements for SaaS landing pages.",
      "Optimized Web Vitals score by 35% through lazy loading, code splitting, and asset compression."
    ],
    tech: ["Python", "React", "JavaScript", "Tailwind CSS", "Framer Motion"]
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
    title: "Full Stack AI Engineer Internship Certificate",
    issuer: "Falcon Swift Software House",
    date: "3 Months (Nov 2024 - Jan 2025)",
    credentialId: "FALCON-AI-2025-098",
    skills: ["Python", "Full Stack Development", "AI/ML Integration", "React.js", "FastAPI", "REST APIs"],
    link: "https://falconswift.com/verify/FALCON-AI-2025-098"
  }
];

