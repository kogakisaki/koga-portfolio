<h1 align="center">🌟 Modern Portfolio Page</h1>

A sleek, responsive personal portfolio website featuring dynamic theme switching, smooth animations, and fully customizable content through a simple configuration file.

## ✨ Features

- 🎨 Dynamic Theme Switching

  - Light/Dark mode
  - System preference detection
  - Theme persistence
  - Custom color palettes

- 💫 Animations

  - Smooth typing effect
  - Fade-in sections
  - Interactive hover effects
  - Seamless transitions

- 📱 Responsive Design

  - Mobile-first approach
  - Fluid layouts
  - Optimized for all devices
  - Consistent experience

- ⚙️ Easy Configuration

  - Simple config file
  - No coding required
  - Instant updates
  - Flexible options

- 🎯 Key Sections
  - Profile introduction
  - Skills showcase
  - Project portfolio
  - Contact information
  - Hobby interests

## 📝 To Do

### Completed ✅

- [x] Implement smooth typing animation with cursor
- [x] Add dynamic theme switching (light/dark)
- [x] Create custom color picker
- [x] Add circular page icon from avatar
- [x] Make responsive design
- [x] Add project cards with hover effects
- [x] Create skills progress bars
- [x] Add animation for theme toggle

### In Progress 🚧

- [ ] Add animation for theme toggle
- [ ] Create presets for language/framework icons
- [ ] Add more color theme presets
- [ ] Implement smooth scrolling
- [ ] Add print-friendly styling
- [ ] Create customizable typing animation settings
- [ ] Improve mobile responsiveness

### Future Enhancements 🎯

- [ ] Add animated background patterns
- [ ] Create multiple layout options
- [ ] Add customizable section ordering
- [ ] Implement project filtering/categories
- [ ] Add achievement/certification section
- [ ] Create interactive skill tree
- [ ] Add multilingual support
- [ ] Add PDF resume generation
- [ ] Implement project timeline view
- [ ] Add scroll progress indicator
- [ ] Create animations for section transitions
- [ ] Add social media preview cards

### Enhancement Ideas 💡

- [ ] Add keyboard shortcuts
- [ ] Create theme designer tool
- [ ] Add custom cursor styles
- [ ] Implement lazy loading for projects
- [ ] Add search functionality
- [ ] Create mini game easter egg
- [ ] Add visitor counter
- [ ] Create contact form
- [ ] Add blog section integration
- [ ] Implement dynamic charts

### Optimization Tasks 🔧

- [ ] Improve loading performance
- [ ] Optimize images loading
- [ ] Enhance SEO settings
- [ ] Add caching strategies
- [ ] Improve code splitting
- [ ] Enhance accessibility
- [ ] Add more documentation

## 🚀 Getting Started

1. Download or clone the repository
2. Edit the `config.js` file with your information
3. Replace the profile image
4. Deploy to your preferred hosting

## ⚙️ Configuration Guide

> See [`config.js`](./config.js) for details

### Profile Settings

```javascript
profile: {
  name: "Your Name",
  greeting: "Hi, I'm",    // Custom greeting message
  image: {
    url: "path/to/image.jpg",
    size: 200             // Image size in pixels
  },
  age: 25, // your age
  location: "Your Location",
  bio: "A brief description about yourself"
}
```

### Animation Settings

```javascript
typing: {
  speed: 100,          // Typing speed (milliseconds)
  deleteSpeed: 50,     // Deletion speed (milliseconds)
  pauseDuration: 1500, // Pause when typed (milliseconds)
  startDelay: 500     // Delay before restart (milliseconds)
}
```

### Theme Colors

```javascript
theme: {
  colors: [
    {
      name: "Blue",
      value: "#2196f3"
    },
    {
      name: "Green",
      value: "#4CAF50"
    }
    // Add more colors as needed
  ],
  defaultColor: "#2196f3"  // Initial theme color
}
```

### Skills & Languages

```javascript
languages: [
  {
    name: "JavaScript",
    icon: "fab fa-js", // FontAwesome icon class
    proficiency: 90, // Percentage (0-100)
  },
  // Add more languages/skills
];
```

### Projects Showcase

```javascript
projects: [
  {
    name: "Project Name",
    description: "Project description goes here",
    icon: "fas fa-project-diagram",
    links: {
      github: "https://github.com/username/project",
      demo: "https://demo-url.com",
    },
  },
  // Add more projects
];
```

### Contact Links

```javascript
contacts: [
  {
    platform: "GitHub",
    icon: "fab fa-github",
    link: "https://github.com/username",
  },
  {
    platform: "LinkedIn",
    icon: "fab fa-linkedin",
    link: "https://linkedin.com/in/username",
  },
  // and more...
];
```

## 🎨 Customization Guide

### Adding Custom Colors

Add new colors to your theme configuration:

```javascript
colors: [
  {
    name: "Custom Purple",
    value: "#9C27B0",
  },
  {
    name: "Ocean Blue",
    value: "#03A9F4",
  },
];
```

### Image Guidelines

- **Recommended Size**: `400x400px` minimum
- **Format**: `JPG, PNG, or WebP`
- **Aspect Ratio**: `1:1` (square)
- **File Size**: Optimize for web (< 500KB)

## 🤝 Contributing

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the `MIT License` - see the [`LICENSE`](./LICENSE) file for details.
