window.onload = function () {
    genPortfolio();
}

function genPortfolio() {
    const baseNames = ["calculator", "localWeatherApp", "pomodoroClock", "quoteApp", "tictactoe", "travel-site-tut", "twitchStreamList", "wikipediaViewer"];

    for (let i = 0; i < baseNames.length; i++) {
        const markup = `
      <a class="portfolio-image" href="https://marzdor.github.io/${baseNames[i]}" target="_blank">
            <div class="project-tile">
                <img src="images/${baseNames[i]}_small.png" srcset="images/${baseNames[i]}.png 1400w" alt="Thumbnail of ${baseNames[i]} website.">
                <h4 class="caption">${baseNames[i]}</h4>
            </div>
        </a>
      `;
        const target = document.querySelector("#projects");
        target.insertAdjacentHTML("beforeend", markup);
    }
}