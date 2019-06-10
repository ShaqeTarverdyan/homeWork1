import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducer/reducer';
import thunk from 'redux-thunk';
import {getAllPeople} from '../Actions/actions';

const store = createStore(reducer,applyMiddleware(thunk));
store.dispatch(getAllPeople())
export default store;