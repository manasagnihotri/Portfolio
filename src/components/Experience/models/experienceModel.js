// Experience Model - Contains experience data
const experienceModel = {
  experiences: [
    {
      title: "Research Assistant - Arinzeh Lab",
      company: "Columbia University Irving Medical Center • New York City, NY",
      period: "Jan 2026 – Present",
      achievements: [
        "Architect an End-to-End NLP Pipeline capable of programmatically scanning thousands of scientific papers to synthesize biological insights that would take human researchers years to manually review.",
        "Identify Novel Therapeutic Targets for Osteoarthritis (OA) by extracting complex relationships between genes, proteins, and cartilage regeneration pathways from unstructured text.",
        "Bridge \"Dry-Lab\" and \"Wet-Lab\" Research by translating high-level biological questions into technical data mining strategies to inform physical biomaterial experiments."
      ],
      detailedDescription: "In collaboration with the Columbia Department of Biomedical Engineering, this project focuses on accelerating the discovery of treatments for Osteoarthritis (OA), a degenerative joint disease. The primary challenge is the overwhelming volume of scientific literature; my role is to use Text Mining and Knowledge Base Construction to identify novel therapeutic targets that can be used in the lab's cartilage regeneration strategies.\n\nI developed a pipeline to automate Information Retrieval from the PubMed/PMC databases, followed by Named Entity Recognition (NER) to tag specific biological entities like chondrocytes and signaling proteins. By utilizing specialized transformer models, I perform Relationship Extraction to determine the directionality of biological effects (e.g., whether a protein inhibits or promotes cartilage decay). The final output is a structured knowledge base that provides the lab with a prioritized list of targets for experimental validation in their scaffold and biomaterial studies.",
      technologies: ["NLP", "Large Language Models (LLMs)", "BioBERT", "scispaCy", "SQL", "ETL", "Data Modeling", "Cloud Infrastructure", "Knowledge Graphs", "Bio-Entity Extraction"]
    },
    {
      title: "Teaching Assistant II - GIS and Spatial Analysis",
      company: "QMSS Department, Columbia University • New York City, NY",
      period: "Jan 2026 – Present",
      achievements: [
        "Facilitate technical labs for a graduate-level cohort, guiding students through complex spatial data workflows and the implementation of Geographic Information Systems (GIS) in social science research.", 
        "Mentor students in advanced spatial modeling, providing hands-on support for Exploratory Spatial Data Analysis (ESDA), spatially weighted regressions, and space-time models.", 
        "Optimize student learning by troubleshooting R-based spatial packages and clarifying data binning methodologies such as Quantile and Jenks Natural Breaks."
      ],
      detailedDescription: "As a Teaching Assistant for this graduate course, I support the instruction of advanced spatial statistics and GIS techniques applied to social demography and public policy. The course bridges the gap between traditional social science and geographic data science, focusing on how location-based data can reveal patterns in social phenomena.\n\n My role involves assisting students in mastering the transition from raw spatial data to sophisticated visualizations, including choropleth maps, cartograms, and micromaps. I provide technical guidance on building and managing spatial databases and help students implement complex statistical models that account for spatial autocorrelation and temporal shifts. By facilitating weekly labs, I ensure students can independently use open-source software to perform high-level exploratory data analysis and predictive modeling on real-world social datasets",
    },
    {
      title: "Teaching Assistant - Modeling and Performance Evaluation",
      company: "Computer Science Department, Columbia University • New York City, NY",
      period: "Sept 2025 – Dec 2025",
      achievements: [
        "Managed academic operations and grading for a cohort of 60 students, ensuring the application of system modeling concepts.",
        "Facilitated technical problem-solving sessions focusing on system architecture efficiency and performance optimization.",
        "Evaluated complex data models to identify system bottlenecks, a skill directly transferable to optimizing municipal service delivery and government operations."
      ],
      detailedDescription: "In this role, I served as a Teaching Assistant for a core graduate course focused on the mathematical modeling of systems where uncertainty plays a critical role. The course emphasizes the use of stochastic processes to evaluate the performance of industrial and service systems.\n\nMy responsibilities included supporting students as they navigated complex topics such as discrete and continuous-time Markov chains, birth-death processes, and various queueing models (M/M/1, M/G/1). I was responsible for grading weekly assignments, ensuring that students correctly applied performance metrics like throughput, utilization, and mean waiting times to evaluate system efficiency. By acting as a bridge between theoretical probability and practical performance evaluation, I helped students develop the analytical tools necessary for operations research and systems engineering.",
    },
    {
      title: "Data Analyst Intern",
      company: "Sidhman Technologies • Nashik, India",
      period: "Jan 2025 – Apr 2025",
      achievements: [
        "Automated end-to-end ranking of 1,600+ mutual fund datasets, cutting evaluation time by 40%",
        "Optimized SQL queries for volatility/Sharpe ratios, improving portfolio selection accuracy by 25%",
        "Engineered structured data models maintaining integrity across automated dashboards"
      ],
      detailedDescription: "At Sidhman Technologies, I worked on building a comprehensive mutual fund ranking system. This involved automating the entire data processing pipeline that handled over 1,600 different mutual fund datasets. The system analyzed key financial metrics like volatility and Sharpe ratios to rank funds, enabling faster decision-making for investors.",
      technologies: ["Python", "SQL", "Data Analysis", "Dashboard Design", "Financial Metrics", "Automation"]
    },
    {
      title: "Data Engineer Intern",
      company: "All India Council for Technical Education (AICTE) • Chennai, India",
      period: "Jul 2024 – Sep 2024",
      achievements: [
        "Designed scalable ETL pipeline on AWS (S3 & Redshift) managing 20+ years of fishery data",
        "Reduced transformation time by 60% through optimized ingestion workflows",
        "Architected dimensional data models for cross-functional sustainability reporting"
      ],
      detailedDescription: "During my internship at AICTE, I architected and deployed a scalable ETL (Extract, Transform, Load) pipeline on AWS cloud infrastructure. The system handled over 20 years of fishery industry data, processing it efficiently from raw collection through structured storage. I optimized the data transformation workflows significantly, enabling faster insights for sustainability initiatives.",
      technologies: ["AWS", "S3", "Redshift", "ETL", "Data Modeling", "Cloud Infrastructure", "SQL"]
    },
    {
      title: "AI & ML Intern",
      company: "Nexus Info • Coimbatore, India",
      period: "Dec 2023 – Mar 2024",
      achievements: [
        "Developed sales forecasting model using Multiple Linear Regression with 98.5% accuracy",
        "Performed EDA on revenue and seasonality data to inform model architecture",
        "Deployed production model with cross-validation and monitoring via PHP integration"
      ],
      detailedDescription: "At Nexus Info, I built an end-to-end sales forecasting solution using machine learning techniques. I started with exploratory data analysis to understand revenue patterns and seasonality trends. Then developed a Multiple Linear Regression model that achieved exceptional accuracy, making it production-ready for real business decision-making.",
      technologies: ["Python", "Machine Learning", "Statistical Analysis", "Regression Models", "PHP", "Production Deployment", "Data Visualization"]
    }
  ],

  getExperiences() {
    return this.experiences;
  },

  getExperienceById(index) {
    return this.experiences[index];
  }
};

export default experienceModel;

