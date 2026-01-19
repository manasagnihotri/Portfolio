// Footer Controller - Handles footer interactions
const footerController = {
  handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  getCurrentYear() {
    return new Date().getFullYear();
  }
};

export default footerController;
