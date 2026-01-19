// Experience Model - Contains experience data
const experienceModel = {
  experiences: [
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

