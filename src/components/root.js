import React, { useEffect } from "react";
import Header from "./header";
import SearchPanel from "./searchPanel";
import TodoList from "./todoList";
import AddTodo from "./addTodo";
import { useSelector, useDispatch } from "react-redux";
import { emptyTodo } from "../redux/reducers/reducerTodo";

const Root = () => {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.reducerTodo.todos);
  useEffect(() => {
    dispatch(emptyTodo(JSON.parse(localStorage.getItem("todo"))));
  }, []);
  useEffect(() => {
    if (todos === null) {
      localStorage.setItem("todo", []);
    } else {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
  }, [todos]);
  return (
    <div className="app">
      <Header />
      <SearchPanel />
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default Root;
