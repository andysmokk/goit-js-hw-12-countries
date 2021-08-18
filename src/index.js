import './sass/main.scss';

import getRefs from './js/get-refs';
import debounceDelay from './js/debounceDelay';

const refs = getRefs();

refs.inputRef.addEventListener('input', debounceDelay);
