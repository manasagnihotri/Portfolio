// Navigation Controller - Handles business logic and actions
const navigationController = {
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  handleNavClick(sectionId) {
    this.scrollToSection(sectionId);
  },

  handleSocialLinkClick(url) {
    window.open(url, '_blank');
  }
};

export default navigationController;
