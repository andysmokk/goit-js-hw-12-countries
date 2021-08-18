import getRefs from './get-refs';
import renderCountryCard from './renderCountry';
import onFetchError from './fetchError';
import API from './fetchCountries';

const refs = getRefs();

function onSearchCountry(e) {
  refs.inputRef.textContent = e.target.value;
  const searchCountry = e.target.value;

  API.fetchCountry(searchCountry).then(renderCountryCard).catch(onFetchError);
}

export default onSearchCountry;
