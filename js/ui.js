export class Ui {
  displayGames(games) {
    let content = "";
    for (let i = 0; i < games.length; i++) {
      content += `
      <div class="col">
      <div
        data-id="${games[i].id}"
        class="card h-100 bg-transparent"
        role="button"
      >
        <div class="card-body">
          <figure class="position-relative">
            <img
              class="card-img-top object-fit-cover h-100"
              src="${games[i].thumbnail}"
            />
          </figure>
          <figcaption>
            <div class="hstack justify-content-between">
              <h3 class="h6 small">${games[i].title}</h3>
              <span class="badge text-bg-primary p-2">Free</span>
            </div>

            <p
              class="card-text text-white small text-center opacity-50"
            >
            ${games[i].short_description.split(" ", 8)}
            </p>
          </figcaption>
        </div>

        <footer
          class="card-footer small hstack justify-content-between"
        >
          <span class="badge badge-color">${games[i].genre}</span>
          <span class="badge badge-color">${games[i].platform}</span>
        </footer>
      </div>
    </div>
      `;
    }
    document.getElementById("gameData").innerHTML = content;
  }
  displayGameDetails(game) {
    const content = `
    <div class="col-md-4">
    <img src="${game.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
    <h3>Title: ${game.title}</h3>
    <p>Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
    <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
    <p>Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
    <p class="small">${game.description}</p>
    <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
    </div>`;

    document.getElementById("detailsContent").innerHTML = content;
  }
}
