// Skills Controller - Handles skills interactions
const skillsController = {
  searchSkill(skill, allSkills) {
    return allSkills.filter(s => s.toLowerCase().includes(skill.toLowerCase()));
  },

  sortSkills(skills) {
    return [...skills].sort((a, b) => a.localeCompare(b));
  },

  handleSkillClick(skill) {
    console.log('Skill clicked:', skill);
  }
};

export default skillsController;
