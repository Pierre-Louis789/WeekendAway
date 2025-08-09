import { getSuggestions } from './searchLogic.js';

export function initTypeahead(inputEl, trips, onSelect) {
  inputEl.classList.add('typeahead-input');
  inputEl.parentNode.classList.add('typeahead-wrapper');

  const dropdown = document.createElement('ul');
  dropdown.className = 'typeahead-dropdown';
  inputEl.parentNode.appendChild(dropdown);

  let debounceTimer;
  let currentFocus = -1;

  inputEl.addEventListener('input', () => {
    const query = inputEl.value.trim();
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      const suggestions = getSuggestions(query, trips);
      renderDropdown(suggestions.slice(0, 5), dropdown, inputEl, onSelect);
      currentFocus = -1;
    }, 200);
  });

  inputEl.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('li');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      currentFocus = (currentFocus + 1) % items.length;
      setActive(items);
    } else if (e.key === 'ArrowUp') {
      currentFocus = (currentFocus - 1 + items.length) % items.length;
      setActive(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFocus > -1) items[currentFocus].click();
    }
  });
}

function renderDropdown(suggestions, dropdown, inputEl, onSelect) {
  dropdown.innerHTML = '';

  suggestions.forEach(trip => {
    const li = document.createElement('li');
    li.className = 'typeahead-item';
    li.textContent = trip.title || trip.clubName || trip.slug;
    li.addEventListener('click', () => {
      inputEl.value = trip.title || trip.clubName || trip.slug;
      dropdown.innerHTML = '';
      onSelect(trip);
    });
    dropdown.appendChild(li);
  });
}

function setActive(items) {
  items.forEach(item => item.classList.remove('active'));
  if (items[currentFocus]) items[currentFocus].classList.add('active');
}
