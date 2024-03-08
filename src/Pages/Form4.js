import React, { useState, useEffect } from 'react';
import { ChooseOne } from "../Components/ChooseOne.js";
import NavBlock from '../Components/NavBlock.js';
import { toggleBoxOpacity } from '../Components/hints.js';
import FormNavButton from '../Components/FormNavButton.js';
import ReminderContainer from '../Components/ReminderContainer.js';

const options1 = [
    { value: "yksilohaastattelu", label: "Yksilöhaastattelu" },
    { value: "ryhmahaastattelu", label: "Ryhmähaastattelu" },
    { value: "etahaastattelu", label: "Etähaastattelu" }
];



function Form4() {
    const [showExampleQuestions, setShowExampleQuestions] = useState(false);

    const handleCheckboxChange = (event) => {
        setShowExampleQuestions(event.target.checked);
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
                            <div id="hiddedbox" className='infobubble' style={{marginBottom:"20px", marginTop:"170px"}}>
                                <div className='title-container'>
                                    <p>Vinkki</p>
                                </div>
                                <p>Päätä tärkeimmät kysymykset, jotka tulee kysyttyä jokaiselta, vaikka itse haastattelut kukisivat eri tavoilla.</p>
                            </div>
                            <svg className='l-icon' stroke="currentColor" fill='currentColor' strokeWidth="0" viewBox='0 0 16 16' style={{marginBottom: "20px", marginTop:"170px"}} height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='form-container2'>
                        <div className='form-inner-container'>
                            <form>
                                <ChooseOne options1={options1} nameAttribute1={"Haastattelun tyyppi"} labelText1="Haastattelu tyyppi" />

                                <div className="form-grp">
                                    <label htmlFor="4-2">Sunnittele haastattelurunko</label>
                                    <textarea className="larger" maxLength="1200" id="4-2" name="Haastattelurunko" onChange={handleFormDataChange}></textarea>
                                </div>

                                <div className="form-4-toggle-esimerkit-container">
                                    <input type="checkbox" id="showExampleQuestions" onChange={handleCheckboxChange} checked={showExampleQuestions} />
                                    <label htmlFor="showExampleQuestions">Esimerkki kysymyksiä</label>
                                </div>

                                {showExampleQuestions && (
                                    <div className="form-normal-grp-text">
                                        <p>Muutama esimerkki kysymys:</p>
                                        <p>Miten kuvailisit itseäsi, entä miten muut kuvailisivat sinua?</p>
                                        <p>Miksi haet tätä työpaikkaa?</p>
                                        <p>Minkälainen on mielestäsi hyvä työympäristö?</p>
                                        <p>Mitä haluaisit kehittää itsessäsi?</p>
                                        <p>Mikä on suurin saavutuksesi?</p>
                                    </div>
                                )}
                                <FormNavButton lastPageUrl="/Form3" nextPageUrl="/Form5"/>
                                <ReminderContainer/>                            
                            </form>
                        </div>
                    </div>
                    <div className="infobubble-container">
                        <div className="outerbubble" onClick={toggleBoxOpacity}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" style={{marginBottom: "20px", marginTop:"170px"}} className="r-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                            </svg>
                            <div className="infobubble" id="hiddedbox" style={{marginBottom: "20px", marginTop:"170px"}}>
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
    );
}

export default Form4;
