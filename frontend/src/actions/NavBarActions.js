import { SEARCH_TERM } from './types';

export const searchTerm = (value) => dispatch => {
    dispatch({
        type: SEARCH_TERM,
        payload: value
    })
}