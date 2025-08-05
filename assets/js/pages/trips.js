import { clubs } from '../../data/clubs.js';

export function createTripCard(trip, clubMeta = {}) {
  const badge = clubMeta.logo || '';
  const stadium = trip.stadium || clubMeta.stadium || 'Unknown';

  const card = document.createElement('div');
  card.className = 'trip-card';
  card.innerHTML = `
    <img src="${trip.thumbnail}" alt="${trip.team}" class="trip-card__image"/>
    <div class="trip-card__content">
      <h3 class="trip-card__title">
        ${trip.team}
        ${badge ? `<img src="${badge}" alt="${trip.team} badge" class="club-badge"/>` : ''}
      </h3>
      <p class="trip-card__details">${stadium}</p>
      <p class="trip-card__details">${trip.date}</p>
      <div class="trip-card__actions">
        <a href="/trip.html?id=${trip.id}" class="button">Explore More</a>
      </div>
    </div>
  `;
  return card;
}

export function renderTrips(containerId = 'allTripsContainer') {
  const container = document.getElementById(containerId);

  fetch('/assets/data/trips.json')
    .then(res => res.json())
    .then(trips => {
      trips.forEach(trip => {
        const clubMeta = clubs.find(
          club => club.name.toLowerCase() === trip.team.toLowerCase()
        );
        const card = createTripCard(trip, clubMeta);
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Trip loading error:', err);
    });
}
