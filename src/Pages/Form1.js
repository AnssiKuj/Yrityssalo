import React, {useState, useEffect} from 'react'
import NavBlock from '../Components/NavBlock';
import { toggleBoxOpacity } from '../Components/hints.js';
import { handleCopyToClipboard } from '../Components/copy.js';
import ReminderContainer from '../Components/ReminderContainer.js';
import FormNavButton from '../Components/FormNavButton.js';




function Form1() {

  const [selectedValue, setSelectedValue] = useState('');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Load form data from local storage when the component mounts
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []); // Run this effect only once when the component mounts

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"360px"}}>
                <div className='title-container'>
                    <p>Vinkki</p>
                  </div>
                  <p>Tekijän löytäminen on helpompaa kun tiedät mitä tarvitset.</p>
                  <p>Virherekrytointi on suurin vältettävissä oleva menoerä.</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"10px"}}>
                  <div>
                    <p>Vinkki</p>
                  </div>
                    <p>Varaa rekrytointiin tarpeeksi aikaa.</p>
                    <p>Pidä aikataulusta kiinni.</p>
                    <p>Yleensä Pienyrittäjän rekrytointiin kuluu aikaa n. kuukausi, josta työaikaa on n.2-5 kokonaista työpäivää.</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360pxx"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"0px"}}>
                <div>
                    <p>Vinkki</p>
                  </div>
                    <p>Vastavalmistunut tai vastaava on aluksi halvempi palkattava, tosin perehdytys vie alkuun siivun tuottavuudesta.</p>
                    <p>Kokenut osaaaja taas voi tuoda yritykselle nopeammin suurempia tuloja, mutta on kalliimpi palkattava</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "0px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
            </div>
            <div className='form-container2'>
              <div className='form-inner-container'>
                <form>
                  <div className='form-grp'>
                    <label>Mieti millaista osaamista yrityksesi tarvitsee</label>
                    <textarea id="1-1" className='large' maxLength="550" type="text" name="Osaaminen" onChange={handleFormDataChange}></textarea>
                  </div>
                  <div className='form-grp'>
                  <label>Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet</label>
                    <textarea id="1-3" className='large' maxLength="550" type="text" name="Tavoitteet" onChange={handleFormDataChange}></textarea>
                  </div>
                  <div className='form-check-grp'>
                    <div>
                      <input id="1-4-1" type="radio" name="form_1_esimerkki" value={"Koska yrityksemme tarvitseee uusia asiakkaita, yksi ensivuoden päätavoitteista on uudisasiakashankinta."} onChange={handleRadioChange}></input>
                      <label for="1-4-1">Esimerkki A</label>
                    </div>
                    <div>
                      <input id="1-4-2" type="radio" name="form_1_esimerkki" value={"Koska nyt on joulusesonki, tarvitsemme jouluapulaista."} onChange={handleRadioChange}></input>
                      <label for="1-4-2">Esimerkki B</label>
                    </div>
                    <div>
                      <input id="1-4-3" type="radio" name="form_1_esimerkki" value={"Tuotantomme on kasvussa."} onChange={handleRadioChange}></input>
                      <label for="1-4-3">Esimerkki C</label>
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
                  <div className='form-grp'>
                  <label>Aikatauluta rekrytointisi</label>
                    <textarea id="1-5" className='large' maxLength="550" type="text" name="Aikataulutus" onChange={handleFormDataChange}></textarea>
                  </div>
                  <div className='form-grp'>
                  <label>Arvioi budjetti rekrytoinnille</label>
                    <textarea id="1-2" className='large' maxLength="550" type="text" name="Budjetti" onChange={handleFormDataChange}></textarea>
                  </div>
                </form>
                  <FormNavButton lastPageUrl="/" nextPageUrl="/Form2"/>
                  <ReminderContainer/>
              </div>
            </div>
            <div className='infobubble-container'>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <svg className='r-icon' stroke='currentColor' fill='currentColor' strokeWidth="0" viewBox='0 0 16 16' style={{marginBottom: "475px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                </svg>
                <div id='hiddedbox' className='infobubble' style={{marginBottom: "475px"}}>
                <div className='title-container'>
                  <p>Ohje</p>
                </div>
                  <p>Onko täytettävä tehtävä kokonaan uusi vai jo olemassa oleva?</p>
                </div>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <svg className='r-icon' stroke='currentColor' fill='currentColor' strokeWidth="0" viewBox='0 0 16 16' style={{marginBottom: "120px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                </svg>
                <div id='hiddedbox' className='infobubble' style={{marginBottom: "120px"}}>
                  <div>
                    <p>Ohje</p>
                  </div>
                  <p>Mieti eri vaiheet ja kuka vastaa mistäkin vaiheesta.</p>
                  <p>Voit kopioida esimerkkivastauksen itsellesi.</p>
                </div>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <svg className='r-icon' stroke='currentColor' fill='currentColor' strokeWidth="0" viewBox='0 0 16 16' style={{marginBottom: "0px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                </svg>
                <div id='hiddedbox' className='infobubble' style={{marginBottom: "0px"}}>
                  <div className='title-container'>
                    <p>Ohje</p>
                  </div>
                  <p>Voit kopioida esimerkkivastauksen itsellesi.</p>
                  <p>Linkin takaa löydät palkkalaskurin, jolla pystyt arvioimaan palkkakuluja.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div id='hide' className='notification-container'><p></p></div>
  </div> 
    );
}

export default Form1