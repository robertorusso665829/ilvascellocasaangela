const toggle = document.querySelector('#language');
const copy = Array.from(document.querySelectorAll('[data-en]'), element => ({
  element, italian: element.textContent, english: element.dataset.en
}));
const descriptions = Array.from(document.querySelectorAll('[data-alt-en]'), element => ({
  element, italian: element.alt, english: element.dataset.altEn
}));

toggle.addEventListener('click', () => {
  const english = document.documentElement.lang === 'it';
  document.documentElement.lang = english ? 'en' : 'it';
  for (const entry of copy) {
    entry.element.textContent = english ? entry.english : entry.italian;
  }
  for (const entry of descriptions) {
    entry.element.alt = english ? entry.english : entry.italian;
  }
  toggle.textContent = english ? 'IT' : 'EN';
  toggle.lang = english ? 'it' : 'en';
  toggle.setAttribute('aria-label', english ? 'Passa all’italiano' : 'Switch to English');
});
