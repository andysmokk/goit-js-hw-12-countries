import onFetchError from './fetchError';

const BASE_URL = 'https://restcountries.eu/rest/v2';

async function fetchCountry(country) {
  const response = await fetch(`${BASE_URL}/name/${country}`);
  const dataResponse = await response.json();
  return dataResponse;
}

export default { fetchCountry };
