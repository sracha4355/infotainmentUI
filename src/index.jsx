import React from 'react';
import ReactDOM from 'react-dom/client';
import {Dropdown} from './components/dropdown/Dropdown.jsx'
import {App} from './app.jsx'

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
