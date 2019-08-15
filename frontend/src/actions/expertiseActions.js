import { NEW_SKILL} from './types';


export const createSkill = (formData) => dispatch => {
    fetch('http://localhost:3000/expertise', {
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
    }))
}
