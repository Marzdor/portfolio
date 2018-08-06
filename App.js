window.onload = function() {
  genPortfolio();
};

function genPortfolio() {
  const baseNames = [
    "calculator",
    "local-Weather-App",
    "pomodoro-Clock",
    "tic-tac-toe",
    "travel-site-tut",
    "twitch-Stream-List",
    "wikipedia-Viewer",
    "react-Drum-Machine",
    "react-Markdown-Previewer",
    "react-Quote-App"
  ];

  for (let i = 0; i < baseNames.length; i++) {
    const markup = `
      <a class="portfolio-image" href="https://marzdor.github.io/${
        baseNames[i]
      }" target="_blank">
            <div class="project-tile">
                <img src="images/${baseNames[i]}_small.png" srcset="images/${
      baseNames[i]
    }.png 1400w" alt="Thumbnail of ${baseNames[i]} website.">
                <h4 class="caption">${baseNames[i].replace(/-/g, " ")}</h4>
            </div>
        </a>
      `;
    const target = document.querySelector("#projects");
    target.insertAdjacentHTML("beforeend", markup);
  }
}
