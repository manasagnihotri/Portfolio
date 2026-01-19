// Projects Model - Contains projects data
const projectsModel = {
  projects: [
    {
      title: "PharmaVerse",
      category: "Data Engineering / AI",
      subtitle: "Automated Drug Monitoring System • Jan 2025 – May 2025",
      description: "Web-scraping pipeline ingesting 120,000+ data points from pharmaceutical marketplaces with anomaly detection achieving 90%+ accuracy in flagging counterfeit products.",
      skills: ["Python", "Scrapy", "Flask", "ML", "Plotly"],
      detailedDescription: "PharmaVerse is a sophisticated web-scraping and anomaly detection system designed to monitor pharmaceutical marketplaces at scale. The system continuously collects data from multiple pharmaceutical sources, processes over 120,000 data points, and uses machine learning algorithms to identify potentially counterfeit or suspicious products. This helps ensure drug authenticity and safety in the supply chain.",
      outcomes: [
        "Ingests and processes 120,000+ pharmaceutical data points",
        "Achieves 90%+ accuracy in counterfeit product detection",
        "Automated daily monitoring and alerts",
        "Scalable architecture supporting multiple data sources",
        "Real-time anomaly detection and reporting"
      ]
    },
    {
      title: "Wearable Thyroid Detector for Health Monitoring",
      category: "HealthTech / IoT",
      subtitle: "Biomedical IoT Project • Jul 2024 – Nov 2024",
      description: "Built end-to-end data pipeline collecting multimodal sensor data (ECG, temperature, ultrasonic) using ESP-32. Trained ensemble models achieving 95.2% accuracy through hyperparameter tuning and k-fold cross-validation.",
      skills: ["IoT", "ESP-32", "ECG", "XGBoost", "Machine Learning"],
      detailedDescription: "This wearable device project combines hardware and software to detect thyroid conditions through multiple sensor modalities. The ESP-32 microcontroller collects ECG signals, temperature readings, and ultrasonic measurements. I developed a complete data engineering pipeline to structure this multimodal time-series data, then trained sophisticated ensemble machine learning models to predict thyroid dysfunction with clinical-grade accuracy.",
      outcomes: [
        "95.2% accuracy in thyroid condition prediction",
        "Multimodal sensor data integration (ECG, temperature, ultrasonic)",
        "Comprehensive feature engineering and selection",
        "Ensemble model approach (Random Forest + XGBoost)",
        "Validated through k-fold cross-validation",
        "Potential for wearable medical device application"
      ]
    },
    {
      title: "Predicting Mobility in Parkinson's",
      category: "Healthcare ML / Research",
      subtitle: "Healthcare ML Research • Feb 2024 – May 2024 • Published",
      description: "Led data science team building predictive framework achieving 98.92% accuracy using clinical and sensor data with SHAP interpretability analysis.",
      skills: ["Python", "Scikit-Learn", "SHAP", "Healthcare"],
      detailedDescription: "This research project focused on predicting mobility limitations in Parkinson's disease patients using advanced machine learning and clinical data. Our team combined clinical assessments with sensor-based measurements to build a predictive model. We achieved exceptional accuracy while maintaining interpretability through SHAP (SHapley Additive exPlanations) analysis, enabling clinicians to understand model predictions.",
      outcomes: [
        "98.92% accuracy in mobility prediction",
        "Published research findings in peer-reviewed venue",
        "Leadership of cross-functional data science team",
        "SHAP-based model interpretability for clinical acceptance",
        "Integration of clinical and sensor modalities",
        "Potential to improve patient care planning"
      ]
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

