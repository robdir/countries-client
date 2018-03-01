import {FETCH_COUNTRIES} from '../actions/fetch'

// it must be this reducer which is returning both countries as an empty and full array.  

export default (state = [], { type, payload } = {}) => {
    switch (type) {
        case FETCH_COUNTRIES :
            return [...payload].concat(state)

        default : 
            return state
    }
} 