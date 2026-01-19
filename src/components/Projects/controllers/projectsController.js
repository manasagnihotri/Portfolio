// Projects Controller - Handles project interactions
const projectsController = {
  handleProjectClick(project) {
    console.log('Project clicked:', project);
  },

  handleSkillFilter(skill, projects) {
    return projects.filter(project => project.skills.includes(skill));
  },

  getUniqueSkills(projects) {
    const skillSet = new Set();
    projects.forEach(project => {
      project.skills.forEach(skill => skillSet.add(skill));
    });
    return Array.from(skillSet);
  }
};

export default projectsController;
