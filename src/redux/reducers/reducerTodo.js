const UPDATE_TODOS = "UPDATE_TODOS";
const DELETED_TODOS = "DELETED_TODOS";
const STATUS_BTN = "STATUS_BTN";
const DONE_TODOS = "DONE_TODOS";
const IMP_TODO = "IMP_TODO";
const SEARCH_INPUT = "SEARCH_INPUT";
const EMPTY_TODO = "EMPTY_TODO";
const DELETE_ALL = "DELETE_ALL";


const initState = {
  todos: [],
  statusBtn: "all",
  filteredTodo: [],
  searchInput: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_INPUT: {
      return {
        ...state,
        searchInput: action.searchInput,
      };
    }
    case IMP_TODO: {
      return { ...state, todos: action.todos };
    }
    case DONE_TODOS: {
      return { ...state, todos: action.todos };
    }
    case DELETED_TODOS: {
      return { ...state, todos: action.todos };
    }
    case UPDATE_TODOS: {
      return { ...state, todos: [...state.todos, action.todo] };
    }
    case STATUS_BTN: {
      return { ...state, statusBtn: action.statusBtn };
    }
    case EMPTY_TODO: {
      return { ...state, todos: action.todos };
    }
    case DELETE_ALL: {
      return {
        ...state,
        todos: action.todos,
      };
    }
    default: {
      return state;
    }
  }
};

export const updateTodos = (inputText) => {
  return {
    type: UPDATE_TODOS,
    todo: {
      todoName: inputText,
      id: Math.round(Math.random() * 1000),
      isActive: true,
      isDone: false,
      isDeleted: false,
      isImportant: false,
    },
  };
};

export const deletedTodos = (newArr) => {
  return {
    type: DELETED_TODOS,
    todos: newArr,
  };
};

export const deleteAll = (newArr) => {
  return {
    type: DELETE_ALL,
    todos: newArr,
  };
};

export const doneTodo = (newArr) => {
  return {
    type: DONE_TODOS,
    todos: newArr,
  };
};

export const impTodo = (newArr) => {
  return {
    type: IMP_TODO,
    todos: newArr,
  };
};

export const statusBtn = (status) => {
  return {
    type: STATUS_BTN,
    statusBtn: status,
  };
};

export const setSearchInput = (newArr) => {
  return {
    type: SEARCH_INPUT,
    searchInput: newArr,
  };
};

export const emptyTodo = (todo) => {
  return {
    type: EMPTY_TODO,
    todos: todo,
  };
};
