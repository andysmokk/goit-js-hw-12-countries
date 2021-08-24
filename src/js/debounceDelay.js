import onSearchCountry from './searchCountry';

var debounce = require('lodash.debounce');
const debounceDelay = debounce(onSearchCountry, 600);

export default debounceDelay;
