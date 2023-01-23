export function fetchCountries(nameСountrys) {
  return fetch(
    `https://restcountries.com/v3.1/name/${nameСountrys}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      //   return Promise.reject(response.statusText);
      throw Error(response.statusText);
    }
    return response.json();
  });
}
