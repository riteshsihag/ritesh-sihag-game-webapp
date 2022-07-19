import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './game_over.jpg'

const Nav = () => {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <img className='logo' src={logo} alt="Game Over" />
      <input type="checkbox" id="click"/>
      <label htmlFor="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul className='nav-links'>
        <li><Link className='nav_button' to={'/'}>HOME</Link></li>
        <li><Link className='nav_button' to={'/search'}>SEARCH</Link></li>
        <li> <Link className='nav_button' to={'/genres'}>GENRES</Link></li>
        <li><Link className='nav_button' to={'/platform'}>PLATFORMS</Link></li>
        <li> <Link className='nav_button' to={'/wishlist'}>WISHLIST </Link></li>
      </ul>
    </nav>
  );
}

export default Nav;


