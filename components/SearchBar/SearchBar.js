export function searchBar(onSubmit, onInput) {
  const form = document.createElement("form");
  form.classList.add("search-bar");
  form.dataset.js = "search-bar";

  form.innerHTML = `<input
    name="query"
    class="search-bar__input"
    data-js="search-bar__input"
    type="text"
    placeholder="search characters"
    aria-label="character name"
  />
  <button class="search-bar__button" aria-label="search for character">
    <img
      class="search-bar__icon"
      src="assets/magnifying-glass.png"
      alt=""
    />
  </button>`;
  form.addEventListener("submit", onSubmit);

  const input = form.querySelector('[data-js="search-bar__input"]');
  input.addEventListener("input", (event1) => {
    const query = event1.target.value.trim();
    if (query === "") {
      onInput(query);
    }
  });
  return form;
}
