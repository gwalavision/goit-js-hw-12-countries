
function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`

    const refs = {
        countriesContainer: document.querySelector('.js-countries-container'),
    }

    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Error fetching data')
        })
        .catch(error => console.log(error))
}

export default fetchCountries