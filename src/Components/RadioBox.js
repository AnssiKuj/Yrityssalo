//RadioBox.js
import React, { useState, useEffect } from 'react';

export const RadioBox = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
    <div>
      <div className='form-check-grp'>
        <div>
          <input id='2-1-1' type='radio' name="form_2_radio" value="1" checked={selectedOption === '1'} onChange={(event) => {
    handleOptionChange(event); // Call handleOptionChange
    handleFormDataChange(event); // Call handleFormDataChange
  }}/>
          <label htmlFor="2-1-1">Etätyö tai monta sijaintia</label>
        </div>
        <div>
          <input id='2-2-2' type='radio' name="form_2_radio" value="2" checked={selectedOption === '2'} onChange={(event) => {
    handleOptionChange(event); // Call handleOptionChange
    handleFormDataChange(event); // Call handleFormDataChange
  }}/>
          <label htmlFor="2-2-2">Työpaikalla eri sijainti kuin yrityksellä</label>
        </div>
      </div>

    {selectedOption === '1' && (
      <div className='form-grp'>
        <label>Etätyön tiedot tai työpaikan sijainnit</label>
        <textarea maxLength="200" name="form_2_etatyo"></textarea>
      </div>
    )}

    {selectedOption === '2' && (
      <div className='form-grp'>
        <label>Työpaikan sijainti</label>
        <input id='2-7' maxLength="500" name="form_2_tyon_sijainti"></input>
      </div>
    )}
  </div>
  );
};
