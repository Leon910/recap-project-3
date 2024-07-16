export function NavPagination(page, maxPage) {
  const navigationPagination = document.createElement("span");
  navigationPagination.classList.add("navigation__pagination");
  navigationPagination.dataset.js = "pagination";
  navigationPagination.textContent = `${page} / ${maxPage}`;
  return navigationPagination;
}
