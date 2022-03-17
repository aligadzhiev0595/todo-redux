import React from "react";
import { useSelector } from "react-redux";
import { updateTodos } from "../redux/reducers/reducerTodo";
import Todo from "./Todo";

const TodoList = () => {
  const newTodo = useSelector((s) => s.reducerTodo.statusBtn);
  const searchInput = useSelector((s) => s.reducerTodo.searchInput);
  const todos = useSelector((s) => s.reducerTodo.todos);
  return (
    <ul className="todolist">
      {todos
        ? !todos.length
          ? ""
          : todos
              .filter((todo) => {
                switch (newTodo) {
                  case "active": {
                    return todo.isActive && !todo.isDeleted;
                  }
                  case "done": {
                    return todo.isDone && !todo.isActive;
                  }
                  case "recently": {
                    return (
                      (todo.isDeleted && !todo.isActive) ||
                      (todo.isDeleted && !todo.isActive && todo.isDone) ||
                      (todo.isDeleted && todo.isActive && todo.isDone)
                    );
                  }
                  default:
                    return todo && !todo.isDeleted;
                }
              })
              .filter((todo) => {
                return todo.todoName.includes(searchInput);
              })
              .map((el) => <Todo todoObj={el} key={el.id} name={el.todoName} />)
        : updateTodos([])}{" "}
    </ul>
  );
};

export default TodoList;
