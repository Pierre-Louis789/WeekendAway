import { fetchTrips, createTripCard } from './tripLogic.js';
import { clubs } from '../../data/clubs.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tripFilters');
  const container = document.getElementById('tripContainer');

  if (!form || !container) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const league = formData.get('league').toLowerCase();
    const country = formData.get('country').toLowerCase();
    const date = formData.get('date');

    const trips = await fetchTrips();
    const filtered = trips.filter(trip => {
      const matchLeague = league ? trip.league?.toLowerCase().includes(league) : true;
      const matchCountry = country ? trip.country?.toLowerCase().includes(country) : true;
      const matchDate = date ? new Date(trip.date) >= new Date(date) : true;
      return matchLeague && matchCountry && matchDate;
    });

    container.innerHTML = '';
    filtered.forEach(trip => {
      const clubMeta = clubs.find(c => trip.title.toLowerCase().includes(c.name.toLowerCase()));
      const card = createTripCard(trip, clubMeta);
      container.appendChild(card);
    });
  });
});
