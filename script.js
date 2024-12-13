// Main initialization and functionality for the portfolio website
document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", setPageIcon);

// Initialize all website components
function init() {
  initTheme();
  initProfile();
  initColorPicker();
  initPageIcon();
  initEventListeners();
}

// Set circular page icon from profile image
function initPageIcon() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = CONFIG.profile.image.url;

  img.onload = function () {
    // Create circular clipping path
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    // Draw the image
    ctx.drawImage(img, 0, 0, 64, 64);

    // Set as favicon
    const link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = canvas.toDataURL();

    // Replace existing favicon if present
    const existingFavicon = document.querySelector('link[rel="shortcut icon"]');
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }
    document.head.appendChild(link);
  };
}

// Theme toggling functionality
function toggleTheme() {
  const isDarkTheme = document.body.classList.contains("dark-theme");
  const icon = document.querySelector(".theme-toggle i");
  const button = document.querySelector(".theme-toggle");

  button.classList.add("animate");

  setTimeout(() => {
    if (isDarkTheme) {
      document.body.classList.remove("dark-theme");
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("dark-theme", "false");
    } else {
      document.body.classList.add("dark-theme");
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("dark-theme", "true");
    }
    button.classList.remove("animate");
  }, 300);
}

// Color picker functionality
function toggleColorPicker() {
  document.getElementById("colorOptions").classList.toggle("show");
}

// Set main theme color
function setMainColor(color) {
  document.documentElement.style.setProperty("--primary-color", color);
  localStorage.setItem("primary-color", color);

  // Update active state of color options
  document.querySelectorAll(".color-option").forEach((option) => {
    option.classList.remove("active");
    if (option.dataset.color === color) {
      option.classList.add("active");
    }
  });
}

// Initialize color picker
function initColorPicker() {
  const colorOptions = document.getElementById("colorOptions");

  CONFIG.theme.colors.forEach((color) => {
    const colorOption = document.createElement("div");
    colorOption.className = "color-option";
    colorOption.style.backgroundColor = color.value;
    colorOption.dataset.color = color.value;
    colorOption.title = color.name;
    colorOption.onclick = () => setMainColor(color.value);

    if (color.value === CONFIG.theme.defaultColor) {
      colorOption.classList.add("active");
    }

    colorOptions.appendChild(colorOption);
  });

  // Load saved color preference
  const savedColor = localStorage.getItem("primary-color");
  if (savedColor) {
    setMainColor(savedColor);
  } else {
    setMainColor(CONFIG.theme.defaultColor);
  }
}

// Typing animation implementation
async function typeText(element, text, speed = CONFIG.typing.speed) {
  const greetingElement = document.querySelector(".greeting");
  element.textContent = "";
  greetingElement.style.marginRight = "0.5rem";

  // Type text character by character
  for (let char of text) {
    element.textContent += char;
    await new Promise((resolve) => setTimeout(resolve, speed));
  }

  // Pause at end of text
  await new Promise((resolve) =>
    setTimeout(resolve, CONFIG.typing.pauseDuration)
  );

  // Delete text character by character
  while (element.textContent.length > 0) {
    element.textContent = element.textContent.slice(0, -1);
    await new Promise((resolve) =>
      setTimeout(resolve, CONFIG.typing.deleteSpeed)
    );
  }

  // Pause before restarting
  await new Promise((resolve) => setTimeout(resolve, CONFIG.typing.startDelay));

  // Restart animation
  typeText(element, text, speed);
}

// Initialize profile section
function initProfile() {
  // Set profile image
  const profileImg = document.getElementById("profile-img");
  profileImg.src = CONFIG.profile.image.url;
  profileImg.style.width = `${CONFIG.profile.image.size}px`;
  profileImg.style.height = `${CONFIG.profile.image.size}px`;

  // Set greeting and start name animation
  document.querySelector(".greeting").textContent = CONFIG.profile.greeting;
  typeText(document.querySelector(".name"), CONFIG.profile.name);

  // Set basic info and bio
  document.getElementById(
    "basic-info"
  ).textContent = `${CONFIG.profile.age} years old • ${CONFIG.profile.location}`;
  document.getElementById("bio").textContent = CONFIG.profile.bio;

  initHobbies();
  initLanguages();
  initProjects();
  initContacts();
}

// Initialize hobbies section
function initHobbies() {
  const hobbiesList = document.getElementById("hobbies-list");
  CONFIG.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
}

// Initialize languages/skills section
function initLanguages() {
  const languagesContainer = document.getElementById("languages");
  CONFIG.languages.forEach((lang) => {
    const langDiv = document.createElement("div");
    langDiv.className = "language-item";
    langDiv.innerHTML = `
      <div class="language-info">
        <div class="language-name">
          <i class="${lang.icon}"></i>
          <span>${lang.name}</span>
        </div>
        <div class="progress-bar">
          <div class="progress" style="width: ${lang.proficiency}%"></div>
        </div>
      </div>
    `;
    languagesContainer.appendChild(langDiv);
  });
}

// Initialize projects section
function initProjects() {
  const projectsContainer = document.getElementById("projects");
  CONFIG.projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-card";
    projectDiv.innerHTML = `
      <h3><i class="${project.icon}"></i> ${project.name}</h3>
      <p>${project.description}</p>
      <div class="tech-stack">
        ${project.techStack
          .map(
            (tech) => `
          <span class="tech-item" 
                data-name="${CONFIG.techIcons[tech].name}"
                style="color: ${CONFIG.techIcons[tech].color}">
            <i class="${CONFIG.techIcons[tech].icon}"></i>
          </span>
        `
          )
          .join("")}
      </div>
      <div class="project-links">
        <a href="${project.links.github}" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="${project.links.demo}" target="_blank" rel="noopener">
          <i class="fas fa-external-link-alt"></i> Demo
        </a>
      </div>
    `;
    projectsContainer.appendChild(projectDiv);
  });
}

// Initialize contacts section
function initContacts() {
  const contactsContainer = document.getElementById("contacts");
  CONFIG.contacts.forEach((contact) => {
    const a = document.createElement("a");
    a.href = contact.link;
    a.innerHTML = `<i class="${contact.icon}"></i>`;
    a.title = contact.platform;
    a.target = "_blank";
    a.rel = "noopener";
    contactsContainer.appendChild(a);
  });
}

// Initialize theme preferences
function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("dark-theme");
  const icon = document.querySelector(".theme-toggle i");

  if (savedTheme !== null) {
    if (savedTheme === "true") {
      document.body.classList.add("dark-theme");
      icon.classList.replace("fa-moon", "fa-sun");
    }
  } else if (prefersDark) {
    document.body.classList.add("dark-theme");
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

// Initialize event listeners
function initEventListeners() {
  // Close color picker when clicking outside
  document.addEventListener("click", (e) => {
    const colorPicker = document.querySelector(".color-picker");
    const colorOptions = document.getElementById("colorOptions");

    if (
      !colorPicker.contains(e.target) &&
      colorOptions.classList.contains("show")
    ) {
      colorOptions.classList.remove("show");
    }
  });

  // Handle theme preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("dark-theme")) {
        if (e.matches) {
          document.body.classList.add("dark-theme");
          document
            .querySelector(".theme-toggle i")
            .classList.replace("fa-moon", "fa-sun");
        } else {
          document.body.classList.remove("dark-theme");
          document
            .querySelector(".theme-toggle i")
            .classList.replace("fa-sun", "fa-moon");
        }
      }
    });

  // Initialize smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
