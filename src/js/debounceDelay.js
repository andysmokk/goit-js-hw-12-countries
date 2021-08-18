import onSearchCountry from './searchCountry';

var debounce = require('lodash.debounce');
const debounceDelay = debounce(onSearchCountry, 500);

export default debounceDelay;
