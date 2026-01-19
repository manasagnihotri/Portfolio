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
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "All India Council for Technical Education (AICTE) • Chennai, India",
      period: "Jul 2024 – Sep 2024",
      achievements: [
        "Designed scalable ETL pipeline on AWS (S3 & Redshift) managing 20+ years of fishery data",
        "Reduced transformation time by 60% through optimized ingestion workflows",
        "Architected dimensional data models for cross-functional sustainability reporting"
      ]
    },
    {
      title: "AI & ML Intern",
      company: "Nexus Info • Coimbatore, India",
      period: "Dec 2023 – Mar 2024",
      achievements: [
        "Developed sales forecasting model using Multiple Linear Regression with 98.5% accuracy",
        "Performed EDA on revenue and seasonality data to inform model architecture",
        "Deployed production model with cross-validation and monitoring via PHP integration"
      ]
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
