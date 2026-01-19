// Footer Model - Contains footer data
const footerModel = {
  footerInfo: {
    year: new Date().getFullYear(),
    author: "Manas Agnihotri",
    copyright: "All rights reserved."
  },

  getFooterInfo() {
    return this.footerInfo;
  },

  getCopyright() {
    return `© ${this.footerInfo.year} ${this.footerInfo.author}. ${this.footerInfo.copyright}`;
  }
};

export default footerModel;
