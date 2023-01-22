export function fetchCountries(nameСountrys) {
  return fetch(
    `https://restcountries.com/v3.1/name/${nameСountrys}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
      //   throw Error(response.statusText);
    }
    return response.json();
  });
}

// Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
//
//
