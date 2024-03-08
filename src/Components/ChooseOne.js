import React, { useState, useEffect } from 'react';

export function ChooseOne({ options1, options2, labelText1, labelText2, nameAttribute1, nameAttribute2 }) {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');

    const [formData, setFormData] = useState({});

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const handleFormDataChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: value }));
    };

    const handleChange1 = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue1(selectedOption);
        handleFormDataChange(event);
    };

    const handleChange2 = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue2(selectedOption);
        handleFormDataChange(event);
    };

    return (
        <div>
            <div className='form-grp'>
                <label htmlFor="2-3">{labelText1}</label>
                <select name={nameAttribute1} value={selectedValue1} onChange={handleChange1}>
                    <option value="" disabled>Valitse</option>
                    {options1.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            {options2 && (
                <div className='form-grp'>
                    <label htmlFor="2-4">{labelText2}</label>
                    <select name={nameAttribute2} value={selectedValue2} onChange={handleChange2}>
                        <option value="" disabled>Valitse</option>
                        {options2.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}








