// Contact Controller - Handles contact interactions
const contactController = {
  handleContactClick(url, type) {
    if (type === 'email') {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  },

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  sendMessage(name, email, message) {
    // Placeholder for message sending logic
    console.log('Message sent:', { name, email, message });
  }
};

export default contactController;
