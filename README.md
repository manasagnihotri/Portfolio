# Manas Agnihotri Portfolio - React.js

A modern, responsive portfolio website for Manas Agnihotri - Data Science & ML Engineer, built with React.js and Tailwind CSS.

## Project Structure

The project follows an **MVC (Model-View-Controller)** architecture for each component:

```
src/
├── components/
│   ├── Navigation/
│   │   ├── models/
│   │   │   └── navigationModel.js    # Navigation data & logic
│   │   ├── controllers/
│   │   │   └── navigationController.js # Navigation actions
│   │   ├── views/
│   │   │   └── NavigationView.jsx     # Navigation UI
│   │   └── index.js                  # Component export
│   ├── Hero/
│   │   ├── models/
│   │   │   └── heroModel.js
│   │   ├── controllers/
│   │   │   └── heroController.js
│   │   ├── views/
│   │   │   └── HeroView.jsx
│   │   └── index.js
│   ├── About/
│   │   ├── models/
│   │   │   └── aboutModel.js
│   │   ├── controllers/
│   │   │   └── aboutController.js
│   │   ├── views/
│   │   │   └── AboutView.jsx
│   │   └── index.js
│   ├── Experience/
│   │   ├── models/
│   │   │   └── experienceModel.js
│   │   ├── controllers/
│   │   │   └── experienceController.js
│   │   ├── views/
│   │   │   └── ExperienceView.jsx
│   │   └── index.js
│   ├── Projects/
│   │   ├── models/
│   │   │   └── projectsModel.js
│   │   ├── controllers/
│   │   │   └── projectsController.js
│   │   ├── views/
│   │   │   └── ProjectsView.jsx
│   │   └── index.js
│   ├── Skills/
│   │   ├── models/
│   │   │   └── skillsModel.js
│   │   ├── controllers/
│   │   │   └── skillsController.js
│   │   ├── views/
│   │   │   └── SkillsView.jsx
│   │   └── index.js
│   ├── Contact/
│   │   ├── models/
│   │   │   └── contactModel.js
│   │   ├── controllers/
│   │   │   └── contactController.js
│   │   ├── views/
│   │   │   └── ContactView.jsx
│   │   └── index.js
│   └── Footer/
│       ├── models/
│       │   └── footerModel.js
│       ├── controllers/
│       │   └── footerController.js
│       ├── views/
│       │   └── FooterView.jsx
│       └── index.js
├── styles/
│   ├── globals.css       # Custom styles & animations
│   └── index.css         # Tailwind imports
├── App.jsx               # Main app component
└── index.js              # React entry point
```

## MVC Architecture Overview

### Model
- Contains all data and business logic
- Manages state of component data
- Provides getter methods to access data
- Independent of UI implementation

Example:
```javascript
const navigationModel = {
  navItems: [...],
  getNavItems() { return this.navItems; }
};
```

### Controller
- Handles user interactions and events
- Contains action methods
- Orchestrates data transformations
- Communicates between Model and View

Example:
```javascript
const navigationController = {
  scrollToSection(sectionId) { ... },
  handleNavClick(sectionId) { ... }
};
```

### View
- React component that renders UI
- Consumes data from Model
- Triggers actions from Controller
- Responsible for presentation only

Example:
```javascript
export default function NavigationView() {
  const navItems = navigationModel.getNavItems();
  // Render JSX using data
}
```


## Features

- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Smooth Animations**: GSAP animations for engaging interactions
- **Glass Morphism**: Modern glass effect UI elements
- **Gradient Text**: Beautiful gradient text styling
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Component-Based**: Modular React components for maintainability
- **MVC Architecture**: Separation of concerns with Model-View-Controller pattern

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm build
```

## Technologies Used

- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Animation library
- **React Scripts**: Build tools

## Customization

### Adding New Sections
1. Create a new folder in `src/components/YourComponent/`
2. Create subdirectories: `models/`, `controllers/`, `views/`
3. Implement Model, Controller, and View files
4. Create an `index.js` file to export the View component
5. Import and add the component to `App.jsx`

### Updating Content
- **Models**: Edit data directly in the model files in `models/` subdirectories
- **Logic**: Modify business logic in controller files
- **Styling**: Update JSX and Tailwind classes in view files

### Styling
- Global styles in `src/styles/globals.css`
- Tailwind classes used throughout components
- Custom CSS variables in `tailwind.config.js`

## Architecture Benefits

1. **Separation of Concerns**: Each layer has a single responsibility
2. **Reusability**: Models and Controllers can be reused across components
3. **Testability**: Each layer can be tested independently
4. **Maintainability**: Clear structure makes code easy to maintain and debug
5. **Scalability**: Easy to add new features and components following the same pattern

## License

© 2026 Manas Agnihotri. All rights reserved.
