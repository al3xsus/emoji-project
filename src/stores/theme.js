import { writable } from 'svelte/store';

// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize theme from localStorage or system preference
const storedTheme = localStorage.getItem('theme');
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

// Create writable store
export const theme = writable(initialTheme);

// Subscribe to theme changes and update localStorage and document
theme.subscribe(value => {
  localStorage.setItem('theme', value);
  document.documentElement.setAttribute('data-theme', value);
});

// Set initial theme on load
document.documentElement.setAttribute('data-theme', initialTheme);

// Listen to system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    theme.set(e.matches ? 'dark' : 'light');
  }
});
