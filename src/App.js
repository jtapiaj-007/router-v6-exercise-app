import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

import RootRoutes from './RootRoutes';
import './App.css';

function App() {
  const userIds = [1, 2, 3, 4, 5];

  console.log("USERs", userIds);

  return (
    <Router>
      <div className='App'>
        <Link to="">Home</Link><br/>
        <Link to="/about">About</Link>
        <br/>
        <h1>Navbar</h1>
        {
          userIds.map((id)=> (
            <div key={id}>
              <Link key={id} to={`/user/${id}`}>User {id}</Link>
            </div>
          ))
        }
        <RootRoutes />
      </div>
    </Router>
  );
}

export default App;
