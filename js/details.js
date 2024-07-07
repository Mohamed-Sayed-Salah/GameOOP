import { Ui } from "./ui.js";
export class Details {
  constructor(id) {
    this.ui = new Ui();

    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(id) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e50d43a4demsh15338c42a08d353p17e018jsn09a02bbbad91",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      }
    };
    const response = await fetch(url, options);
    const game = await response.json();
    this.ui.displayGameDetails(game);
    loading.classList.add("d-none");
  }
}
