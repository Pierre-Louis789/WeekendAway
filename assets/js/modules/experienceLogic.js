// js/modules/experienceLogic.js

// Experience logic module
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { createTripCard } from './tripLogic.js';

export function renderExperienceSlider(experiences, enrichedTrips) {
  const wrapper = document.getElementById('experience-slider');
  wrapper.innerHTML = '';

  experiences.forEach(exp => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="experience-card" data-slug="${exp.slug}">
        <img src="${exp.image}" alt="${exp.title}" />
        <h3>${exp.title}</h3>
      </div>
    `;
    wrapper.appendChild(slide);
  });

  new Swiper('.swiper', {
    slidesPerView: 2.5,
    spaceBetween: 16,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  wrapper.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.dataset.slug;
      const filteredTrips = enrichedTrips.filter(trip =>
        trip.experienceTags?.includes(slug)
      );
      renderTripResults(filteredTrips, slug);
    });
  });
}

function renderTripResults(trips, slug) {
  const container = document.getElementById('trip-results');
  container.innerHTML = `<h2>Trips for: ${slug}</h2>`;

  if (trips.length === 0) {
    container.innerHTML += `<p class="no-results">No trips found.</p>`;
    return;
  }

  trips.forEach(trip => {
    const card = createTripCard(trip);
    container.appendChild(card);
  });
}
