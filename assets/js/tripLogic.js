// === Trip Card Logic ===

// Sample trip data (replace with real API or data source)
const tripData = [
  {
    id: 1,
    team: "Liverpool",
    league: "premier",
    country: "uk",
    date: "2025-09-12",
    stadium: "Anfield",
    thumbnail: "assets/img/liverpool.jpg"
  },
  {
    id: 2,
    team: "Dortmund",
    league: "bundesliga",
    country: "germany",
    date: "2025-09-20",
    stadium: "Signal Iduna Park",
    thumbnail: "assets/img/dortmund.jpg"
  }
];

// === DOM References ===
const grid = document.getElementById("trip-grid");
const form = document.getElementById("tripFilters");

// === Render Function ===
function renderTrips(trips) {
  grid.innerHTML = ""; // Clear grid
  trips.forEach(trip => {
    const card = document.createElement("div");
    card.classList.add("trip-card");
    card.innerHTML = `
      <img src="${trip.thumbnail}" alt="${trip.team}" />
      <h3>${trip.team}</h3>
      <p>${trip.stadium}</p>
      <p>${trip.date}</p>
    `;
    grid.appendChild(card);
  });
}

// === Filter Handler ===
form.addEventListener("submit", e => {
  e.preventDefault();
  const league = form.league.value;
  const country = form.country.value;
  const date = form.date.value;

  const filtered = tripData.filter(trip => {
    return (
      (!league || trip.league === league) &&
      (!country || trip.country === country) &&
      (!date || trip.date === date)
    );
  });

  renderTrips(filtered);
});

// === Initial Render ===
renderTrips(tripData);
