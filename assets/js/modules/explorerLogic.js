// js/modules/explorerLogic.js
import { createTripCard } from './tripLogic.js';
import { loadTrips } from '../init/triploader.js';
import { clubs } from '../../data/clubs.js';
import { initTypeahead } from './typeahead.js';
import { experiences } from '../init/experiences.js';
import { renderExperienceSlider } from './experienceLogic.js';

const inputEl = document.getElementById('searchInput');
const tripContainer = document.getElementById('trip-grid');

// 🔁 Slug alias normalization
const slugAliasMap = {
  "liverpool-fc": "liverpool",
  "manchester-united": "manchester united",
  "fc-porto": "porto",
  "porto": "fc-porto",
  "ajax": "afc-ajax",
  "benfica": "sl-benfica",
  "juventus": "juventus-fc",
  "juventus-fc": "juventus"
};

function normalizeSlug(slug) {
  const clean = slug?.toLowerCase()?.trim();
  return slugAliasMap[clean] || clean;
}

// 🧠 Enrich trips with club metadata
function enrichTrips(rawTrips) {
  return rawTrips.map(trip => {
    const tripSlug = normalizeSlug(trip.slug);
    const clubMeta = clubs.find(c => normalizeSlug(c.slug) === tripSlug);

    if (!clubMeta) console.error(`❌ No club match for: ${tripSlug}`);

    return {
      ...trip,
      clubName: clubMeta?.name,
      city: clubMeta?.city,
      stadium: clubMeta?.stadium,
      country: clubMeta?.country,
      tags: clubMeta?.tags || [],
      affiliate: clubMeta?.affiliate || {}
    };
  });
}

// 🧠 Tag trips with experience categories
function tagExperiences(trips) {
  trips.forEach(trip => {
    const stadiumText = String(trip.stadium || '').toLowerCase();
    const titleText = String(trip.title || '').toLowerCase();
    const cityText = String(trip.city || '').toLowerCase();
    const tagsText = trip.tags?.map(t => t.toLowerCase()) || [];

    trip.experienceTags = [];

    if (tagsText.includes('spa') || stadiumText.includes('wellness')) {
      trip.experienceTags.push('spa-stadium');
    }
    if (cityText.includes('brighton') || tagsText.includes('sea')) {
      trip.experienceTags.push('sea-view-weekender');
    }
    if (tagsText.includes('boat') || titleText.includes('houseboat')) {
      trip.experienceTags.push('houseboat-fixtures');
    }
    if (tagsText.includes('rooftop') || titleText.includes('sky')) {
      trip.experienceTags.push('rooftop-rivalry');
    }
  });
}

// 🔍 Keyword scoring for fuzzy search
function calculateScore(trip, keywords) {
  let score = 0;
  const fields = {
    title: trip.title,
    club: trip.clubName,
    city: trip.city,
    stadium: trip.stadium,
    country: trip.country,
    tags: trip.tags?.join(' ') || ''
  };

  keywords.forEach(keyword => {
    for (const val of Object.values(fields)) {
      if (String(val).toLowerCase().includes(keyword)) score += 2;
    }
  });

  return score;
}

function scoreAndFilterTrips(trips, input, minScore = 2) {
  const keywords = input.toLowerCase().split(/\s+/).filter(Boolean);

  return trips
    .map(trip => ({ ...trip, score: calculateScore(trip, keywords) }))
    .filter(trip => trip.score >= minScore)
    .sort((a, b) => b.score - a.score);
}

// 🖼️ Render trip cards
function renderResults(trips) {
  tripContainer.innerHTML = '';

  if (trips.length === 0) {
    tripContainer.innerHTML = `<p class="no-results">No trips found.</p>`;
    return;
  }

  trips.forEach(trip => {
    const card = createTripCard(trip);
    card.classList.add('trip-card');
    card.dataset.slug = trip.slug;
    tripContainer.appendChild(card);
  });

  tripContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 🎯 Scroll to highlighted trip
function scrollToTrip(slug) {
  const card = tripContainer.querySelector(`.trip-card[data-slug="${slug}"]`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('highlighted');
    setTimeout(() => card.classList.remove('highlighted'), 1200);
  }
}

// 🚀 Load, enrich, tag, and initialize
loadTrips().then(rawTrips => {
  const enrichedTrips = enrichTrips(rawTrips);
  tagExperiences(enrichedTrips);
  renderExperienceSlider(experiences, enrichedTrips);

  initTypeahead(inputEl, enrichedTrips, (inputOrTrip) => {
    if (typeof inputOrTrip === 'string') {
      const suggestions = scoreAndFilterTrips(enrichedTrips, inputOrTrip);
      renderResults(suggestions);
    } else {
      renderResults([inputOrTrip]);
      scrollToTrip(inputOrTrip.slug);
    }
  });

  renderResults(enrichedTrips);

  const unmatched = enrichedTrips.filter(t => !t.clubName).map(t => t.slug);
  if (unmatched.length) console.warn("🚨 Unmatched trip slugs:", unmatched);
});
