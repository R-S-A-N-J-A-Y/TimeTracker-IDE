import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Editor from './Pages/index.jsx';

import './CSS File/general.css';
import './CSS File/Editor.css';
import './CSS File/Notations.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/TimeTrackerIDE-frontEnd">
        <Editor />
    </BrowserRouter>
);
