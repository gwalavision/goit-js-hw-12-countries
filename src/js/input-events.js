import refs from './refs'
import fetchCountries from './fetch-countries.js'
import addCountryMarkup from './add-country.js'
import toastr from 'toastr'





const typeInput = e => {
    e.preventDefault()

    const inputValue = e.target.form.elements.query.value

    refs.countriesContainer.innerHTML = ''

    fetchCountries(inputValue)
        .then(addCountryMarkup)
        .catch(() => {
            if (inputValue === '') {
                toastr.warning('Please, type your query!')
            }
        })
        .catch(() => {
             if
                (inputValue !== '') {
                toastr.error('There is no such country found, please specify your query!')
            }    
    })
               
} 

export default typeInput