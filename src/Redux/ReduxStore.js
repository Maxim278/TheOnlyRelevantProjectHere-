import {createStore, combineReducers} from 'redux';
import postPageReducer from '../Reducers/PostPageReducer'

let reducers = combineReducers({ //По сути STATE
    postPageState : postPageReducer,
})
let store = createStore(reducers);
//window.store = store;

export default store;