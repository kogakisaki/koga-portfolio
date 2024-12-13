function setPageIcon() {
  // Create a canvas element
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Create a temporary image to load the avatar
  const img = new Image();
  img.crossOrigin = "anonymous"; // Enable cross-origin image loading
  img.src = CONFIG.profile.image.url;

  img.onload = function () {
    // Draw circular clipping path
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    // Draw the image
    ctx.drawImage(img, 0, 0, 64, 64);

    // Create favicon link element
    const link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = canvas.toDataURL();

    // Remove existing favicon
    const existingFavicon = document.querySelector('link[rel="shortcut icon"]');
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }

    // Add new favicon
    document.head.appendChild(link);
  };
}

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

function toggleColorPicker() {
  document.getElementById("colorOptions").classList.toggle("show");
}

function setMainColor(color) {
  document.documentElement.style.setProperty("--primary-color", color);
  localStorage.setItem("primary-color", color);

  document.querySelectorAll(".color-option").forEach((option) => {
    option.classList.remove("active");
    if (option.dataset.color === color) {
      option.classList.add("active");
    }
  });
}

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

  const savedColor = localStorage.getItem("primary-color");
  if (savedColor) {
    setMainColor(savedColor);
  } else {
    setMainColor(CONFIG.theme.defaultColor);
  }
}

async function typeText(element, text, speed = CONFIG.typing.speed) {
  const greetingElement = document.querySelector(".greeting");
  element.textContent = "";

  // Start with proper spacing
  greetingElement.style.marginRight = "0.5rem";

  // Type text
  for (let char of text) {
    element.textContent += char;
    await new Promise((resolve) => setTimeout(resolve, speed));
  }

  // Pause at the end
  await new Promise((resolve) =>
    setTimeout(resolve, CONFIG.typing.pauseDuration)
  );

  // Delete text
  while (element.textContent.length > 0) {
    element.textContent = element.textContent.slice(0, -1);
    await new Promise((resolve) =>
      setTimeout(resolve, CONFIG.typing.deleteSpeed)
    );
  }

  // Pause before restarting
  await new Promise((resolve) => setTimeout(resolve, CONFIG.typing.startDelay));

  // Restart the animation
  typeText(element, text, speed);
}

function initProfile() {
  // Set profile image with configured size
  const profileImg = document.getElementById("profile-img");
  profileImg.src = CONFIG.profile.image.url;
  profileImg.style.width = `${CONFIG.profile.image.size}px`;
  profileImg.style.height = `${CONFIG.profile.image.size}px`;

  // Set greeting and start typing animation for name
  document.querySelector(".greeting").textContent = CONFIG.profile.greeting;
  typeText(document.querySelector(".name"), CONFIG.profile.name);

  // Set other profile information
  document.getElementById(
    "basic-info"
  ).textContent = `${CONFIG.profile.age} years old • ${CONFIG.profile.location}`;
  document.getElementById("bio").textContent = CONFIG.profile.bio;

  // Set hobbies
  const hobbiesList = document.getElementById("hobbies-list");
  CONFIG.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });

  // Set programming languages
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

  // Set projects
  const projectsContainer = document.getElementById("projects");
  CONFIG.projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-card";
    projectDiv.innerHTML = `
      <h3><i class="${project.icon}"></i> ${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.links.github}" target="_blank">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="${project.links.demo}" target="_blank">
          <i class="fas fa-external-link-alt"></i> Demo
        </a>
      </div>
    `;
    projectsContainer.appendChild(projectDiv);
  });

  // Set contacts
  const contactsContainer = document.getElementById("contacts");
  CONFIG.contacts.forEach((contact) => {
    const a = document.createElement("a");
    a.href = contact.link;
    a.innerHTML = `<i class="${contact.icon}"></i>`;
    a.title = contact.platform;
    a.target = "_blank";
    contactsContainer.appendChild(a);
  });
}

function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("dark-theme");
  const icon = document.querySelector(".theme-toggle i");

  if (savedTheme !== null) {
    if (savedTheme === "true") {
      document.body.classList.add("dark-theme");
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      document.body.classList.remove("dark-theme");
      icon.classList.replace("fa-sun", "fa-moon");
    }
  } else if (prefersDark) {
    document.body.classList.add("dark-theme");
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

function init() {
  initTheme();
  initProfile();
  initColorPicker();
  setPageIcon();

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
}

document.addEventListener("DOMContentLoaded", init);
