// About Model - Contains about section data
const aboutModel = {
  description: {
    intro: "I'm a data science and machine learning engineer with a passion for building intelligent systems that solve real-world problems. Currently pursuing my Master's in Data Science at Columbia University while conducting research on causal inference and its applications to neural networks.",
    expertise: "My expertise spans full-stack data engineering—from designing scalable ETL pipelines on AWS to developing production-grade ML models. I'm particularly interested in healthcare AI, causal reasoning, and mechanistic interpretability."
  },

  education: [
    {
      degree: "Master of Science in Data Science",
      institution: "Columbia University",
      period: "Aug 2025 – Dec 2026"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "SRM Institute of Science and Technology",
      period: "2021 - 2025"
    }
  ],

  highlights: [
    {
      icon: "🚀",
      title: "Data Engineering",
      description: "Designed scalable ETL pipelines on AWS (S3, Redshift) processing 20+ years of data"
    },
    {
      icon: "🧠",
      title: "ML & AI",
      description: "Developed models with 98%+ accuracy for healthcare and financial forecasting"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Built real-time dashboards and monitoring systems for regulatory compliance"
    }
  ],

  getAboutData() {
    return {
      description: this.description,
      education: this.education,
      highlights: this.highlights
    };
  }
};

export default aboutModel;
