import { renderTrips } from './tripLogic.js';

export function initTripFilters() {
  const form = document.getElementById("tripFilters");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const keyword = form.keyword.value.trim();
    renderTrips("tripContainer", keyword);
  });

  // Initial grid render
  renderTrips("tripContainer");
}
