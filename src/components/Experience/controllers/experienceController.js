// Experience Controller - Handles experience interactions
const experienceController = {
  filterByTitle(experiences, title) {
    return experiences.filter(exp => exp.title.includes(title));
  },

  sortByDate(experiences) {
    return [...experiences].sort((a, b) => {
      const getYear = (dateStr) => parseInt(dateStr.split('–')[1].trim().split(' ')[0]);
      return getYear(b.period) - getYear(a.period);
    });
  },

  handleExperienceClick(experience) {
    console.log('Experience clicked:', experience);
  }
};

export default experienceController;
