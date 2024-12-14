document.addEventListener("DOMContentLoaded", init);

function init() {
  initTheme();
  initProfile();
  initColorPicker();
  initEventListeners();
  setPageIcon();
}

function parseMarkdown(text) {
  return (
    text
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Code
      .replace(/`(.*?)`/g, "<code>$1</code>")
      // Links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank">$1</a>'
      )
      // Line breaks
      .replace(/\n/g, "<br>")
  );
}

function setPageIcon() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = CONFIG.profile.image.url;

  img.onload = function () {
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, 0, 0, 64, 64);

    const link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = canvas.toDataURL();

    const existingFavicon = document.querySelector('link[rel="shortcut icon"]');
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }
    document.head.appendChild(link);
  };
}

// Toggle between light and dark themes
function toggleTheme() {
  const isDarkTheme = document.body.classList.contains("dark-theme");
  const icon = document.querySelector(".theme-toggle i");

  if (isDarkTheme) {
    document.body.classList.remove("dark-theme");
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("dark-theme", "false");
  } else {
    document.body.classList.add("dark-theme");
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("dark-theme", "true");
  }
}

// Show or hide the color picker
function toggleColorPicker() {
  document.getElementById("colorOptions").classList.toggle("show");
}

// Initialize color picker with available colors
function initColorPicker() {
  const colorOptions = document.getElementById("colorOptions");

  CONFIG.theme.colors.forEach((color) => {
    const colorOption = document.createElement("div");
    colorOption.className = "color-option";
    colorOption.dataset.name = color.name;
    colorOption.style.setProperty("--color-value", color.value);
    colorOption.onclick = () => setMainColor(color.value);

    if (color.value === CONFIG.theme.defaultColor) {
      colorOption.classList.add("active");
    }

    colorOptions.appendChild(colorOption);
  });

  const savedColor = localStorage.getItem("primary-color");
  if (savedColor) {
    setMainColor(savedColor);
  } else {
    setMainColor(CONFIG.theme.defaultColor);
  }
}

// Set the main color theme
function setMainColor(color) {
  document.documentElement.style.setProperty("--primary-color", color);
  localStorage.setItem("primary-color", color);

  document.querySelectorAll(".color-option").forEach((option) => {
    option.classList.remove("active");
    if (option.style.getPropertyValue("--color-value") === color) {
      option.classList.add("active");
    }
  });
}

// Initialize profile details
function initProfile() {
  const profileImg = document.getElementById("profile-img");
  profileImg.src = CONFIG.profile.image.url;
  profileImg.style.width = `${CONFIG.profile.image.size}px`;
  profileImg.style.height = `${CONFIG.profile.image.size}px`;

  document.querySelector(".greeting").textContent = CONFIG.profile.greeting;
  typeText(document.querySelector(".name"), CONFIG.profile.name);

  document.getElementById("bio").innerHTML = parseMarkdown(CONFIG.profile.bio);

  document.getElementById("basic-info").innerHTML = `
    <span>${CONFIG.profile.age} years old</span>
    <span class="dot-icon">•</span>
    <span class="location">
      <img src="https://flagcdn.com/${CONFIG.profile.location.code}.svg" 
           alt="${CONFIG.profile.location.name} Flag" 
           class="flag-icon">
      ${CONFIG.profile.location.name}
    </span>
  `;

  initHobbies();
  initLanguages();
  initProjects();
  initContacts();
}

// Typing effect for the name
async function typeText(element, text, speed = CONFIG.typing.speed) {
  element.textContent = "";
  for (let char of text) {
    element.textContent += char;
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
  await new Promise((resolve) =>
    setTimeout(resolve, CONFIG.typing.pauseDuration)
  );
  while (element.textContent.length > 0) {
    element.textContent = element.textContent.slice(0, -1);
    await new Promise((resolve) =>
      setTimeout(resolve, CONFIG.typing.deleteSpeed)
    );
  }
  await new Promise((resolve) => setTimeout(resolve, CONFIG.typing.startDelay));
  typeText(element, text, speed);
}

// Initialize hobbies list
function initHobbies() {
  const hobbiesList = document.getElementById("hobbies-list");
  CONFIG.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
}

// Initialize programming languages/skills
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

// Initialize projects list
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
          <span class="tech-item" data-name="${
            CONFIG.techIcons[tech]?.name || "Unknown"
          }">
            <i class="${
              CONFIG.techIcons[tech]?.icon || "fas fa-code"
            }" style="color: ${
              CONFIG.techIcons[tech]?.color || "var(--primary-color)"
            };"></i>
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

// Initialize contact links
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

// Initialize theme based on user preference
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

// Event listeners for interactive features
function initEventListeners() {
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
}
