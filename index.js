import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

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
    console.log(maxPage);
    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      const cardElement = CharacterCard(character);
      cardContainer.append(cardElement);
    });
  } catch (error) {
    console.error("Could not fetch data", error);
  }
}
fetchCharacters();
