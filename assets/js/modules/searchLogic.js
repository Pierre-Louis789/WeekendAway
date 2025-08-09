// Fuzzy match: checks if all characters in query appear in order (non-contiguous)
export function fuzzyMatch(text, query) {
  if (!text || !query) return false;

  const pattern = query
    .split('')
    .map(char => `(?=.*${char})`)
    .join('');
  const regex = new RegExp(`${pattern}`, 'i');
  return regex.test(text);
}

// Main suggestion engine
export function getSuggestions(query, trips) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  const keywords = normalizedQuery.split(/\s+/);

  return trips
    .map(trip => {
      const fields = {
        title: trip.title || '',
        club: trip.clubName || trip.club || '',
        city: trip.city || '',
        country: trip.country || '',
        stadium: trip.stadium || '',
        tags: Array.isArray(trip.tags) ? trip.tags.join(' ') : ''
      };

      let score = 0;

      keywords.forEach(keyword => {
        for (const val of Object.values(fields)) {
          const lowerVal = String(val).toLowerCase();
          if (lowerVal.includes(keyword)) {
            score += 2;
          } else if (fuzzyMatch(lowerVal, keyword)) {
            score += 0.5;
          }
        }
      });

      return { ...trip, score };
    })
    .filter(trip => trip.score > 0)
    .sort((a, b) => b.score - a.score);
}
