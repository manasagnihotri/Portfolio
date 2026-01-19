// Projects Model - Contains projects data
const projectsModel = {
  projects: [
    {
      title: "PharmaVerse",
      subtitle: "Automated Drug Monitoring System • Jan 2025 – May 2025",
      description: "Web-scraping pipeline ingesting 120,000+ data points from pharmaceutical marketplaces with anomaly detection achieving 90%+ accuracy in flagging counterfeit products.",
      skills: ["Python", "Scrapy", "Flask", "ML", "Plotly"]
    },
    {
      title: "Wearable Thyroid Detector for Health Monitoring",
      subtitle: "Biomedical IoT Project • Jul 2024 – Nov 2024",
      description: "Built end-to-end data pipeline collecting multimodal sensor data (ECG, temperature, ultrasonic) using ESP-32 coating. Structured time-series datasets for ML applications. Trained ensemble models (Random Forest, XGBoost) achieving 95.2% accuracy through hyperparameter tuning, feature selection, and k-fold cross-validation.",
      skills: ["IoT", "ESP-32", "ECG", "Sensor Data", "XGBoost", "Machine Learning", "Healthcare"]
    },
    {
      title: "Predicting Mobility in Parkinson's",
      subtitle: "Healthcare ML Research • Feb 2024 – May 2024 • Published",
      description: "Led data science team building predictive framework achieving 98.92% accuracy using clinical and sensor data with SHAP interpretability analysis.",
      skills: ["Python", "Scikit-Learn", "SHAP", "Healthcare", "Research"]
    }
  ],

  getProjects() {
    return this.projects;
  },

  getProjectById(index) {
    return this.projects[index];
  },

  filterBySkill(skill) {
    return this.projects.filter(project => project.skills.includes(skill));
  }
};

export default projectsModel;
