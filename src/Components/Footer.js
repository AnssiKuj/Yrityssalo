import React from 'react';
import logo from '../img/yrityssalo-logo.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <img src={logo} alt="Yrityssalo Oy"/>
      <div className='footer-info-container'>
        <div className='footer-info-grp'>
          <p>Joensuunkatu 7</p>
          <p>24100 SALO</p>
          <p>+358 44 778 2142</p>
          <p>yrityssalo@yrityssalo.fi</p>
        </div>
        <div className='footer-info-grp'>
          <a href=''>toihinsaloon.fi</a>
          <a href=''>investinsalo.fi</a>
          <a href=''>Vapaat toimitilat</a>
          <a href=''>visitsalo.fi</a>
        </div>
        <div className='footer-info-grp'>
          <a href=''>Twitter</a>
          <a href=''>LinkedIn</a>
          <a href=''>Facebook</a>
          <a href=''>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;