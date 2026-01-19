// Education Model - Contains education data
const educationModel = {
  educationList: [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Columbia University',
      period: 'AUG 2025 - DEC 2026',
      description: 'Specializing in machine learning, causal inference, and data engineering'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'SRM Institute of Science and Technology',
      period: '2021 - 2025',
      description: 'Focus on data structures, algorithms, and full-stack development'
    }
  ],

  getEducation() {
    return this.educationList;
  },

  addEducation(education) {
    this.educationList.push(education);
  }
};

export default educationModel;
