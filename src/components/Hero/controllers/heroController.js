// Hero Controller - Handles hero section actions
const heroController = {
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  handleViewWorkClick() {
    this.scrollToSection('experience');
  },

  handleContactClick() {
    window.location.href = 'mailto:maa2416@columbia.edu';
  }
};

export default heroController;
