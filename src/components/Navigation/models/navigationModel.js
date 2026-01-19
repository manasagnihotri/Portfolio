// Navigation Model - Handles data and business logic
const navigationModel = {
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' }
  ],
  
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/manas-agnihotri' },
    { name: 'GitHub', url: 'https://github.com/manasagnihotri' }
  ],

  getNavItems() {
    return this.navItems;
  },

  getSocialLinks() {
    return this.socialLinks;
  }
};

export default navigationModel;
