// NavBlock.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBlock = () => {
  // Nykyinen sijainti
  const location = useLocation();

  return (
    <div className='form-page-nav-container'>
      <div className='form-page-nav-block-container'>
        <Link to="/" className={`form-page-nav-home ${location.pathname === "/" ? "active" : ""}`}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
          </svg>
        </Link>
        <Link to="/Form1" className={`form-page-nav-block ${location.pathname === "/Form1" ? "active" : ""}`}>
          <p>1</p><p>Osaamisen tarve</p>
        </Link>
        <Link to="/Form2" className={`form-page-nav-block ${location.pathname === "/Form2" ? "active" : ""}`}>
          <p>2</p><p>Työpaikka- ilmoitus</p>
        </Link>
        <Link to="/Form3" className={`form-page-nav-block ${location.pathname === "/Form3" ? "active" : ""}`}>
          <p>3</p><p>Hakemuksen käsittely</p>
        </Link>
        <Link to="/Form4" className={`form-page-nav-block ${location.pathname === "/Form4" ? "active" : ""}`}>
          <p>4</p><p>Haastattelu</p>
        </Link>
        <Link to="/Form5" className={`form-page-nav-block ${location.pathname === "/Form5" ? "active" : ""}`}>
          <p>5</p><p>Sopimus</p>
        </Link>
        <Link to="/Form6" className={`form-page-nav-block ${location.pathname === "/Form6" ? "active" : ""}`}>
          <p>6</p><p>Perehdytys</p>
        </Link>
        <Link to="/LastPage" className={`form-page-nav-preview ${location.pathname === "/LastPage" ? "active" : ""}`}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NavBlock;