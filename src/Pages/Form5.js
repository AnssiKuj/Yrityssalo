import React, { useState } from 'react';
import NavBlock from '../Components/NavBlock';
import { toggleBoxOpacity } from '../Components/hints.js';
import FormNavButton from '../Components/FormNavButton';
import ReminderContainer from '../Components/ReminderContainer';

function Form5(){
    return(
<div className='form-page-container' style={{color: 'white'}}>
        <NavBlock/>
        <div className='form-container'>
            <div className='form-container1'>
                <div className='infobubble-container'>
                <div className='outerbubble' onClick={toggleBoxOpacity}>
                    <div id="hiddedbox" className='infobubble' style={{marginBottom:"200px"}}>
                    <div className='title-container'>
                        <p>Vinkki</p>
                    </div>
                    <p>Sopimuspohjana voit käyttää vaikka seuraavaa työsuojelu.fi -palvelusta löytyvää pohjaa.</p>
                    <a href="https://www.tyosuojelu.fi/documents/14660/338901/Ty%C3%B6sopimuslomake/20ded5b7-fd41-4f9a-b5b2-6418288f860c" target="_blank" rel="noreferrer">Sopimuslomake</a>
                    </div>
                    <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                </div>
                </div>
                <div className='form-container2' style={{height:"850px"}}>
                    <div className='form-inner-container'>
                        <div className="form-normal2-grp-text">
                            <p>Työsopimus voi olla kirjallinen, suullinen tai sähköinen.
                            <span>On suositeltavaa tehdä kirjallisesti</span>
                            , jotta sovitut asiat voidaan tarvittaessa tarkistaa.</p>
                            <p>Ota tehdessä huomioon <span>työsopimuslain, työaikalain ja vuosilomalain säädökset, sekä työehtosopimuksen määräykset.</span> </p>
                            <p>Mikäli allekirjoitetussa sopimuksessa on sovittu edellämainittujen vastaisia asioita, ne <span>eivät</span> ole päteviä.</p>
                            <p><span>Työsopimuksen kesto on sovittava. </span>Se voi olla toistaiseksivoimassa oleva tai määräaikainen.</p>
                            <p id="form-smaller-text">Palkattavan henkilön ollessa 14 vuotias, sopimuksen tekee huoltaja. Sitä nuorempi saa työskennellä vain työnsuojeluviranomaisen poikkeusluvalla.</p>
                        </div>
                        <FormNavButton lastPageUrl="/Form4" nextPageUrl="/Form6"/>
                        <ReminderContainer/>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default Form5;