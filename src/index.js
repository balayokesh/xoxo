import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, HashRouter} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Game from './Game';

const Routing = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={App} />
      <Route path="/game" exact component={Game} />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
