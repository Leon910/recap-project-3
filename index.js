import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { searchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
//const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');
//const searchInput = document.querySelector('[data-js="search-bar__input"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${encodeURIComponent(
        searchQuery
      )}`
    );
    console.log(response);
    const data = await response.json();
    maxPage = data.info.pages;
    cardContainer.innerHTML = "";
    pagination.textContent = `${page} / ${maxPage}`;
    data.results.forEach((character) => {
      const cardElement = CharacterCard(character);
      cardContainer.append(cardElement);
    });
  } catch (error) {
    console.error("Could not fetch data", error);
  }
}

fetchCharacters();
const pagination = NavPagination(page, maxPage);

const previousClick = () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
};

const nextClick = () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
};

const previousButton = NavButton("previous", previousClick);
const nextButton = NavButton("next", nextClick);

navigation.append(previousButton, pagination, nextButton);

searchBarContainer.append(
  searchBar(
    (submitEvent) => {
      submitEvent.preventDefault();
      const formData = new FormData(event.target);
      const query = formData.get("query").trim();
      searchQuery = query;
      fetchCharacters();
    },
    (inputEvent) => {
      searchQuery = inputEvent;
      page = 1;
      fetchCharacters();
    }
  )
);

fetchCharacters();

// function updatePagination() {
//   pagination.textContent = `${page} / ${maxPage}`;
// }

/*searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchBar);
  searchQuery = formData.get("query").trim();
  page = 1;
  fetchCharacters();
});

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim();
  if (query === "") {
    searchQuery = "";
    page = 1;
    fetchCharacters();
  }
});*/
