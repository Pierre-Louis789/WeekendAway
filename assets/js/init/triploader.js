// triploader.js
export async function loadTrips() {
  const res = await fetch('/assets/data/trips.json');
  const data = await res.json();
  return data;
}
