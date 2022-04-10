
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
          <App store={store} state={state} dispatch={store.dispatch.bind(store)}//bind возвр функцию в которой this будет store
               />
      </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)


