import React, { useEffect } from "react";
import Header from "./components/Header";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { emptyTodo } from "./redux/reducers/reducerTodo";

const App = () => {
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

export default App;
