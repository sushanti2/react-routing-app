import React from 'react';
import './App.css';
import GithubProfileSearch from "./components/GithubProfileSearch";





function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark blue-gradient-rgba" >
        <a href="/" className="navbar-brand">React with GitHub Profile Search</a>

      </nav>
        <GithubProfileSearch/>

      
    </React.Fragment>
  );
}

export default App;

