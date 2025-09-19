const root = document.documentElement;
const themeSwitcher = document.querySelector("button[data-theme-switcher]");

themeSwitcher.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
});
