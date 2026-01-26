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
      category: "HealthTech / IoT / Full-Stack",
      subtitle: "Biomedical IoT Project • Jul 2024 – Nov 2024",
      description: "Developed a comprehensive full-stack application with React frontend for real-time thyroid health monitoring. Built end-to-end data pipeline collecting multimodal sensor data (ECG, temperature, ultrasonic) using ESP-32 with ensemble models achieving 95.2% accuracy.",
      skills: ["React", "IoT", "ESP-32", "ECG", "XGBoost", "Machine Learning"],
      detailedDescription: "This wearable device project combines hardware, backend, and a modern React frontend to detect thyroid conditions through multiple sensor modalities. The ESP-32 microcontroller collects ECG signals, temperature readings, and ultrasonic measurements. I developed a complete data engineering pipeline to structure this multimodal time-series data and trained sophisticated ensemble machine learning models to predict thyroid dysfunction with clinical-grade accuracy. The React frontend provides an intuitive dashboard for real-time health monitoring, data visualization, and personalized insights.",
      outcomes: [
        "95.2% accuracy in thyroid condition prediction",
        "Responsive React frontend for health monitoring dashboard",
        "Real-time data visualization and analytics",
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
    },
    {
      title: "Autonomous Vehicle Management",
      category: "Mobility / Optimization / Simulation",
      subtitle: "Fleet Optimization Project • Jun 2024 – Sep 2024",
      description: "Fleet management system leveraging spatial analytics and optimization algorithms for autonomous vehicles. Achieved efficient routing and resource allocation using Python, GIS, and simulation frameworks.",
      skills: ["Python", "GIS", "Simulation", "Optimization", "Routing"],
      detailedDescription: "Developed a scalable fleet management platform for autonomous vehicles, integrating spatial data analysis and advanced optimization techniques. The system simulates real-world traffic scenarios and dynamically allocates resources to maximize efficiency and minimize costs.",
      outcomes: [
        "Efficient routing and resource allocation",
        "Integration of GIS and simulation frameworks",
        "Scalable architecture for large fleets",
        "Improved operational efficiency in test scenarios"
      ]
    },
    {
      title: "Heart Disease Detection ML",
      category: "Healthcare / Machine Learning",
      subtitle: "Clinical ML Project • Mar 2024 – May 2024",
      description: "Developed machine learning models to predict heart disease risk using clinical datasets. Achieved high accuracy with ensemble methods and feature engineering in Python (scikit-learn, pandas).",
      skills: ["Python", "scikit-learn", "pandas", "Ensemble Methods", "Feature Engineering"],
      detailedDescription: "Built and validated predictive models for heart disease detection using real-world clinical data. Applied feature engineering and ensemble learning to improve accuracy and reliability, supporting early diagnosis and intervention.",
      outcomes: [
        "High accuracy in heart disease prediction",
        "Robust feature engineering pipeline",
        "Ensemble model approach",
        "Potential for clinical deployment"
      ]
    },
    {
      title: "Tic-Tac-Toe Mini Project",
      category: "Games / Python / AI",
      subtitle: "Classic Game Project • Oct 2023",
      description: "Classic Tic-Tac-Toe game implemented in Python with a simple CLI interface and basic AI opponent. Demonstrates game logic and user interaction.",
      skills: ["Python", "Game Logic", "CLI", "AI"],
      detailedDescription: "Developed a command-line Tic-Tac-Toe game featuring a basic AI opponent. The project showcases fundamental game logic, user input handling, and simple AI strategies.",
      outcomes: [
        "Functional CLI game with AI opponent",
        "Demonstrates core game logic",
        "User-friendly interface",
        "Educational value for beginners"
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

