import { Ui } from "./ui.js";
import { Details } from "./details.js";
export class Games {
  constructor() {
    this.getGames("mmorpg");
    document.querySelectorAll(".menu a").forEach(link => {
      link.addEventListener("click", e => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });
    this.ui = new Ui();
  }
  async getGames(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e50d43a4demsh15338c42a08d353p17e018jsn09a02bbbad91",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json"
      }
    };
    const response = await fetch(url, options);
    const games = await response.json();
    this.ui.displayGames(games);
    this.addGameEvent();
    loading.classList.add("d-none");
  }
  addGameEvent() {
    document.querySelectorAll(".card").forEach(item =>
      item.addEventListener("click", _ => {
        const id = item.dataset.id;
        this.showDetails(id);
      })
    );
  }

  showDetails(id) {
    const details = new Details(id);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
