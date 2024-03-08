import React, { useState } from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import ClearStorage from "../Components/ClearLocalStorage"



function FrontPage() {

  const { showNotification, handleClearStorage } = ClearStorage();

  return (
    <div className='frontpage-container'>
      <div className='frontpage-content'>
        <h1>Pienyrittäjän rekryopas</h1>
        <div className='frontpage-content-grp1'>
          <p>Tämä opas on suunnattu ensimmäistä työntekijäänsä rekrytoivalle pien- tai mikroyrittäjälle</p>
          <p>Täytä kohdat, jotka koet itsellesi hyödylliseksi.</p>
        </div>
        <div className='frontpage-content-grp2'>
          <p>1. Millaisesta osaamisesta yrityksesi hyötyy?</p>
          <p>2. Miten laadit kiinnostavan työpaikkailmoituksen?</p>
          <p>3. Miten valitset sopivat ehdokkaat haastatteluun?</p>
          <p>4. Kuinka valmistaudun työhaastattelun tekemiseen?</p>
          <p>5. Mitä sisältyy työsopimukseen?</p>
          <p>6. Mitä kuuluu onnistuneeseen perehdytykseen?</p>
        </div>
        <div className='frontpage-nav-container'>
            <Link to="/Form1" className='frontpage-nav-block'><p>1</p></Link>
            <Link to="/Form2" className='frontpage-nav-block'><p>2</p></Link>
            <Link to="/Form3" className='frontpage-nav-block'><p>3</p></Link>
            <Link to="/Form4" className='frontpage-nav-block'><p>4</p></Link>
            <Link to="/Form5" className='frontpage-nav-block'><p>5</p></Link>
            <Link to="/Form6" className='frontpage-nav-block'><p>6</p></Link>
        </div>
        <div className='frontpage-buttons-grp'>
          <Link className="frontpage-button" to="/Form1">
            <p>Aloita uusi</p>
          </Link>
          <a id='hidden-btn' className='frontpage-button'><p>Jatka</p></a>
          <div id='clear-storage-btn' className='frontpage-button'onClick={handleClearStorage}>
                <p>Tyhjennä</p>
          </div>
        </div>
        <div className='frontpage-content-grp4'>
          <p>Palvelu tallentaa tietoa selaimen paikalliseen muistiin (Local storage). 
            Tämä mahdollistaa sen, että palvelun kysymyksiin ei tarvitse vastata yhdellä kertaa. 
            Paikallisen muistin saa tyhjennettyä etusivulla tai palvelun viimeisellä sivulla olevalla paikikkeella</p>
        </div>
        <div className='frontpage-content-grp3'>
        <svg className='frontpage-hint-icon' stroke="currentColor" fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' xmlns='xmlns="http://www.w3.org/2000/svg"'>
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
          <svg className='frontpage-hint-icon' stroke="currentColor" fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' xmlns='xmlns="http://www.w3.org/2000/svg"'>
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
          </svg>
          <div className='frontpage-hint-text'>
            <p>Vinkki- ja ohjenappien takaa löydät vinkkejä ja neuvoja.</p>
          </div>
        </div>
      </div>
      <Footer/>
      {showNotification && (
        <div id="" className="notification-container">
          <p>Paikallinen muisti on tyhjennetty.</p>
        </div>
      )}
    </div>
    
  );
}

export default FrontPage;