import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/edit/:id" component={EditTodo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
