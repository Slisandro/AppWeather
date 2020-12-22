import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
// import About from './About';
import { NavLink } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
