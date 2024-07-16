export function NavButton(label, onClick) {
  const navigationButtons = document.createElement("button");

  navigationButtons.classList.add("button");
  navigationButtons.dataset.js = "button";
  navigationButtons.textContent = label;
  navigationButtons.addEventListener("click", onClick);
  return navigationButtons;
}
