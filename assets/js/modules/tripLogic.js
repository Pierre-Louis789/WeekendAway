// === Trip Card Logic ===
import { clubs } from '../../data/clubs.js';

export async function fetchTrips() {
  try {
    const res = await fetch('/assets/data/trips.json'); // Absolute path
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const trips = await res.json();
    return trips;
  } catch (err) {
    console.error('Error fetching trips:', err);
    return [];
  }
}

function matchClubMeta(title) {
  const keywords = title.toLowerCase().split(/\s+/);
  return clubs.find(club =>
    club?.name && keywords.some(kw => club.name.toLowerCase().includes(kw))
  );
}

export function createTripCard(trip, clubMeta) {
  const stadium = clubMeta?.stadium || trip.alt;
  const imageSrc = trip.image
    ? `assets/img/${trip.image}`
    : `assets/img/placeholder.jpg`;

  return createCardHTML({
    title: trip.title,
    stadium,
    details: trip.details,
    imageSrc,
    alt: trip.alt,
    affiliate: clubMeta?.affiliate,
    clubSlug: clubMeta?.name?.toLowerCase().replace(/\s+/g, '-')
  });
}

function createCardHTML({ title, stadium, details, imageSrc, alt, affiliate, clubSlug }) {
  const card = document.createElement('div');
  card.classList.add('trip-card');
  card.innerHTML = `
    <img 
      src="assets/img/placeholder.jpg" 
      data-src="${imageSrc}" 
      alt="${alt}" 
      class="trip-card__image lazy"
    />
    <div class="trip-card__content">
      <h3 class="trip-card__title">${title}</h3>
      <p class="trip-card__details">${stadium}</p>
      <p class="trip-card__details">${details}</p>
      <div class="trip-card__actions">
        <a href="${affiliate?.tickets || '#'}" class="button">Book Now</a>
        <a href="${affiliate?.hotel || '#'}" class="button button--secondary">Hotel</a>
        <a href="${affiliate?.flights || '#'}" class="button button--outline">Flights</a>
      </div>
      <div class="trip-card__footer">
        <a href="trip.html?id=${clubSlug}" class="trip-card__link">Explore More</a>
      </div>
    </div>
  `;
  return card;
}

export async function renderTrips(containerId, keyword = "") {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const trips = await fetchTrips();
  const filteredTrips = keyword
    ? trips.filter(t => t.title.toLowerCase().includes(keyword.toLowerCase()))
    : trips;

  filteredTrips.forEach(trip => {
    const clubMeta = matchClubMeta(trip.title);
    const card = createTripCard(trip, clubMeta);
    container.appendChild(card);
  });

  initLazyLoad();
}

function initLazyLoad() {
  const lazyImages = document.querySelectorAll("img.lazy");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        obs.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => observer.observe(img));
}
