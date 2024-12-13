// config.js - Configuration file for portfolio website
const CONFIG = {
  // Profile section configuration
  profile: {
    greeting: "Hi, I'm", // Greeting message shown before name
    name: "Koga", // Your name
    image: {
      url: "https://cdn.discordapp.com/attachments/1261551481274892330/1316896613565992970/FB_IMG_1733994631271.jpg?ex=675cb70b&is=675b658b&hm=0be5b5106f782cb5579bc44ab5b87d678ff7af82c6458b6402ac9954ff62dc05&", // URL to profile image
      size: 150, // Size in pixels for profile image
    },
    age: 18, // Your age
    location: "Vietnam", // Your location
    bio: "A passionate developer who loves creating beautiful and functional web applications.", // Short bio description
  },

  // Typing animation configuration
  typing: {
    speed: 100, // Speed of typing characters (milliseconds)
    deleteSpeed: 50, // Speed of deleting characters (milliseconds)
    pauseDuration: 1500, // Duration to pause when text is fully typed (milliseconds)
    startDelay: 500, // Delay before starting new typing cycle (milliseconds)
  },

  // List of hobbies/interests
  hobbies: ["Coding", "Reading", "Gaming", "Learning new technologies"],

  // Tech stack icon presets with names, icons and brand colors
  techIcons: {
    // Programming Languages
    javascript: {
      name: "JavaScript",
      icon: "fab fa-js",
      color: "#F7DF1E",
    },
    typescript: {
      name: "TypeScript",
      icon: "fas fa-code",
      color: "#3178C6",
    },
    python: {
      name: "Python",
      icon: "fab fa-python",
      color: "#3776AB",
    },
    java: {
      name: "Java",
      icon: "fab fa-java",
      color: "#007396",
    },
    cpp: {
      name: "C++",
      icon: "fas fa-code",
      color: "#00599C",
    },
    csharp: {
      name: "C#",
      icon: "fas fa-code",
      color: "#239120",
    },

    // Frontend Development
    html: {
      name: "HTML5",
      icon: "fab fa-html5",
      color: "#E34F26",
    },
    css: {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      color: "#1572B6",
    },
    sass: {
      name: "Sass",
      icon: "fab fa-sass",
      color: "#CC6699",
    },
    react: {
      name: "React",
      icon: "fab fa-react",
      color: "#61DAFB",
    },
    vue: {
      name: "Vue.js",
      icon: "fab fa-vuejs",
      color: "#4FC08D",
    },
    angular: {
      name: "Angular",
      icon: "fab fa-angular",
      color: "#DD0031",
    },

    // Backend Development
    nodejs: {
      name: "Node.js",
      icon: "fab fa-node-js",
      color: "#339933",
    },
    php: {
      name: "PHP",
      icon: "fab fa-php",
      color: "#777BB4",
    },
    python_backend: {
      name: "Python Backend",
      icon: "fab fa-python",
      color: "#3776AB",
    },

    // Databases
    mongodb: {
      name: "MongoDB",
      icon: "fas fa-database",
      color: "#47A248",
    },
    mysql: {
      name: "MySQL",
      icon: "fas fa-database",
      color: "#4479A1",
    },
    postgresql: {
      name: "PostgreSQL",
      icon: "fas fa-database",
      color: "#336791",
    },

    // DevOps & Tools
    git: {
      name: "Git",
      icon: "fab fa-git-alt",
      color: "#F05032",
    },
    github: {
      name: "GitHub",
      icon: "fab fa-github",
      color: "#181717",
    },
    gitlab: {
      name: "GitLab",
      icon: "fab fa-gitlab",
      color: "#FCA121",
    },
    docker: {
      name: "Docker",
      icon: "fab fa-docker",
      color: "#2496ED",
    },
    aws: {
      name: "AWS",
      icon: "fab fa-aws",
      color: "#232F3E",
    },

    // Mobile Development
    android: {
      name: "Android",
      icon: "fab fa-android",
      color: "#3DDC84",
    },
    ios: {
      name: "iOS",
      icon: "fab fa-apple",
      color: "#000000",
    },
    react_native: {
      name: "React Native",
      icon: "fab fa-react",
      color: "#61DAFB",
    },

    // Other Technologies
    linux: {
      name: "Linux",
      icon: "fab fa-linux",
      color: "#FCC624",
    },
    wordpress: {
      name: "WordPress",
      icon: "fab fa-wordpress",
      color: "#21759B",
    },
    bootstrap: {
      name: "Bootstrap",
      icon: "fab fa-bootstrap",
      color: "#7952B3",
    },
  },

  // Programming languages/skills with proficiency levels
  languages: [
    {
      name: "JavaScript",
      icon: "fab fa-js",
      proficiency: 90, // Proficiency percentage (0-100)
    },
    {
      name: "Python",
      icon: "fab fa-python",
      proficiency: 85,
    },
    {
      name: "C++",
      icon: "fas fa-code",
      proficiency: 75,
    },
  ],

  // Project showcase entries
  projects: [
    {
      name: "Koga Portfolio",
      description:
        "A personal portfolio website built with modern web technologies",
      icon: "fas fa-globe", // Project icon
      techStack: ["html", "css", "javascript"], // Technologies used (must match techIcons keys)
      links: {
        github: "https://github.com/kogakisaki/koga-portfolio", // GitHub repository link
        demo: "https://koga-portfolio.on-fleek.app/", // Live demo link
      },
    },
    {
      name: "Koga-2048",
      description:
        "A modern web implementation of the classic 2048 game with additional features like custom board sizes, dark theme, and game sharing capabilities.",
      icon: "fa-solid fa-square-full",
      techStack: ["javascript", "html", "css", "git"],
      links: {
        github: "https://github.com/kogakisaki/koga-2048",
        demo: "https://huggingface.co/spaces/eienmojiki/2048",
      },
    },
  ],

  // Contact/social media links
  contacts: [
    {
      platform: "Facebook", // Platform name
      icon: "fab fa-facebook", // Platform icon
      link: "https://facebook.com/kisaki.koga", // Profile link
    },
    {
      platform: "Email",
      icon: "fas fa-envelope",
      link: "mailto:kisakikoga.1210@gmail.com",
    },
  ],

  // Theme configuration
  theme: {
    // Available color themes
    colors: [
      {
        name: "Blue",
        value: "#2196f3",
      },
      {
        name: "Green",
        value: "#4CAF50",
      },
      {
        name: "Purple",
        value: "#9C27B0",
      },
      {
        name: "Orange",
        value: "#FF9800",
      },
      {
        name: "Pink",
        value: "#E91E63",
      },
    ],
    defaultColor: "#2196f3", // Default theme color
  },
};
