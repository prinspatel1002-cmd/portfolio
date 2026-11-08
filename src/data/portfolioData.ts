export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'fullstack' | 'mobile' | 'data';
  categoryLabel: string;
  summary: string;
  featured: boolean;
  image?: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  hasInteractiveDemo?: boolean;
  interactiveType?: 'housing' | 'mobility' | 'seatpicker' | 'sales';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; note?: string }[];
}

export const PERSONAL_INFO = {
  name: "Prins Patel",
  tagline: "Software Developer & AI/ML Engineer",
  subheading: "Computer Engineering Student building data-driven AI systems, scalable full-stack web applications, and intuitive cross-platform mobile apps.",
  location: "Ahmedabad, Gujarat, India",
  email: "prinspatel1002@gmail.com",
  altEmail: "princepatelaaaa@gmail.com",
  eduEmail: "prinspatel.23.cse@iite.indusuni.ac.in",
  phone: "+91 6351668040",
  whatsappUrl: "https://wa.me/916351668040?text=Hi%20Prins,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
  github: "https://github.com/Prince-0210",
  githubUser: "Prince-0210",
  linkedin: "https://www.linkedin.com/in/prins-patel-39046627b/",
  profileImage: "./profile.jpg",
  resumePdf: "./Prins_Patel_Resume.pdf",
  cgpa: "8.89 / 10",
  expectedGraduation: "2027",
  university: "Indus University, Ahmedabad",
  openForWork: true,
  bio: "Passionate Computer Engineering student with strong hands-on expertise in machine learning, full-stack development, and data visualization. Experienced in architecting end-to-end ML pipelines, responsive web applications, and Flutter mobile apps. Always driven to transform complex data into actionable real-world insights."
};

export const HIGHLIGHT_STATS = [
  { label: "Current CGPA", value: "8.89 / 10", sub: "Indus University (B.Tech CSE)" },
  { label: "ML Model Accuracy", value: "88% / 0.83", sub: "Random Forest & Tuned XGBoost" },
  { label: "Production Projects", value: "6+", sub: "AI, Full-Stack & Flutter Apps" },
  { label: "Certifications", value: "3+", sub: "AWS Academy ML, Udemy, Indus" }
];

export const PROJECTS: Project[] = [
  {
    id: "smart-city-mobility",
    title: "AI-Powered Smart City Mobility & Safety Platform",
    tagline: "Unified intelligent multimodal transport & safety system for smart cities",
    category: "ai",
    categoryLabel: "AI & Smart Systems",
    summary: "An intelligent platform unifying Ahmedabad's public buses, metro, ride-shares, and parking with AI-driven ETA predictions, passenger overcrowding detection, and an emergency response dashboard.",
    featured: true,
    image: "./cleaned_AI-Powered-Smart-City-Mobility-and-Safety-Platform.pdf",
    metrics: [
      { label: "Data Ingestion", value: "6 Sources" },
      { label: "Safety Alerting", value: "< 2s Real-time" },
      { label: "Core AI", value: "LLM + Telemetry" }
    ],
    tags: ["Artificial Intelligence", "Python", "LLMs", "GPS Telemetry", "Operations Dashboard", "Smart Mobility"],
    keyFeatures: [
      "Real-time vehicle GPS telemetry with accurate AI-estimated arrival times (ETAs)",
      "Sensor fusion & demand forecasting to proactively alert against route overcrowding",
      "Geofenced location-aware citizen emergency assistant and quick-response dispatch",
      "Comprehensive Authority & Operations command center with live heatmaps and KPIs"
    ],
    githubUrl: "https://github.com/Prince-0210",
    hasInteractiveDemo: true,
    interactiveType: "mobility"
  },
  {
    id: "california-housing",
    title: "California Housing Intelligence & Price Predictor",
    tagline: "End-to-end ML pipeline with spatial 3D GIS & scenario simulator",
    category: "ai",
    categoryLabel: "Machine Learning",
    summary: "Engineered a production-ready machine learning pipeline outperforming baseline models with tuned XGBoost, comprehensive domain feature engineering, and an interactive 3D spatial interface.",
    featured: true,
    image: "./california_housing_showcase.png",
    metrics: [
      { label: "XGBoost R²", value: "0.8318 (+24.4%)" },
      { label: "Mean Absolute Error", value: "15.18%" },
      { label: "Outliers Filtered", value: "1,071 Anomalies" }
    ],
    tags: ["Python", "XGBoost", "Scikit-Learn", "Streamlit", "Pydeck 3D GIS", "Altair", "Pandas"],
    keyFeatures: [
      "Domain Feature Engineering synthesizing RoomsPerPerson, BedsToRoomsRatio, and Coastal Proximity",
      "Skew & Outlier mitigation using IQR filtering and log1p transforms on heavy-tailed distributions",
      "Gradient Boosted Decision Trees (Tuned XGBoost) evaluated against baseline Ridge Regression",
      "Interactive Geospatial UI with real-time INR currency valuation and scenario simulator"
    ],
    githubUrl: "https://github.com/Prince-0210/California-Housing-Price-Predictor",
    hasInteractiveDemo: true,
    interactiveType: "housing"
  },
  {
    id: "sales-analytics-dashboard",
    title: "Enterprise Sales & Customer Analytics Dashboard",
    tagline: "Interactive BI dashboard uncovering revenue trends & purchasing behaviors",
    category: "data",
    categoryLabel: "Data Analytics & BI",
    summary: "Built an interactive executive dashboard to evaluate business sales velocity, regional profitability, customer cohort churn, and product lifecycle margins using real-world enterprise datasets.",
    featured: true,
    metrics: [
      { label: "Visual Reports", value: "12+ KPIs" },
      { label: "Query Engine", value: "Optimized SQL" },
      { label: "Accuracy", value: "100% Validated" }
    ],
    tags: ["Python", "Power BI", "Tableau", "SQL", "Pandas", "Excel", "Data Modeling"],
    keyFeatures: [
      "Automated data extraction, cleaning, and normalization across multi-table relational datasets",
      "Identified critical seasonal revenue spikes, customer acquisition trends, and churn patterns",
      "Designed dynamic drill-downs for product categories, sales territories, and discount impacts",
      "Delivered executive-level decision matrices supporting inventory and marketing optimization"
    ],
    githubUrl: "https://github.com/Prince-0210",
    hasInteractiveDemo: true,
    interactiveType: "sales"
  },
  {
    id: "movie-ticket-booking",
    title: "Cross-Platform Movie Ticket Booking App",
    tagline: "Seamless mobile cinema booking powered by Flutter & Firebase",
    category: "mobile",
    categoryLabel: "Mobile Development",
    summary: "Designed and engineered a cross-platform mobile application for cinema ticketing featuring real-time seat matrix selection, dynamic pricing, and cloud database synchronization.",
    featured: false,
    metrics: [
      { label: "Platforms", value: "Android & iOS" },
      { label: "Database", value: "Realtime Firebase" },
      { label: "UI Response", value: "60 FPS Native" }
    ],
    tags: ["Flutter", "Dart", "Firebase", "State Management", "REST APIs", "Mobile UI"],
    keyFeatures: [
      "Unified codebase delivering smooth 60 FPS performance on both Android and iOS devices",
      "Interactive visual theater seating layout with instant seat locking and categorization (VIP/Standard)",
      "Secure user authentication and ticket history synced in real-time via Google Firebase",
      "Intuitive checkout simulation with dynamic discount code application and digital passes"
    ],
    githubUrl: "https://github.com/Prince-0210",
    hasInteractiveDemo: true,
    interactiveType: "seatpicker"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Engine",
    tagline: "Machine learning classifier identifying at-risk subscription customers",
    category: "ai",
    categoryLabel: "Machine Learning",
    summary: "Constructed a machine learning classification workflow to predict customer attrition and evaluate retention interventions before churn occurs.",
    featured: false,
    metrics: [
      { label: "ROC-AUC", value: "0.86" },
      { label: "Algorithm", value: "Random Forest" },
      { label: "Pipeline", value: "Scikit-Learn" }
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SQL", "Predictive Modeling"],
    keyFeatures: [
      "Comprehensive exploratory data analysis uncovering correlation between tenure, service types, and churn",
      "Trained ensemble models (Random Forest & Logistic Regression) with cross-validation",
      "Precision-recall tuning to maximize retention ROI for marketing interventions"
    ],
    githubUrl: "https://github.com/Prince-0210"
  },
  {
    id: "student-helpdesk-portal",
    title: "Full-Stack Student Help Desk System",
    tagline: "Academic query routing & ticket management portal",
    category: "fullstack",
    categoryLabel: "Full-Stack Web",
    summary: "A database-driven web platform allowing university students to lodge grievances, track resolving department progress, and access administrative resources.",
    featured: false,
    metrics: [
      { label: "Tech Stack", value: "MERN Stack" },
      { label: "Response Rate", value: "Automated SLAs" },
      { label: "Security", value: "JWT Auth" }
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    keyFeatures: [
      "Role-based access control for students, department faculty, and administrative chairs",
      "Real-time ticket status progression from open, in-review, to resolution confirmation",
      "File attachment support for academic notices and submission verifications"
    ],
    githubUrl: "https://github.com/Prince-0210"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 92, note: "Machine Learning, Pandas, Automation" },
      { name: "JavaScript / TypeScript", level: 88, note: "ES6+, Modern React, Node.js" },
      { name: "Dart", level: 85, note: "Flutter Mobile Development" },
      { name: "SQL", level: 88, note: "Complex queries, Window functions, Joins" },
      { name: "Java", level: 80, note: "OOP, Data Structures" },
      { name: "C", level: 78, note: "Systems programming fundamentals" }
    ]
  },
  {
    title: "AI, Machine Learning & Data",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-Learn & XGBoost", level: 90, note: "Regression, Classification, Tuning" },
      { name: "Pandas & NumPy", level: 94, note: "Data wrangling, cleaning & feature engineering" },
      { name: "Data Visualization", level: 92, note: "Matplotlib, Seaborn, Altair, Pydeck 3D" },
      { name: "NLP & LLM Applications", level: 82, note: "AWS NLP Badge, Prompt Engineering" },
      { name: "Exploratory Data Analysis (EDA)", level: 92, note: "Distribution testing, outlier mitigation" },
      { name: "Power BI & Tableau", level: 85, note: "Interactive dashboards & KPI reporting" }
    ]
  },
  {
    title: "Full-Stack Web & Mobile",
    iconName: "Layout",
    skills: [
      { name: "React.js & Vite", level: 90, note: "Hooks, Context, Component architecture" },
      { name: "Flutter", level: 86, note: "Cross-platform Android & iOS apps" },
      { name: "Node.js & Express.js", level: 84, note: "RESTful API development, Middleware" },
      { name: "Tailwind CSS & CSS3", level: 92, note: "Responsive UI, Dark Mode, Animations" },
      { name: "Flask & Django", level: 80, note: "Python backend services & ML serving" },
      { name: "HTML5 & Modern Web Standards", level: 95, note: "Semantic, accessible, SEO optimized" }
    ]
  },
  {
    title: "Databases, Cloud & Dev Tools",
    iconName: "Server",
    skills: [
      { name: "MongoDB & Firebase", level: 86, note: "NoSQL, Realtime DB, Firestore Auth" },
      { name: "MySQL", level: 85, note: "Relational database schema design" },
      { name: "Git & GitHub", level: 90, note: "Version control, branching, PRs, Actions" },
      { name: "AWS Cloud Fundamentals", level: 80, note: "Academy certified training" },
      { name: "VS Code & Postman", level: 94, note: "Debugging, API profiling, extensions" },
      { name: "Excel & Advanced Sheets", level: 88, note: "VLOOKUP, Pivot tables, financial modeling" }
    ]
  }
];

export const EDUCATION_LIST = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Engineering",
    institution: "Indus University, Ahmedabad",
    period: "2023 – 2027",
    score: "CGPA: 8.89 / 10 (Current)",
    highlights: [
      "Core Coursework: Machine Learning, Data Mining, Data Visualization, Database Management Systems (DBMS), Probability & Statistics, Data Structures & Algorithms",
      "Hands-on Project Lead for Ahmedabad Smart City Mobility System and AI projects",
      "Consistently maintaining top academic quartile ranking"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Class XII (Science Stream)",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2021 – 2023",
    score: "Percentage: 71.8%",
    highlights: [
      "Rigorous focus on Mathematics, Physics, and Computer Science foundation"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC) – Class X",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "Completed 2021",
    score: "Percentage: 83.60%",
    highlights: [
      "Strong academic distinction with excellence in Mathematics and Sciences"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "AWS Academy Graduate – Machine Learning for Natural Language Processing",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    badgeCode: "Badge20260902-20-pr4184",
    description: "Trained on cloud machine learning pipelines, NLP architectures, transformer concepts, and model deployment on AWS."
  },
  {
    title: "Full Stack Web Development Professional Certification",
    issuer: "Udemy",
    date: "2024",
    badgeCode: "UC-WebDev",
    description: "Comprehensive front-end and back-end web development covering HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB."
  },
  {
    title: "Full Stack Flutter Mobile Development Certification",
    issuer: "Indus University",
    date: "2024",
    badgeCode: "IU-Flutter-Dev",
    description: "Specialized certification in building cross-platform production apps using Dart, Flutter framework, Firebase integrations, and state management."
  }
];
