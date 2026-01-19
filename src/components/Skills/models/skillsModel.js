// Skills Model - Contains skills data
const skillsModel = {
  skillCategories: [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "Pandas", "NumPy", "Flask", "SQL", "MySQL", "C++", "R"]
    },
    {
      title: "Data Engineering & Cloud",
      skills: ["ETL", "AWS", "S3", "Redshift", "Data Modeling", "Web Scraping", "Git"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["Scikit-Learn", "Feature Engineering", "LLMs", "RAG", "Causal Inference", "SHAP"]
    },
    {
      title: "Analytics & Visualization",
      skills: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn", "Excel"]
    }
  ],

  getSkillCategories() {
    return this.skillCategories;
  },

  getSkillsByCategory(category) {
    const found = this.skillCategories.find(cat => cat.title === category);
    return found ? found.skills : [];
  },

  getAllSkills() {
    return this.skillCategories.flatMap(cat => cat.skills);
  }
};

export default skillsModel;
