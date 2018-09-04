window.onload = function() {
  genPortfolio();
};

function genPortfolio() {
  const baseNames = [
    "DnD-5E",
    "react-calculator",
    "react-Drum-Machine",
    "react-Markdown-Previewer",
    "react-Quote-App",
    "react-Pomodoro-Clock",
    "local-Weather-App",
    "pomodoro-Clock",
    "tic-tac-toe",
    "travel-site-tut",
    "twitch-Stream-List",
    "wikipedia-Viewer"
  ];

  const linkNames = [
    "DnD_5E_Site",
    "React-calculator",
    "React-drumMachine",
    "React-markdownPreviewer",
    "React-quoteApp",
    "React-pomodoroClock",
    "localWeatherApp",
    "pomodoroClock",
    "tictactoe",
    "travel-site-tut",
    "twitchStreamList",
    "wikipediaViewer"
  ];

  for (let i = 0; i < baseNames.length; i++) {
    const markup = `
      <a class="portfolio-image" href="https://marzdor.github.io/${
        linkNames[i]
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
