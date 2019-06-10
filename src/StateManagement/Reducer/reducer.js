import { ADD_PEOPLE, DELETE_PEOPLE, GET_PEOPLE } from '../Actions/types';
const initialState = {
    peoples:[]
}

const reducer = (state = initialState, action) => {

    const newState = state;
    switch (action.type) {
        case ADD_PEOPLE:
            console.log('add_people_test',action.payload)
            return [...newState.peoples, action.payload];
        case DELETE_PEOPLE:
            console.log('del',action.payload)
            return newState.filter(people => people.id !== action.payload.id)
        case GET_PEOPLE:
            console.log('heeeyy',action.payload)
            return {...newState, peoples:action.payload};
        default:
            return newState;
    }
}

export default reducer;