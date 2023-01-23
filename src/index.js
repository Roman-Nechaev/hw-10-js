import './css/styles.css';
import debounce from 'lodash.debounce';

import { fetchCountries } from './API/fetchCountries';
import {
  queryProcessing,
  clearInterface,
  badNameQuery,
} from './usedoc/interface-operation';

const inputRef = document.querySelector('input#search-box');
const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const search = e.target.value.trim();
  if (search === '') {
    return;
  }

  fetchCountries(search).then(queryProcessing).catch(badNameQuery);
  clearInterface();
}
