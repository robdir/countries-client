import {FETCH_COUNTRIES} from '../actions/fetch'

export default (state = [], { type, payload } = {}) => {
    switch (type) {
        case FETCH_COUNTRIES :
            return [...payload].concat(state)

        default : 
            return state
    }
} 