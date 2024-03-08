import React, {useState, useEffect} from 'react'
import NavBlock from '../Components/NavBlock';
import { toggleBoxOpacity } from '../Components/hints.js';
import { RadioBox} from '../Components/RadioBox.js';
import { ChooseOne } from "../Components/ChooseOne.js";
import ReminderContainer from '../Components/ReminderContainer.js';
import FormNavButton from '../Components/FormNavButton.js';
import Oikotie from "../img/oikotie.10fea0fb196967fdf3e1.png";
import Duunitori from "../img/duunitori.73968ea736a7763816fd.png";


const options1 = [
  { value: "maaraaikainen", label: "Määräaikainen" },
  { value: "toistaiseksi-voimassaoleva", label: "Toistaiseksi voimassaoleva" },
  { value: "harjoittelija", label: "Harjoittelija" }
];

const options2 = [
  { value: "osa-aikainen", label: "Osa-aikainen" },
  { value: "Kokoaikainen", label: "Kokoaikainen" }
];


function Form2() {

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
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"200px"}}>
                  <div className='title-container'>
                    <p>Vinkki</p>
                  </div>
                  <p>Olethan muistanut jakaa ilmoituksesi myös sosiaalisessa mediassa.</p>
                  <p>- Facebook</p>
                  <p>- Instagram</p>
                  <p>- X(twitter)</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"220px"}}>
                  <div className='title-container'>
                    <p>Vinkki</p>
                  </div>
                  <p>Esittele yrityksesi toimintaa lyhyesti. Tiivistä asiat jotka saattavat kiinnostaa hakijoitasi.</p>
                  <p>Kerro mitä yrityksesi tarjoaa hakijalle</p>
                  <p>Älä jaarittele, yritä pitää tekstilohkot lyhyinä</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"220px"}}>
                  <div className='title-container'>
                    <p>Vinkki</p>
                  </div>
                  <p>Anna tehtävänimikkeeksi mahdollisimman selkeä ja kuvaava nimi</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"220px"}}>
                  <div className='title-container'>
                    <p>Vinkki</p>
                  </div>
                  <p>Anna mahdollisimman selkeä kuvaus työn sisällöstä.</p>
                  <p>Älä jaarittele, yritä pitää tekstilohkot lyhyinä</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
              <div className='outerbubble' onClick={toggleBoxOpacity}>
                <div id="hiddedbox" className='infobubble' style={{marginBottom:"220px"}}>
                  <div className='title-container'>
                    <p>Vinkki</p>
                  </div>
                  <p>Kuvalliset ilmoitukset saavat enemmän huomiota.</p>
                  <p>Valitse sellainen kuva joka vahvistaa yrityskuvaasi.</p>
                  <p>Videon tekeminen kannattaa, jos sinulla on siihen resursseja.</p>
                </div>
                <svg className='l-icon' stroke="currentColor" fill='currentColor' stroke-width="0" viewBox='0 0 16 16' style={{marginBottom: "360px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
            </div>
            <div className='form-container2'>
              <div className='form-inner-container'>
                <div id='form2-header' className='form-grp'>
                  <p>Suosituimmat työpaikkojen hakukoneet</p>
                  <p>
                    <a>TE-Palvelut,</a>
                    <a> Duunitori,</a>
                    <a> Oikotie</a>
                  </p>
                </div>
                <form>
                    <div className='form-grp'>
                      <label for="2-1">Yrityksen sijainti</label>
                      <input id='2-1' maxLength="120" type='text' name="Yrityksen sijainti" onChange={handleFormDataChange}></input>
                    </div>
                  <RadioBox/>
                  <div className='form-grp'>
                    <label for="2-6">Yrityksen kuvaus</label>
                    <textarea id="2-6" maxLength="700" name="Yrityksenkuvaus" onChange={handleFormDataChange}></textarea>
                  </div>
                  <hr></hr>
                  <ChooseOne options1={options1} options2={options2} labelText1="Työsopimuksen tyyppi" labelText2="Työaika" nameAttribute1={"Työsopimuksen tyyppi"} nameAttribute2={"Työsaika"} onChange={handleFormDataChange}/>
                  <div className='form-grp'>
                    <label for="2-5">Tehtävä nimike</label>
                    <input id="2-5" maxLength="200" type='text' name="Tehtavanimike" onChange={handleFormDataChange}></input>
                  </div>
                  <div className='form-grp'>
                    <label for="2-7">Työn kuvaus</label>
                    <textarea id="2-7" maxLength="700" className='large' name="Tyonkuvaus" onChange={handleFormDataChange}></textarea>
                  </div>
                  <hr></hr>
                  <div className='form-grp'>
                    <label for="2-8">Ilmoittajan nimi</label>
                    <input id="2-8" maxLength="50" type='text' name="Ilmoittajan nimi" onChange={handleFormDataChange}></input>
                  </div>
                  <div className='form-grp'>
                    <label for="2-10">Ilmoittajan puhelin</label>
                    <input id="2-10" maxLength="20" type='text' name="Ilmoittajan puhelin" onChange={handleFormDataChange}></input>
                  </div>
                  <div className='form-grp'>
                    <label for="2-9">Hakemusten vastaanotto sähköpostiosoite</label>
                    <input type="text" id="2-9" maxlength="100" name="Hakemusten Vastaanotto Sähköposti" onChange={handleFormDataChange}></input>
                  </div>
                  <div className='form-grp'>
                    <label for="2-11">Ilmoituksen julkaisuaika</label>
                    <div className='form-horizontal-grp'>
                      <input type="date" id="date1" name="Julkaisuaika alkaen" onChange={handleFormDataChange}></input>
                      <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                      <input type="date" id="date2" name="Julkaisuaika päättyen" onChange={handleFormDataChange}></input>
                    </div>
                  </div>
                  <div className="form-grp">
                    <label for="2-12">Yhteyshenkilöt ja heidän yhteystiedot</label>
                    <textarea className="large" maxlength="300" id="2-12" name="Yhteyshenkilot ja heidan yhteystiedot" onChange={handleFormDataChange}></textarea>
                  </div>
                  <hr></hr>
                  <div className="form-grp">
                    <label>Muutaman yleisimmän työnhakusivuston vaatimukset lähetettävän kuvan ja videon suhteen.</label>
                  </div>
                  <div className="form-horizontal-grp2">
                    <div className="image-info-block">
                      <img src={Duunitori} alt="Duunitori" />
                    </div>
                    <div className="image-info-block">
                      <img src={Oikotie} alt="Oikotie" />
                    </div>
                  </div>
                  <FormNavButton lastPageUrl="/Form1" nextPageUrl="/Form3"/>
                  <ReminderContainer/>
                </form>
              </div>
            </div>
            <div className="infobubble-container">
              <div className="outerbubble" onClick={toggleBoxOpacity}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" style={{marginBottom:"695px", marginTop:"90px"}} className="r-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                </svg>
                <div className="infobubble" id="hiddedbox" style={{marginBottom:"695px", marginTop:"90px"}}>
                  <div className="title-container">
                    <p>Ohje</p>
                  </div>
                    <p>Valitsemalla toisen sijaintivaihtoehdon, saat auki tarkentavia kenttiä.</p>
                </div>
              </div>
              <div className="outerbubble" onClick={toggleBoxOpacity}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" style={{marginBottom:"320px"}} className="r-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                </svg>
                <div className="infobubble" id="hiddedbox" style={{marginBottom:"320px"}}>
                  <div className="title-container">
                    <p>Ohje</p>
                  </div>
                    <p>Kerro, mitä odotat hakijalta</p>
                    <p>- osaaminen</p>
                    <p>- työkokemus</p>
                    <p>- koulutus</p>
                    <p>- muut vaatimukset</p>
                    <p>Erittele mitä vaadit ja mitä katsot eduksi.</p>
                </div>
              </div>
                <div className="outerbubble" onClick={toggleBoxOpacity}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" style={{marginBottom:"160px"}} className="r-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                  </svg>
                  <div className="infobubble" id="hiddedbox" style={{marginBottom:"160px"}}>
                    <div className="title-container">
                      <p>Ohje</p>
                    </div>
                    <p>Mistä mihin asti ilmoituksesi on esillä.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
    }
    
export default Form2