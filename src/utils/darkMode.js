window.onload = darkClassToggle();

function darkClassToggle() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

const lightMode = document.getElementById("sun");
console.log(lightMode);
const darkMode = document.getElementById("moon");

lightMode.addEventListener("click", setLightMode);

darkMode?.addEventListener("click", () => (localStorage.theme = "dark"));

function setLightMode() {
  console.log("Light mode clicked");
}
