import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { updateTodos } from '../redux/reducers/reducerTodo';
import Todo from "./todo";



const TodoList = () => {
    const dispatch = useDispatch();
    const newTodo = useSelector(s => s.reducerTodo.statusBtn)
    const searchInput = useSelector((s) => s.reducerTodo.searchInput);
    const todoArray = useSelector(s => s.reducerTodo.todos);
    return (
        <ul className="todolist">
        {todoArray ? todoArray.length === 0  ? '' :
         todoArray.filter((todo) => {
            switch (newTodo) {
                case 'active':{
                    return todo.isActive && !todo.isDeleted
                }
                case 'done':{
                    return todo.isDone && !todo.isActive
                }
                case 'recently':{
                    return todo.isDeleted && !todo.isActive || todo.isDeleted && !todo.isActive && todo.isDone || todo.isDeleted && todo.isActive && todo.isDone
                }  
                default: return todo && !todo.isDeleted
            }
        }) 
        .filter((todo) => {
            return todo.todoName.includes(searchInput)
        })
        .map((el) => (
                <Todo todoObj={el} key={el.id} name={el.todoName}/>
            )): updateTodos([])}

        </ul>
    );
};

export default TodoList;