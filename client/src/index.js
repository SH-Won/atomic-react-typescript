import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter basename="/">
        <App/>
    </BrowserRouter>
)