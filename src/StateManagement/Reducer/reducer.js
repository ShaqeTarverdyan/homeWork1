const initialState = {
    loading: false,
    error: null,
    peoples: [],
    people: {
        name: '',
        username: '',
        email: '',
        // address:{
        //     street:'',
        //     suite:'',
        //     city:'',
        //     zipcode:'',
        //     geo:{
        //         lat:'',
        //         lng:''
        //     }
        // },
        phone: '',
        website: '',
        // company:{
        //     name:'',
        //     catchPhrase:'',
        //     bs:'',
        // }
    }

}
const reducer = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type === 'GET_PEOPLE') {
        const newStateAfterRequest = {
            ...newState,
            peoples: action.payload
        }
        return newStateAfterRequest;
    }
    else if (action.type === 'GET_INPUT_VALUE') {
        const event = action.payload
        const newPeople = { ...newState.people, [event.target.name]: event.target.value }
        return { ...newState, people: newPeople }
    }
    else if (action.type === 'ADD_PEOPLE_TO_STORE') {
        const resp = action.payload;
        const updatedState = [
            ...newState.peoples,
            {
                name:resp.name,
                username:resp.username,
                email:resp.email,
                phone:resp.phone,
                website:resp.website
            }
        ]
        const test = [...newState.peoples, updatedState]
        console.log('test',test) 
    }
    else if(action.type === 'DELETE_ITEM') {
        const id=action.payload.id
        const remainder =[ ...newState.peoples.filter(people => people.id !== id)]
        console.log(remainder)
    }
    return newState
}

export default reducer;