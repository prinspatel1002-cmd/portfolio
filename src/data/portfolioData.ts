export interface Project {
  id: string;
  title: string;
  category: 'data-science' | 'flutter' | 'ai' | 'full-stack';
  categoryLabel: string;
  description: string;
  technologies: string[];
  keyFeatures?: string[];
  githubUrl: string;
  liveUrl?: string;
  detailedOverview: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl: string;
  description: string;
  skillsLearned: string[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: "Prins Patel",
  titles: [
    "Data Analyst",
    "Computer Engineer",
    "Developer"
  ],
  location: "Gujarat, India",
  email: "prinspatel1002@gmail.com",
  github: "https://github.com/Prince-0210",
  githubUsername: "Prince-0210",
  linkedin: "https://www.linkedin.com/in/prins-patel-39046627b/",
  profileImage: "./profile.jpg",
  resumePdf: "./Prins_Patel_Resume.pdf",
  availabilityStatus: "Open to Data Analyst & Engineering Roles",
  summary: "I'm a Computer Engineering student passionate about transforming raw data into meaningful insights and building technology-driven solutions. I have experience with Data Science, Full-Stack Web Development, Flutter Application Development, and programming. I enjoy solving real-world problems through data analysis, visualization, and software development.",
  careerObjective: "Seeking opportunities in Data Analytics, Data Science, and technology-driven software development."
};

export const ABOUT_PILLARS = [
  {
    title: "Data Analysis",
    description: "Deriving patterns, cleaning messy datasets, and building visual narratives that explain business performance."
  },
  {
    title: "Problem Solving",
    description: "Approaching real-world challenges through structured algorithmic thinking and statistical methods."
  },
  {
    title: "Application Development",
    description: "Crafting responsive full-stack web platforms and cross-platform mobile apps using modern architectures."
  },
  {
    title: "Continuous Learning",
    description: "Constantly expanding capabilities across emerging data tools, predictive modeling, and software engineering."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Analytics",
    description: "Core toolset for data wrangling, exploratory data analysis, reporting, and statistical visualization.",
    iconName: "BarChart3",
    skills: [
      { name: "Python", tag: "Analytics & Scripting" },
      { name: "SQL", tag: "Querying & Aggregations" },
      { name: "Microsoft Excel", tag: "Spreadsheet Modeling & Pivot" },
      { name: "Power BI", tag: "BI Dashboards & DAX" },
      { name: "Pandas", tag: "Data Manipulation" },
      { name: "NumPy", tag: "Numerical Operations" },
      { name: "Data Visualization", tag: "Charts & Storytelling" }
    ]
  },
  {
    title: "Programming",
    description: "Foundational and object-oriented languages for algorithmic problem-solving and software logic.",
    iconName: "Code2",
    skills: [
      { name: "Python", tag: "Primary Language" },
      { name: "Java", tag: "Object-Oriented Programming" },
      { name: "JavaScript", tag: "Dynamic Scripting" },
      { name: "C / C++", tag: "Systems Fundamentals" }
    ]
  },
  {
    title: "Web Development",
    description: "Frontend and backend web technologies for database-driven, responsive applications.",
    iconName: "Layout",
    skills: [
      { name: "HTML", tag: "Semantic Markup" },
      { name: "CSS", tag: "Responsive Styling" },
      { name: "JavaScript", tag: "Client-Side Logic" },
      { name: "React", tag: "Component-Based UI" },
      { name: "Node.js", tag: "Runtime Environment" },
      { name: "Express.js", tag: "RESTful Web APIs" },
      { name: "MongoDB", tag: "NoSQL Database" }
    ]
  },
  {
    title: "Application Development",
    description: "Cross-platform mobile development frameworks and integrated development environments.",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter", tag: "Cross-Platform Framework" },
      { name: "Dart", tag: "Mobile Programming" },
      { name: "Android Studio", tag: "Mobile IDE & Tooling" }
    ]
  },
  {
    title: "Tools & Environments",
    description: "Essential version control, analysis notebooks, and developer utilities.",
    iconName: "Wrench",
    skills: [
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Code Collaboration" },
      { name: "VS Code", tag: "Primary Code Editor" },
      { name: "Jupyter Notebook", tag: "Data Science Environment" },
      { name: "Power BI", tag: "Business Intelligence" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    category: "data-science",
    categoryLabel: "Data Science / Machine Learning",
    description: "Developed a machine learning project to predict house prices using housing-related features and data analysis techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    githubUrl: "https://github.com/Prince-0210/California-Housing-Price-Predictor",
    detailedOverview: "This project implements an end-to-end data science workflow designed to forecast residential property valuations based on numerical and spatial attributes such as median income, total rooms, house age, and proximity metrics. The workflow includes in-depth Exploratory Data Analysis (EDA), distribution normalization, outlier handling, and regression modeling evaluated using standardized error metrics.",
    highlights: [
      "Conducted comprehensive Exploratory Data Analysis (EDA) on multi-feature housing records",
      "Handled skewed feature distributions and cleaned anomalous data points",
      "Engineered derived features to capture property density and space efficiency",
      "Trained and evaluated regression algorithms using Scikit-learn with quantitative metrics",
      "Visualized feature correlations and residual distributions using Matplotlib"
    ]
  },
  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking System",
    category: "flutter",
    categoryLabel: "Flutter / Application Development",
    description: "Developed a movie ticket booking application with movie listings, user-friendly navigation, and an interactive booking experience.",
    technologies: ["Flutter", "Dart", "Android Studio"],
    githubUrl: "https://github.com/Prince-0210",
    detailedOverview: "A mobile application engineered with Flutter and Dart providing an intuitive cinema ticketing interface. The app provides structured movie categorization, dynamic seat selection matrices, real-time ticket price calculations, and seamless multi-screen navigation designed for both Android and iOS devices.",
    highlights: [
      "Built clean, modular Flutter widgets adhering to responsive mobile UI principles",
      "Implemented an interactive visual seating grid allowing users to select and reserve seats",
      "Managed application state across movie selection, time slots, and checkout stages",
      "Designed user-friendly navigation with responsive screen transitions"
    ]
  },
  {
    id: "smart-city-mobility",
    title: "AI-Powered Smart City Mobility and Safety Platform",
    category: "ai",
    categoryLabel: "AI / Smart City",
    description: "An intelligent mobility platform designed to improve transportation management, route optimization, predictive arrival estimation, and passenger safety.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Smart Mobility"],
    keyFeatures: [
      "Intelligent route recommendations.",
      "Predictive arrival estimation.",
      "Smart mobility management.",
      "Safety and emergency mechanisms."
    ],
    githubUrl: "https://github.com/Prince-0210",
    detailedOverview: "An integrated smart city concept addressing urban transport friction and commuter safety. The platform analyzes multimodal transit streams—including buses, metro corridors, and passenger volume data—to deliver optimized route alternatives, predict arrival times under congestion, and provide safety-conscious commuter alerting mechanisms.",
    highlights: [
      "Conceptualized a unified four-layer architecture for multimodal city transit intelligence",
      "Designed predictive arrival time models leveraging live traffic and historical schedules",
      "Formulated passenger overcrowding alerts based on simulated sensor and ridership data",
      "Outlined authority dashboard workflows for emergency dispatching and route diversion"
    ]
  },
  {
    id: "full-stack-web-project",
    title: "Full-Stack Web Development Project",
    category: "full-stack",
    categoryLabel: "Full-Stack Development",
    description: "A full-stack web application demonstrating frontend development, backend functionality, database integration, and responsive UI design.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/Prince-0210",
    detailedOverview: "A complete MERN-stack web application engineered from the ground up to showcase cohesive client-server communication, database modeling, and clean UI responsiveness. The system integrates secure RESTful API endpoints with MongoDB persistence and a reactive frontend built with React.",
    highlights: [
      "Engineered decoupled client-server architecture with Node.js and Express REST APIs",
      "Designed normalized MongoDB schemas with Mongoose data modeling",
      "Constructed modular React components with state management and form validation",
      "Implemented responsive layouts ensuring optimal viewing across mobile and desktop devices"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "udemy-full-stack-web",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    credentialUrl: "#certifications",
    description: "Comprehensive training covering full-stack web engineering including semantic HTML5, modern CSS3 styling, JavaScript ES6+, React.js component architecture, Node.js backend development, Express.js REST APIs, and MongoDB database integration.",
    skillsLearned: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: "udemy-flutter-dev",
    title: "Full Stack Flutter Development",
    issuer: "Udemy",
    credentialUrl: "#certifications",
    description: "In-depth specialization in cross-platform mobile application engineering using Google's Flutter framework and Dart language. Covered reactive state management, mobile UI design, REST API consumption, and application compilation in Android Studio.",
    skillsLearned: ["Flutter", "Dart", "Android Studio", "State Management", "Cross-Platform UI"]
  }
];

export const EDUCATION = [
  {
    degree: "Computer Engineering",
    institution: "Indus University, Ahmedabad",
    duration: "2023 – 2027",
    highlights: [
      "Rigorous coursework covering Data Structures & Algorithms, Database Management Systems (DBMS), Data Mining, Probability & Statistics, and Machine Learning",
      "Hands-on project work in data analysis, full-stack systems, and cross-platform mobile engineering",
      "Active participant in technical problem-solving and software engineering projects"
    ]
  }
];

export const CAREER_JOURNEY: JourneyMilestone[] = [
  {
    period: "2023 – Present",
    title: "Computer Engineering Academic Foundations",
    subtitle: "Indus University",
    description: "Focused on core computing fundamentals, algorithmic problem solving, database architecture, and discrete mathematics. Developed a strong foundation in structured software development and analytical thinking.",
    technologies: ["C", "C++", "Java", "Data Structures", "DBMS", "Discrete Math"]
  },
  {
    period: "2023 – 2024",
    title: "Data Analytics & Exploratory Data Science",
    subtitle: "Self-Driven & Project Milestones",
    description: "Mastered data cleaning, manipulation, and statistical exploratory analysis using Python (Pandas, NumPy) and SQL. Built machine learning models for housing regression and predictive classification.",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Excel"]
  },
  {
    period: "2024",
    title: "Full-Stack Web & Cross-Platform Development",
    subtitle: "Udemy Certified Training & Practical Projects",
    description: "Completed comprehensive certifications in Full-Stack Web Development and Flutter Development. Built responsive web applications and mobile cinema booking systems with persistent databases.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Flutter", "Dart", "Android Studio"]
  },
  {
    period: "2024 – 2025",
    title: "Smart Systems, BI & Intelligent Solutions",
    subtitle: "Advanced Projects & Applied Analytics",
    description: "Engineered multimodal mobility concepts for smart city transportation, developed interactive Power BI reporting workflows, and refined predictive algorithms for real-world impact.",
    technologies: ["Power BI", "Smart Mobility", "Predictive Analytics", "System Architecture", "Git/GitHub"]
  }
];
