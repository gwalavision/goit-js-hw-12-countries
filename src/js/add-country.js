import searchedCountry from '../templates/one-country-info.hbs'
import countryList from '../templates/countries-list.hbs'
import refs from './refs'
import toastr from 'toastr'

const addCountryMarkup = (item) => {
     if (item.length === 1) {
        refs.countriesContainer.insertAdjacentHTML('beforeend', searchedCountry(item))
    }
   
    else if (item.length <= 10 && item.length >= 2) {
       refs.countriesContainer.insertAdjacentHTML('beforeend', countryList(item)) 
    } 
    
     else if (item.length > 10) {
         toastr.error('Too many matches found. Please enter a more specific query!')
    }
}   
export default addCountryMarkup