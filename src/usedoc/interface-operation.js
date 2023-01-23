import { Notify } from 'notiflix/build/notiflix-notify-aio';
import listCountrisTemp from '../templetCard/listCards.hbs';
import oneCountrTeml from '../templetCard/oneCount.hbs';

const listRef = document.querySelector('.country-list');
const infoRef = document.querySelector('.country-info');

export function queryProcessing(count) {
  if (count.length >= 2 && count.length <= 10) {
    return renderCountriesList(count);
  } else if (count.length === 1) {
    return renderOneCountry(count);
  } else if (count.length >= 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

function renderCountriesList(el) {
  listRef.insertAdjacentHTML('beforeend', listCountrisTemp(el));
}

function renderOneCountry(el) {
  infoRef.insertAdjacentHTML('beforeend', oneCountrTeml(el));
}

export function clearInterface() {
  infoRef.innerHTML = '';
  listRef.innerHTML = '';
}
export function badNameQuery() {
  return Notify.failure('Oops, there is no country with that name');
}
