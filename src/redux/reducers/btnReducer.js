import * as types from '../actions/actionTypes'


const initState = {
    statusBtn: 'all'
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.STATUS_BTN: 
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
            default:
                return state
        }     
    }