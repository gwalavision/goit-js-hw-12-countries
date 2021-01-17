import './styles.css';
import refs from './js/refs'
import debounce from 'lodash.debounce'
import typeInput from './js/input-events'


const debouncedInput = debounce(typeInput, 350)

refs.searchForm.addEventListener('input', debouncedInput)
