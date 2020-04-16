import React from 'react';
import AddTodo from './AddTodo';
import DIsplayOutput from './DIsplayOutput';

function Dashboard() {
  return (
    <div className="container">
      <AddTodo />
      <DIsplayOutput />
    </div>
  );
}

export default Dashboard;
