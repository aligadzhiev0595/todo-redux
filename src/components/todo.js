import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletedTodos, doneTodo, impTodo } from "../redux/reducers/reducerTodo";

const Todo = ({ name, todoObj }) => {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.reducerTodo.todos);
  const status = useSelector((s) => s.reducerTodo.statusBtn);
  const deleteHandler = () => {
    dispatch(
      deletedTodos(
        todos.map((todo) =>
          todo.id === todoObj.id
            ? { ...todo, isDeleted: !todo.isDeleted, isActive: !todo.isActive }
            : todo
        )
      )
    );
  };

  const doneHandler = () => {
    dispatch(
      doneTodo(
        todos.map((todo) =>
          todo.id === todoObj.id
            ? { ...todo, isActive: !todo.isActive, isDone: !todo.isDone }
            : todo
        )
      )
    );
  };

  const impHandler = () => {
    dispatch(
      impTodo(
        todos.map((todo) =>
          todo.id === todoObj.id
            ? { ...todo, isImportant: !todo.isImportant }
            : todo
        )
      )
    );
  };

  return (
    <li className="todo">
      <p
        className={`task-text ${
          !todoObj.isActive && todoObj.isDone ? "done" : ""
        } ${!todoObj.isImportant ? "" : "imp"} `}
      >
        {name}
      </p>
      <div className="buttons">
        <button
          type="button"
          className={`btn btn-outline-success ${
            todoObj.isActive ? "" : "active"
          }`}
          onClick={doneHandler}
        >
          <i class="fas fa-check"></i>
        </button>
        <button
          className={`btn btn-outline-warning ${
            todoObj.isImportant ? "active" : ""
          }`}
          onClick={impHandler}
        >
          <i class="fas fa-star"></i>
        </button>
        {status === "recently" ? (
          <button
            className={`btn btn-o  utline-danger`}
            onClick={deleteHandler}
          >
            <i class="fas fa-undo"></i>
          </button>
        ) : (
          <button className={`btn btn-outline-danger`} onClick={deleteHandler}>
            <i class="fas fa-trash"></i>
          </button>
        )}
      </div>
    </li>
  );
};

export default Todo;
