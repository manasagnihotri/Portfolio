// Hero Model - Contains hero section data
const heroModel = {
  name: "Manas Agnihotri",
  title: "Data Science & ML Engineer",
  bio: "Master's student at Columbia University specializing in machine learning, causal inference, and data engineering. Building intelligent systems for healthcare and beyond.",
  location: "New York, NY",
  email: "maa2416@columbia.edu",
  phone: "(332) 267-9106",

  getHeroData() {
    return {
      name: this.name,
      title: this.title,
      bio: this.bio,
      contact: {
        location: this.location,
        email: this.email,
        phone: this.phone
      }
    };
  }
};

export default heroModel;
