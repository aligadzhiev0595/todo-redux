import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import {Provider} from 'react-redux'
import store from './redux'
import './style.css';
import "../src/libs/fontawesome/css/all.min.css";


ReactDOM.render(<Provider store={store}>
  <Root />
</Provider>, document.getElementById("root"));

