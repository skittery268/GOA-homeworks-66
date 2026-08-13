/* Browser extensions manager UI */

const listEl = document.getElementById("extensions-list");
const emptyEl = document.getElementById("empty-state");
const filterBtns = document.querySelectorAll(".filter");
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector(".theme-toggle__icon");

let extensions = [];
let currentFilter = "all";

/* ---------- Theme ---------- */

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);

  const goingDark = theme === "dark";
  themeIcon.src = goingDark
    ? "./assets/images/icon-sun.svg"
    : "./assets/images/icon-moon.svg";
  themeBtn.setAttribute(
    "aria-label",
    goingDark ? "Switch to light theme" : "Switch to dark theme"
  );
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
}

themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
});

/* ---------- Rendering ---------- */

function getVisible() {
  if (currentFilter === "active") return extensions.filter((e) => e.isActive);
  if (currentFilter === "inactive") return extensions.filter((e) => !e.isActive);
  return extensions;
}

function createCard(ext) {
  const li = document.createElement("li");
  li.className = "card";

  li.innerHTML = `
    <div class="card__top">
      <img class="card__icon" src="${ext.logo}" alt="">
      <div>
        <h2 class="card__name">${ext.name}</h2>
        <p class="card__description">${ext.description}</p>
      </div>
    </div>
    <div class="card__bottom">
      <button class="remove" type="button">Remove</button>
      <button
        class="switch"
        type="button"
        role="switch"
        aria-checked="${ext.isActive}"
        aria-label="Activate ${ext.name}"
      ></button>
    </div>
  `;

  li.querySelector(".remove").addEventListener("click", () => removeExtension(ext, li));
  li.querySelector(".switch").addEventListener("click", (event) =>
    toggleExtension(ext, event.currentTarget)
  );

  return li;
}

function render() {
  const visible = getVisible();

  listEl.replaceChildren(...visible.map(createCard));
  emptyEl.hidden = visible.length > 0;
}

/* ---------- Actions ---------- */

const LEAVE_DURATION = 200; // keep in sync with the .card transition in style.css

// fade the card out, then rebuild the list from the current state
function dismissCard(card) {
  card.classList.add("is-leaving");
  setTimeout(render, LEAVE_DURATION);
}

function toggleExtension(ext, switchEl) {
  ext.isActive = !ext.isActive;
  switchEl.setAttribute("aria-checked", String(ext.isActive));

  // the card may no longer belong in the current filter
  if (currentFilter !== "all") {
    dismissCard(switchEl.closest(".card"));
  }
}

function removeExtension(ext, card) {
  extensions = extensions.filter((item) => item !== ext);
  dismissCard(card);
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    filterBtns.forEach((other) => {
      const selected = other === btn;
      other.classList.toggle("is-selected", selected);
      other.setAttribute("aria-pressed", String(selected));
    });

    render();
  });
});

/* ---------- Data ---------- */

async function loadExtensions() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    // opening index.html straight from the file system blocks fetch,
    // so fall back to the same data bundled in fallback-data.js
    console.warn("Falling back to bundled data:", error.message);
    return window.EXTENSIONS_DATA || [];
  }
}

async function init() {
  initTheme();
  extensions = await loadExtensions();
  render();
}

init();
