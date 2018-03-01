import ApiClient from '../api/client'
import { LOAD_ERROR } from './loading'


export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'

const api = new ApiClient()

export default () => {
    return dispatch => {
        api.get('/countries')
            .then(res => {
                dispatch({ 
                    type: FETCH_COUNTRIES,
                    payload: JSON.parse(res.text)
                })
            })
            .catch(error => {
                dispatch({
                    type: LOAD_ERROR,
                    payload: error.message
                })
            })
    }
}