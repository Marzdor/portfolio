window.onload = function() {
  genPortfolio();
};

function genPortfolio() {
  const baseNames = [
    "DnD-5E",
    "MERN-Stack",
    "react-calculator",
    "react-Drum-Machine",
    "react-Markdown-Previewer",
    "react-Quote-App",
    "react-Pomodoro-Clock",
    "solorio",
    "local-Weather-App",
    "pomodoro-Clock",
    "tic-tac-toe",
    "travel-site-tut",
    "twitch-Stream-List",
    "wikipedia-Viewer"
  ];

  const linkNames = [
    "DnD_5E_Site",
    "MERN-Stack",
    "React-calculator",
    "React-drumMachine",
    "React-markdownPreviewer",
    "React-quoteApp",
    "React-pomodoroClock",
    "solorio",
    "localWeatherApp",
    "pomodoroClock",
    "tictactoe",
    "travel-site-tut",
    "twitchStreamList",
    "wikipediaViewer"
  ];

  for (let i = 0; i < baseNames.length; i++) {
    let markup;

    if (baseNames[i] === "MERN-Stack") {
      markup = `
        <a class="portfolio-image" href="https://infinite-garden-94657.herokuapp.com/" target="_blank">
              <div class="project-tile">
                  <img src="images/${baseNames[i]}_small.png" srcset="images/${
        baseNames[i]
      }.png 1400w" alt="Thumbnail of ${baseNames[i]} website.">
                  <h4 class="caption">${baseNames[i].replace(/-/g, " ")}</h4>
              </div>
          </a>
        `;
    } else {
      markup = `
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
    }
    const target = document.querySelector("#projects");
    target.insertAdjacentHTML("beforeend", markup);
  }
}
