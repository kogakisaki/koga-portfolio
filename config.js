// config.js
const CONFIG = {
  profile: {
    greeting: "Hi, I'm",
    name: "Koga",
    image: {
      url: "https://cdn.discordapp.com/attachments/1261551481274892330/1316896613565992970/FB_IMG_1733994631271.jpg?ex=675cb70b&is=675b658b&hm=0be5b5106f782cb5579bc44ab5b87d678ff7af82c6458b6402ac9954ff62dc05&",
      size: 150,
    },
    age: 18,
    location: "Vietnam",
    bio: "A passionate developer who loves creating beautiful and functional web applications.",
  },
  typing: {
    speed: 100, // Speed of typing in milliseconds
    deleteSpeed: 50, // Speed of deleting in milliseconds
    pauseDuration: 1500, // How long to pause when fully typed
    startDelay: 500, // How long to wait before starting new cycle
  },
  hobbies: ["Coding", "Reading", "Gaming", "Learning new technologies"],
  languages: [
    {
      name: "JavaScript",
      icon: "fab fa-js",
      proficiency: 90,
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
  projects: [
    {
      name: "Koga Portfolio",
      description:
        "A personal portfolio website built with modern web technologies",
      icon: "fas fa-globe",
      links: {
        github: "https://github.com/kogakisaki/koga-portfolio",
        demo: "https://koga-portfolio.on-fleek.app/",
      },
    },
    {
      name: "Koga-2048",
      description: "A modern web implementation of the classic 2048 game with additional features like custom board sizes, dark theme, and game sharing capabilities.",
      icon: "fa-solid fa-square-full",
      links: {
        github: "https://github.com/kogakisaki/koga-2048",
        demo: "https://huggingface.co/spaces/eienmojiki/2048",
      },
    },
  ],
  contacts: [
    {
      platform: "Facebook",
      icon: "fab fa-facebook",
      link: "https://facebook.com/kisaki.koga",
    },
    {
      platform: "Email",
      icon: "fas fa-envelope",
      link: "mailto:kisakikoga.1210@gmail.com",
    },
  ],
  theme: {
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
    defaultColor: "#2196f3",
  },
};
