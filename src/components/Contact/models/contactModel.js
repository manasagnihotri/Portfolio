// Contact Model - Contains contact data
const contactModel = {
  contactInfo: {
    heading: "Let's Connect",
    message: "Always interested in discussing data science, ML, and opportunities to build intelligent systems. Feel free to reach out!",
    channels: [
      {
        name: "Email",
        url: "mailto:maa2416@columbia.edu",
        type: "email"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/manas-agnihotri",
        type: "social"
      },
      {
        name: "GitHub",
        url: "https://github.com/manasagnihotri",
        type: "social"
      }
    ]
  },

  getContactInfo() {
    return this.contactInfo;
  },

  getContactChannels() {
    return this.contactInfo.channels;
  }
};

export default contactModel;
