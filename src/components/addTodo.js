import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateTodos, deleteAll} from "../redux/reducers/reducerTodo";

const AddTodo = ({todoObj}) => {
    const dispatch = useDispatch();
    const todos = useSelector(s => s.reducerTodo.todos);
    const formHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodos(e.target.children[0].value));
        e.target.children[0].value = ''
    };
    const deleteAllHandler = () => {
        dispatch(deleteAll(todos.filter((todo) => !todo.isDeleted ? todo : '' )));
      };
    return (
        <form className="form" onSubmit={formHandler}>
            <input className='input-form' type="text" placeholder='What needs to be done' required/>
            <div>
            <button className={`btn btn-outline-success`} type="submit"><i class="fas fa-plus"></i></button>
            <button className={`btn btn-outline-danger `} onClick={deleteAllHandler} type="button"><i class="fas fa-minus"></i></button>
            </div>
        </form>
    );
};

export default AddTodo;