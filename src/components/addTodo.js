import React from 'react';
import {useDispatch} from 'react-redux';
import { updateTodos } from '../redux/reducers/reducerTodo';


const AddTodo = () => {
    const dispatch = useDispatch ();
    const formHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodos(e.target.children[0].value))
        e.target.children[0].value = '';
    }
    return (
   <form className='form-todo' onSubmit={formHandler}>
           <input type="text" />
       <button type='submit' >add todo</button>
   </form>
    );
}

export default AddTodo;