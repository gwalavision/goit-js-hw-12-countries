
function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`

    const refs = {
        countriesContainer: document.querySelector('.js-countries-container'),
    }

    return fetch(url)
        .then(res => res.json())
}

export default fetchCountries