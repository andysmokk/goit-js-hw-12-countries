import './sass/main.scss';

var debounce = require('lodash.debounce');

import { error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

import countryCardTpl from './templates/country-card.hbs';
import listCountriesTpl from './templates/list-countries.hbs';
import refs from './js/refs';

refs.inputRef.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  refs.inputRef.textContent = e.target.value;
  const searchCountry = e.target.value;

  fetchCountry(searchCountry).then(renderCountryCard).catch(onFetchError);
}

function fetchCountry(country) {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      return response.json();
    })
    .catch(onFetchError);
}

function renderCountryCard(country) {
  if (country.length > 1 && country.length <= 10) {
    const markupList = listCountriesTpl(country);
    refs.cardContainer.innerHTML = markupList;
  } else if (country.length === 1) {
    const markupCountry = countryCardTpl(country);
    refs.cardContainer.innerHTML = markupCountry;
  } else if (country.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  } else {
    onFetchError();
  }
}

function onFetchError() {
  const markupError = `<h1>Enter the correct country name</h1>`;
  refs.cardContainer.innerHTML = markupError;
}
