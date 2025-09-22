const root = document.documentElement;
const themeSwitcher = document.querySelector("button[data-theme-switcher]");

themeSwitcher.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
});

const songs = document.querySelector(".songs");

songs.innerHTML = Array.from({ length: 10 })
  .map(
    (_, i) => `
        <li class="song">
          <div>
            <p class="song-name">Song #${i + 1}</p>
            <p class="band-name">Tetherform</p>
          </div>
          <p class="duration">3:${Math.floor(Math.random() * 60)
            .toString()
            .padStart(2, "0")}</p>
        </li>
`
  )
  .join("");
