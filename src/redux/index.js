import {createStore, compose} from 'redux';
import rootReducer from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const initState = {};
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const store = createStore(rootReducer(), initState, composeFunc());

export default store;



// import {createStore, compose} from 'redux';
// import rootReducer from "./reducers/rootReducer";

// const initState = {};

// const store = createStore(rootReducer(), initState);

// export default store;
