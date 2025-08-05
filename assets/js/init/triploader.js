fetch('/assets/data/trips.json')
  .then(res => res.json())
  .then(trips => {
    const container = document.getElementById('trip-grid');

    const featuredTrips = trips.slice(0, 3); // Only top 3

    featuredTrips.forEach(trip => {
      const card = document.createElement('div');
      card.className = 'trip-card';
      card.innerHTML = `
        <img src="/assets/images/${trip.image}" alt="${trip.alt}" class="trip-card__image">
        <div class="trip-card__content">
          <h3 class="trip-card__title">${trip.title}</h3>
          <p class="trip-card__details">${trip.details}</p>
          <div class="trip-card__actions">
            <button class="button">Book Now</button>
            <button class="button button--secondary">Save Trip</button>
            <button class="button button--outline">Explore More</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  });
