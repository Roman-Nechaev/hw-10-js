import './css/styles.css';
import { fetchCountries } from './API/fetchCountries';
import debounce from 'lodash.debounce';

const inputRef = document.querySelector('input#search-box');
const listRef = document.querySelector('.country-list');
const infoRef = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const search = e.target.value.trim();
  fetchCountries(search)
    .then(fetchCountri)
    .catch(error => console.log('ERROR', error));
  console.log(search);
  clear();
}

function fetchCountri(count) {
  console.log(count.length);
  if (count.length >= 2 && count.length <= 10) {
    return renderList(count);
  } else if (count.length === 1) {
    return renderCountri(count);
  }
}

function renderList(el) {
  el.map(({ name, flags }) => {
    const templ = `
    <li><img src="${flags.svg}" alt=""width=30> <b>${name.official}</li>
    `;
    listRef.insertAdjacentHTML('beforeend', templ);
  });
}

function renderCountri(el) {
  el.map(({ name, capital, population, flags, languages }) => {
    const templ = `
    <img src="${flags.svg}"  alt="" width=60/>  <b>${name.official}
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${languages}</p>
    `;
    infoRef.insertAdjacentHTML('beforeend', templ);
  });
}

function clear() {
  infoRef.innerHTML = '';
  listRef.innerHTML = '';
}

// Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
//
