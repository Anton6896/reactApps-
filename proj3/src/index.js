import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Provider} from "react-redux";
import store from "./state/store";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
