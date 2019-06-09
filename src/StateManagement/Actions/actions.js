import axios from 'axios';
import store from '../Store/store';


export const loading = () => {
    return {
        type: 'LOADING'
    }
}
export const error = () => {
    return {
        type: 'ERROR'
    }
}
export const getPeoples = (data) => {
    return {
        type: 'GET_PEOPLE',
        payload: data
    }
}

export const makeRequsetForGetPeoples = () => {
    return dispatch => {
        dispatch(loading());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => (
                dispatch(getPeoples(resp.data))
            ))
    }
}
export const getInputValue = (event) => {

    return {
        type: 'GET_INPUT_VALUE',
        payload: event
    }
}

export const addPeopleToStore = (resp) => {
    return {
        type: 'ADD_PEOPLE_TO_STORE',
        payload: resp
    }
}

export const addNewPeopleToServer = () => {
    const getStore = store.getState()
    return dispatch => {
        dispatch(loading());
        axios.post('https://jsonplaceholder.typicode.com/users', getStore.people)
            .then(resp => (
                console.log('axios-post', resp),
                dispatch(addPeopleToStore(resp.data))
            ))
    }
}

export const deleteItem = (resp) => {
    return {
        type: 'DELETE_ITEM',
        payload: resp
    }
}

export const deletePeopleFromServer = (id) => {
    return dispatch => {
        dispatch(loading());
        axios.delete(`https://jsonplaceholder.typicode.com/users${id}`)
            .then(resp =>
                dispatch(deleteItem(resp))
            )
    }
}
