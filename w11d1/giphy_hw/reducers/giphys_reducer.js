import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (oldState = [], action) => {
    Object.freeze(oldState); 
    let newState = {...oldState}; 
    switch(action.type) {
        case RECEIVE_SEARCH_GIPHYS:
            return newState['giphys'] = action.giphys; 
        default:
            return oldState; 
    }
} 

export default giphysReducer; 