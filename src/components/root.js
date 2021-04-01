import React from 'react';
import AddTodo from './addTodo';
import SearchPanel from './searchPanel';
import TodoList from './todoList';
import Header from './header';
import store from '../redux';
import {Provider} from 'react-redux';

const Root = () => {
    return (
        <div className='app'>
            <Provider store={store}>
                <Header/>
            <SearchPanel/>
            <TodoList/>
            <AddTodo/>
            </Provider>
        </div>
    );
};

export default Root;