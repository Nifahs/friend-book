import React from 'react';

import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* Nav bar area */}
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Friendbook</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="home">Home <span class="sr-only">(current)</span></a>
      <a className="nav-link" href="message">Messages</a>
      <a className="nav-link" href="notification">Notification</a>
      
    </div>
  </div>
</nav>


    <Home></Home>
    </div>
  );
}

export default App;
