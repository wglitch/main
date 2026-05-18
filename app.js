const grid = document.querySelector("#projectGrid");
const TOTAL_SLOTS = 24;

function projectUrl(project) {
  return project.url || `https://wglitch.github.io/${project.slug}`;
}

function fallbackLetters(name) {
  return name
    .split(/\s+/)
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function createProjectCard(project) {
  const link = document.createElement("a");
  link.className = "app";
  link.href = projectUrl(project);
  link.target = "_self";
  link.rel = "noopener";
  link.setAttribute("aria-label", `Öppna ${project.name}`);

  const icon = document.createElement("div");
  icon.className = "app-icon";

  if (project.icon) {
    const img = document.createElement("img");
    img.src = project.icon;
    img.alt = "";
    img.loading = "lazy";

    img.onerror = () => {
      icon.innerHTML = `<span class="fallback-icon">${fallbackLetters(project.name)}</span>`;
    };

    icon.appendChild(img);
  } else {
    icon.innerHTML = `<span class="fallback-icon">${fallbackLetters(project.name)}</span>`;
  }

  const label = document.createElement("div");
  label.className = "app-name";
  label.textContent = project.name;

  link.append(icon, label);
  return link;
}

function createPlaceholder() {
  const item = document.createElement("div");
  item.className = "app placeholder";
  item.innerHTML = `
    <div class="app-icon"><span class="fallback-icon">+</span></div>
    <div class="app-name">Kommer snart</div>
  `;
  return item;
}

projects.slice(0, TOTAL_SLOTS).forEach(project => {
  grid.appendChild(createProjectCard(project));
});

for (let i = projects.length; i < TOTAL_SLOTS; i += 1) {
  grid.appendChild(createPlaceholder());
}
