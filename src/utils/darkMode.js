// Icons
const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");
const modeSelectors = document.querySelectorAll(".mode-selector");

// Theme variables
const userTheme = localStorage.theme;
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(userTheme);
console.log(systemTheme);

// Icon toggling
const iconToggle = () => {
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
};

// Initial theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    return;
  }
  sunIcon.classList.add("hidden");
};

// Manual theme switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    iconToggle();
  }
};

// Call theme switch on clicking buttons
modeSelectors.forEach((modeSelector) =>
  modeSelector.addEventListener("click", () => themeSwitch()),
);

// Invoke theme check on initial load
themeCheck();
