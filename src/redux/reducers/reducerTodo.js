const UPDATE_TODOS = 'UPDATE_TODOS';

const initialState = {
    todos: []
};



export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TODOS: {
            return {...state, todos: [...state.todos, action.todo]}
        }
        default: {
            return state
        }
    }
}


export const updateTodos = (inputText) => {
    return {type: UPDATE_TODOS, todo: {todoName: inputText,
    id: Math.round(Math.random()*1000),
    isActive: true }}
};