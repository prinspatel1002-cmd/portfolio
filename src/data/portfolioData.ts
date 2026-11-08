export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'bi' | 'predictive' | 'sql' | 'spatial';
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
  interactiveType?: 'housing' | 'mobility' | 'seatpicker' | 'sales' | 'churn';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; note?: string }[];
}

export const PERSONAL_INFO = {
  name: "Prins Patel",
  tagline: "Data Analyst & Business Intelligence Specialist",
  subheading: "Computer Engineering Student specializing in Python, SQL, Power BI, Advanced Excel, and Predictive Machine Learning. Passionate about uncovering hidden revenue opportunities, optimizing KPIs, and translating complex data into actionable executive insights.",
  location: "Ahmedabad, Gujarat, India",
  email: "prinspatel1002@gmail.com",
  altEmail: "princepatelaaaa@gmail.com",
  eduEmail: "prinspatel.23.cse@iite.indusuni.ac.in",
  phone: "+91 6351668040",
  whatsappUrl: "https://wa.me/916351668040?text=Hi%20Prins,%20I%20saw%20your%20Data%20Analyst%20portfolio%20and%20would%20love%20to%20connect!",
  github: "https://github.com/Prince-0210",
  githubUser: "Prince-0210",
  linkedin: "https://www.linkedin.com/in/prins-patel-39046627b/",
  profileImage: "./profile.jpg",
  resumePdf: "./Prins_Patel_Resume.pdf",
  cgpa: "8.89 / 10",
  expectedGraduation: "2027",
  university: "Indus University, Ahmedabad",
  openForWork: true,
  bio: "Aspiring Data Analyst with a rigorous Computer Engineering foundation from Indus University. Proven expertise in data extraction, data cleaning, exploratory data analysis (EDA), statistical modeling, and interactive dashboard creation using Power BI, SQL, Python, and Excel. Skilled in transforming unstructured business datasets into high-impact visual intelligence."
};

export const HIGHLIGHT_STATS = [
  { label: "Academic CGPA", value: "8.89 / 10", sub: "Indus University (DBMS & Data Mining)" },
  { label: "SQL & Analytics Pipelines", value: "100+", sub: "Complex queries, window functions & CTEs" },
  { label: "BI Dashboards & Reports", value: "12+", sub: "Power BI, Tableau, Excel & Python" },
  { label: "Predictive Model Accuracy", value: "88% / 0.83", sub: "Tuned XGBoost & Customer Retention Models" }
];

export const PROJECTS: Project[] = [
  {
    id: "sales-analytics-dashboard",
    title: "Executive Sales & Business Intelligence Dashboard",
    tagline: "End-to-end revenue analytics, customer segmentation & margin optimization",
    category: "bi",
    categoryLabel: "Power BI & Business Intelligence",
    summary: "Architected a comprehensive executive BI dashboard analyzing sales performance, regional profitability, customer cohort churn, and product lifecycle margins using real-world enterprise transaction data.",
    featured: true,
    metrics: [
      { label: "Executive KPIs", value: "12+ Dynamic Metrics" },
      { label: "Data Engine", value: "Optimized SQL + DAX" },
      { label: "Insights Accuracy", value: "100% Validated" }
    ],
    tags: ["Power BI", "SQL", "Python", "Tableau", "Pandas", "Advanced Excel", "DAX Formulas"],
    keyFeatures: [
      "Engineered automated ETL pipelines normalizing multi-table sales and customer tables",
      "Created dynamic DAX measures calculating YoY revenue velocity, gross margin variance, and moving averages",
      "Identified critical seasonal demand spikes, customer acquisition trends, and low-margin skus",
      "Formulated executive summary decks supporting inventory re-allocation and targeted discounting"
    ],
    githubUrl: "https://github.com/Prince-0210",
    hasInteractiveDemo: true,
    interactiveType: "sales"
  },
  {
    id: "california-housing",
    title: "California Real Estate Market & Econometric Valuation Engine",
    tagline: "Statistical EDA pipeline, IQR anomaly mitigation & tuned regression",
    category: "predictive",
    categoryLabel: "Statistical & Predictive Analytics",
    summary: "Engineered an end-to-end econometric regression pipeline analyzing 20,640 census records. Applied IQR anomaly filtering, domain feature synthesis, log1p transformation, and 3D geospatial mapping to outperform baseline models by +24.4%.",
    featured: true,
    image: "./california_housing_showcase.png",
    metrics: [
      { label: "XGBoost R²", value: "0.8318 (+24.4%)" },
      { label: "Mean Absolute Error", value: "15.18%" },
      { label: "Outliers Filtered", value: "1,071 Anomalies" }
    ],
    tags: ["Python", "Pandas", "EDA", "XGBoost", "Scikit-Learn", "Streamlit", "Pydeck 3D GIS", "Altair"],
    keyFeatures: [
      "Synthesized domain features: RoomsPerPerson, BedsToRoomsRatio, and Coastal Proximity index",
      "Isolated 1,071 extreme outliers using Inter-Quartile Range (IQR) and normalized heavy right-skewed targets",
      "Evaluated feature correlation heatmaps and multicollinearity matrices (VIF)",
      "Interactive 3D geospatial dashboard with live scenario simulations and real-time INR currency conversion"
    ],
    githubUrl: "https://github.com/Prince-0210/California-Housing-Price-Predictor",
    hasInteractiveDemo: true,
    interactiveType: "housing"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn & Retention Analytics System",
    tagline: "Cohort retention analysis, attrition scoring & marketing ROI modeling",
    category: "predictive",
    categoryLabel: "Customer Analytics & Churn",
    summary: "Designed an analytical retention engine evaluating subscription subscriber behavior, identifying at-risk customer cohorts, and computing personalized intervention ROI before attrition occurs.",
    featured: true,
    metrics: [
      { label: "ROC-AUC Score", value: "0.86" },
      { label: "Model Recall", value: "84% Sensitivity" },
      { label: "Data Pipeline", value: "Python + SQL" }
    ],
    tags: ["Python", "SQL", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Predictive Modeling"],
    keyFeatures: [
      "Extracted subscriber cohorts across tenure bands, payment methods, contract types, and service tickets",
      "Trained classification algorithms (Random Forest, Logistic Regression) optimized for recall to capture at-risk accounts",
      "Quantified retention campaign ROI, proving that targeted retention discounts yield +34% net lifetime value",
      "Built automated churn risk scoring engine allowing sales reps to prioritize outreach"
    ],
    githubUrl: "https://github.com/Prince-0210",
    hasInteractiveDemo: true,
    interactiveType: "churn"
  },
  {
    id: "smart-city-mobility",
    title: "Ahmedabad Smart City Multimodal Transit & Telemetry Analytics",
    tagline: "Sensor data fusion, congestion forecasting & urban mobility intelligence",
    category: "spatial",
    categoryLabel: "IoT & Telemetry Analytics",
    summary: "Aggregated real-time GPS telemetry from Ahmedabad's BRTS buses, Metro lines, and road traffic sensors to predict arrival delays, detect route overcrowding, and optimize city-wide transit dispatching.",
    featured: false,
    image: "./cleaned_AI-Powered-Smart-City-Mobility-and-Safety-Platform.pdf",
    metrics: [
      { label: "Telemetry Feeds", value: "6 Sources" },
      { label: "Congestion Alert", value: "< 2s Real-time" },
      { label: "Analytics Core", value: "Time-Series + LLM" }
    ],
    tags: ["Data Analytics", "Python", "GPS Telemetry", "Time Series", "Operations Dashboard", "Smart Mobility"],
    keyFeatures: [
      "Ingested multi-source telematics across public transit corridors with real-time ETA regression forecasting",
      "Demand heatmaps and anomaly detection for route capacity bottlenecks",
      "Geofenced citizen safety tracking and emergency response dispatch routing",
      "Executive command center visualizing city-wide ridership KPIs and historical transit trends"
    ],
    githubUrl: "https://github.com/Prince-0210",
    hasInteractiveDemo: true,
    interactiveType: "mobility"
  },
  {
    id: "movie-ticket-booking",
    title: "Cinema Seating Utilization & Box Office Mobile System",
    tagline: "Cross-platform mobile ticketing with real-time inventory synchronization",
    category: "sql",
    categoryLabel: "Mobile & Inventory Analytics",
    summary: "Engineered a cross-platform Flutter application featuring interactive cinema seat selection, dynamic price tiering (VIP vs Standard), and real-time database synchronization via Google Firebase.",
    featured: false,
    metrics: [
      { label: "Platform", value: "Flutter / Dart" },
      { label: "Sync Latency", value: "< 100ms Firebase" },
      { label: "Pricing Engine", value: "Dynamic Tiers" }
    ],
    tags: ["Flutter", "Dart", "Firebase", "Realtime DB", "State Management", "Inventory Control"],
    keyFeatures: [
      "Visual seating occupancy matrix with instantaneous seat locking to prevent double bookings",
      "Dynamic ticket pricing rules based on show timings, screen format (IMAX/3D), and seat tier",
      "User authentication and digital ticket receipt generation synced with cloud database"
    ],
    githubUrl: "https://github.com/Prince-0210",
    hasInteractiveDemo: true,
    interactiveType: "seatpicker"
  },
  {
    id: "student-helpdesk-portal",
    title: "University Help Desk & SLA Ticket Resolution Analytics",
    tagline: "Academic service grievance tracking & departmental resolution metrics",
    category: "sql",
    categoryLabel: "Operations & Service Analytics",
    summary: "Built a database-driven web platform allowing university students to lodge grievances, track resolution progress, and enable administrative heads to monitor departmental resolution SLA times.",
    featured: false,
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "SLA Tracking", value: "Automated Triggers" },
      { label: "Database", value: "MongoDB + Express" }
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL/NoSQL", "SLA Reporting"],
    keyFeatures: [
      "Role-based grievance routing with audit trails across academic departments",
      "Departmental resolution turnaround time (TAT) KPI calculation",
      "Secure authentication and automated status notifications"
    ],
    githubUrl: "https://github.com/Prince-0210"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Analysis & Business Intelligence",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI (DAX & Modeling)", level: 92, note: "Data modeling, DAX measures, drilldowns & KPI cards" },
      { name: "Advanced Excel", level: 94, note: "Pivot Tables, XLOOKUP, Index/Match, Power Query, What-If Analysis" },
      { name: "Tableau", level: 86, note: "Visual storytelling, parameters, interactive filters" },
      { name: "Exploratory Data Analysis (EDA)", level: 95, note: "Distribution profiling, skew correction, IQR outlier handling" },
      { name: "KPI Reporting & Executive Metrics", level: 90, note: "CLV, Churn, ARR, CAC, conversion funnels, margin variance" }
    ]
  },
  {
    title: "SQL & Relational Databases",
    iconName: "Database",
    skills: [
      { name: "Advanced SQL", level: 92, note: "Window functions (RANK, ROW_NUMBER, NTILE), CTEs, multi-table joins" },
      { name: "MySQL & Relational Design", level: 88, note: "Schema normalization (3NF), indexing, query optimization" },
      { name: "Database Management (DBMS)", level: 90, note: "ACID properties, transaction management, ER diagrams" },
      { name: "MongoDB & NoSQL", level: 82, note: "Document querying, aggregation pipelines, unstructured data" }
    ]
  },
  {
    title: "Python for Data Science",
    iconName: "Code2",
    skills: [
      { name: "Pandas & Data Wrangling", level: 96, note: "Data manipulation, merging, groupby aggregations, pivot tables" },
      { name: "NumPy", level: 90, note: "Vectorized array calculations, matrix operations, broadcasting" },
      { name: "Data Visualization (Seaborn/Matplotlib)", level: 92, note: "Custom statistical plots, heatmaps, subplots, palettes" },
      { name: "Spatial & 3D Analytics (Pydeck/Altair)", level: 86, note: "Geospatial layers, choropleths, 3D point cloud maps" },
      { name: "Statistical Hypothesis Testing", level: 85, note: "Probability distributions, p-values, correlation, confidence intervals" }
    ]
  },
  {
    title: "Machine Learning & Predictive Modeling",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-Learn & XGBoost", level: 90, note: "Tuned regression, classification, cross-validation, hyperparameter grid" },
      { name: "Feature Engineering", level: 92, note: "One-Hot encoding, StandardScaler, log1p transformation, interaction terms" },
      { name: "Model Evaluation & Diagnostics", level: 90, note: "ROC-AUC, RMSE, MAE, Confusion Matrix, Precision-Recall trade-off" },
      { name: "AWS Cloud ML & NLP", level: 82, note: "AWS Academy Graduate certified in ML for Natural Language Processing" }
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
      "Rigorous Analytical Coursework: Database Management Systems (DBMS), Data Mining, Data Visualization, Probability & Statistics, Machine Learning, Data Structures & Algorithms",
      "Lead Analyst for Ahmedabad Smart City Mobility telemetry project and California Real Estate pricing pipeline",
      "Consistently maintaining top academic honors ranking in engineering batch"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Class XII (Science Stream)",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2021 – 2023",
    score: "Percentage: 71.8%",
    highlights: [
      "Rigorous core curriculum in Advanced Mathematics, Statistics, Physics, and Computer Science"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC) – Class X",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "Completed 2021",
    score: "Percentage: 83.60%",
    highlights: [
      "Distinction in Mathematics and Science foundations"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "AWS Academy Graduate – Machine Learning for Natural Language Processing",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    badgeCode: "Badge20260902-20-pr4184",
    description: "Cloud-native data pipelines, transformer architectures, NLP model evaluation, and machine learning infrastructure on AWS."
  },
  {
    title: "Full Stack Web Development Professional Certification",
    issuer: "Udemy",
    date: "2024",
    badgeCode: "UC-WebDev",
    description: "Database-driven web application architecture, REST API design, MongoDB data modeling, and client-side visualization."
  },
  {
    title: "Full Stack Flutter Mobile Development Certification",
    issuer: "Indus University",
    date: "2024",
    badgeCode: "IU-Flutter-Dev",
    description: "State management, real-time Firebase cloud database synchronization, and cross-platform mobile UI engineering."
  }
];
