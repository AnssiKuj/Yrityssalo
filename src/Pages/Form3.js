import React, {useState, useEffect}  from 'react'
import NavBlock from '../Components/NavBlock'
import { toggleBoxOpacity } from '../Components/hints.js';
import { handleCopyToClipboard } from '../Components/copy.js';
import FormNavButton from '../Components/FormNavButton.js';
import ReminderContainer from '../Components/ReminderContainer.js';

function Form3() {

    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    

    const [formData, setFormData] = useState({});

  useEffect(() => {
    // Load form data from local storage when the component mounts
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []); // Run this effect only once when the component mounts

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: value }));
  };

    return (
        <div className='form-page-container' style={{color: 'white'}}>
            <NavBlock/>
            <div className='form-container'>
                <div className='form-container1'>
                    <div className='infobubble-container'>
                        <div className='outerbubble' onClick={toggleBoxOpacity}>
                            <div id="hiddedbox" className='infobubble' style={{marginBottom:"120px", marginTop:"20px"}}>
                                <div className='title-container'>
                                    <p>Vinkki</p>
                                </div>
                                <p>Yrityskuvan kannalta on hyvä vastata kaikille hakijoille.</p>
                            </div>
                            <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "120px", marginTop:"20px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                        </div>
                        <div className='outerbubble' onClick={toggleBoxOpacity}>
                            <div id="hiddedbox" className='infobubble'>
                                <div>
                                    <p>Vinkki</p>
                                </div>
                                <p>Yrityskuvan kannalta on kannattavaa luoda hyvä hakijakokemus</p>
                                <p>- Vastaa kaikille hakijoille mahdollisimman nopeasti</p>
                                <p>- Ole täsmällinen</p>
                                <p>- Arvosta hakemuksia</p>
                                <p>- Ole kohtelias</p>
                            </div>
                            <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360pxx"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='form-container2'>
                        <div className='form-inner-container'>
                            <form>
                                <div className='form-grp'>
                                    <label for="3-1">Mieti milloin olet tavoiteltavissa</label>
                                    <input id='3-1' maxLength="200" type='text' name="Milloin tavoiteltavissa" onChange={handleFormDataChange}></input>
                                </div>
                                <div className='form-grp'>
                                    <label for="3-2">Milloin vastaat hakijoille</label>
                                    <input id='3-2' maxLength="200" type='text' name="Milloin vastaat" onChange={handleFormDataChange}></input>
                                </div>
                                <p className='vali-ilmoitus'>
                                    Soittaminen on paras tapa kutsua henkilö haastatteluun
                                </p>
                                <div className="form-grp">
                                    <label for="3-3">Luonnostele kutsu haastetteluun</label>
                                    <textarea className="large" maxlength="500" id="2-3" name="Kutsu haastatteluun" onChange={handleFormDataChange}></textarea>
                                </div>
                                <div className="form-grp">
                                    <label for="3-3">Luonnostele vastaus hylätyille hakemuksille</label>
                                    <textarea className="large" maxlength="500" id="2-3" name="Hylkää haastattelu" onChange={handleFormDataChange}></textarea>
                                </div>
                                <div className='form-check-grp'>
                                    <div>
                                        <input id="1-4-1" type="radio" name="form_3_esimerkki" value={"Kiitos kiinnostuksestasi työpaikkaa kohtaan. Valitettavasti valinta ei osunut sinuun."} onChange={handleRadioChange}></input>
                                        <label for="1-4-1">Esimerkki A</label>
                                    </div>
                                    <div>
                                        <input id="1-4-2" type="radio" name="form_3_esimerkki" value={"Hei 'Hakijan nimi'. Valintakriteerimme ei tällä kertaa täyttynyt kohdallasi, sillä 'kerro syy'."} onChange={handleRadioChange}></input>
                                        <label for="1-4-2">Esimerkki B</label>
                                    </div>
                                </div>
                                {selectedValue && (
                                    <div className='form-check-grp-text'>
                                    <div onClick={() => handleCopyToClipboard(selectedValue)}>
                                        <svg className='copy-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox='0 0 24 24' height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                                        <title>Copy text</title>
                                        <path fill='none' d="M0 0h24v24H0z"></path>
                                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                                        </svg>
                                    </div>
                                    <p>{selectedValue}</p>
                                    </div>
                                )}
                                <FormNavButton lastPageUrl="/Form2" nextPageUrl="/Form4"/>
                                <ReminderContainer/>
                            </form>
                        </div>
                    </div>
                    <div className="infobubble-container">
                        <div className="outerbubble" onClick={toggleBoxOpacity}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" style={{marginBottom: "40px", marginTop:"20px"}} className="r-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                            </svg>
                            <div className="infobubble" id="hiddedbox" style={{marginBottom: "40px", marginTop:"20px"}}>
                            <div className="title-container">
                                <p>Ohje</p>
                            </div>
                                <p>Kehitä kysymyksiä, jotka luovat keskustelua.</p>
                                <p>Vältä kyllä tai ei vastauksia</p>
                            </div>
                        </div>
                        <div className="outerbubble" onClick={toggleBoxOpacity}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="r-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                            </svg>
                            <div className="infobubble" id="hiddedbox">
                            <div className="title-container">
                                <p>Ohje</p>
                            </div>
                                <p>Kehitä kysymyksiä, jotka luovat keskustelua.</p>
                                <p>Vältä kyllä tai ei vastauksia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form3