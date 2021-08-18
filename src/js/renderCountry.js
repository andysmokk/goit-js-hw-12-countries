import { error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

import getRefs from './get-refs';
import listCountriesTpl from '../templates/list-countries.hbs';
import countryCardTpl from '../templates/country-card.hbs';
import onFetchError from './fetchError';

const refs = getRefs();

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

export default renderCountryCard;
