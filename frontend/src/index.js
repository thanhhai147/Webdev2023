import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContext from './AppContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppContext />
  </Router>
);

 