// About Model - Contains about section data
const aboutModel = {
  description: {
    intro: "I build computational systems to solve high-stakes challenges in biomedical discovery and infrastructure engineering. I specialize in converting complex, unstructured data into optimized, scalable solutions."
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
      icon: "🧬",
      title: "Biotech Innovation",
      description: "Architecting NLP pipelines and LLMs to identify therapeutic targets in Dr. Arinzeh's BME lab"
    },
    {
      icon: "🗺️",
      title: "Spatial Systems",
      description: "GIS and Spatial Analysis to optimize mobility and built environment solutions"
    },
    {
      icon: "⚙️",
      title: "Engineering Optimization",
      description: "Stochastic Modeling and Causal Inference for automotive and tunneling sectors"
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
