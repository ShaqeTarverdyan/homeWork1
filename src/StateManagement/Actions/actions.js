import { ADD_PEOPLE,DELETE_PEOPLE,GET_PEOPLE} from './types';
import axios from 'axios';
//

export  const AddPeople = ({name, username, email, phone, website}) => {
    return (dispatch) => {
        return axios.post('https://jsonplaceholder.typicode.com/users', {
            name, username, email, phone, website
        })
        .then(response => {
            console.log('testadd',response)
            dispatch(addPeopleSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const addPeopleSuccess = (data) => {
    return {
        type:ADD_PEOPLE,
        payload: {
            id:data.id,
            name:data.name,
            username:data.username,
            email:data.email,
            phone:data.phone,
            website:data.website
        }
    }
};

export const deletePeopleSuccess = id => {
    return {
        type:DELETE_PEOPLE,
        payload:{id}
    }
}

export const  deletePeople = id => {
    return (dispatch) => {
        return axios.delete(`https://jsonplaceholder.typicode.com/user${id}`)
        .then(response => {
            dispatch(deletePeopleSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const getPeople = (resp) => {
    return {
        type:GET_PEOPLE,
        payload:resp
    }
}

export const getAllPeople = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            dispatch(getPeople(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};