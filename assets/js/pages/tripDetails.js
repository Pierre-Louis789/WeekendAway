// Extract ID from URL
const params = new URLSearchParams(window.location.search);
const tripId = parseInt(params.get("id"), 10);

fetch('/assets/data/trips.json')
  .then(res => res.json())
  .then(trips => {
    const trip = trips.find(t => t.id === tripId);
    if (!trip) throw new Error("Trip not found");

    const container = document.getElementById("tripDetailContainer");
    container.innerHTML = `
      <section class="trip-detail__header">
        <img src="${trip.thumbnail}" alt="${trip.team}" class="trip-detail__image">
        <div class="trip-detail__info">
          <h1>${trip.team} Matchday Escape</h1>
          <p><strong>Stadium:</strong> ${trip.stadium}</p>
          <p><strong>League:</strong> ${trip.league}</p>
          <p><strong>Country:</strong> ${trip.country}</p>
          <p><strong>Date:</strong> ${trip.date}</p>
          <a href="itinerary.html?id=${trip.id}" class="button">Add to Itinerary</a>
        </div>
      </section>

      <section class="trip-detail__content">
        <!-- You can add hotel options, flights, landmarks, extras here -->
        <h2>What's Included</h2>
        <ul>
          <li>Return flights from major cities</li>
          <li>Hotel near the stadium</li>
          <li>Matchday ticket + fan guide</li>
        </ul>
      </section>
    `;
  })
  .catch(err => {
    console.error(err);
    document.getElementById("tripDetailContainer").innerHTML = "<p>Trip not found or failed to load.</p>";
  });
