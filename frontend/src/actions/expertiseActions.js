import { NEW_SKILL} from './types';

const API = "https://mighty-ridge-68327.herokuapp.com";


export const createSkill = (formData) => dispatch => {
    fetch(`${API}/expertise`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
    })
    .then( data => data.json())
    .then( skill => dispatch({
        type: NEW_SKILL,
        payload: skill
        })
    )
}
