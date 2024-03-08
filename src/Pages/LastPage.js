import React, { useState } from "react";
import NavBlock from "../Components/NavBlock";
import { Link, useLocation } from 'react-router-dom';
import ClearStorage from "../Components/ClearLocalStorage";
import jsPDF from 'jspdf';

function LastPage(){

    const location = useLocation();
    const { showNotification, handleClearStorage } = ClearStorage();

    // Function to retrieve data from local storage and set it as PDF content
    const handleRetrieveLocalStorageAndDownloadPDF = () => {
        // Retrieve data from local storage
        const data = localStorage.getItem('formData');
        
        // Split the data into lines and join with newline characters
        const formattedData = data ? JSON.parse(data) : {};
        
        // Prepare content with labels and content below
        let content = '';
        Object.entries(formattedData).forEach(([key, value]) => {
            content += `${key}:\n${value}\n\n`; // Add label and content with line breaks
        });
        
        // Create a new PDF instance
        const pdf = new jsPDF();
        // Set the formatted data as PDF content with line breaks
        const lines = pdf.splitTextToSize(content, pdf.internal.pageSize.width - 20); // Split content into lines
        let y = 10; // Initial y position
        lines.forEach(line => {
            if (y > 280) { // Check if content exceeds page height
                pdf.addPage(); // Add a new page
                y = 10; // Reset y position
            }
            pdf.text(10, y, line); // Add line to PDF
            y += 10; // Increment y position
        });
        // Save the PDF
        pdf.save("localStorageData.pdf");
    };
    

    return(
        <div className="form-page-container">
            <NavBlock/>
            <div className="form-container">
                <div className="form-container1">
                    <div className="form-container2">
                        <div className="form-inner-container">
                            <div className="thumbs-container">
                                <p>Valmista tuli!</p>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="thumbs-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path>
                                </svg>
                            </div>
                            <p style={{textAlign:"center"}}>Voit tulostaa tai ladata tiedoston alla olevasta napista</p>
                            <div className="form-nav-buttons-container">
                                <Link to="/Form6" className={`form-nav-button ${location.pathname === "/Form6" ? "active" : ""}`}>
                                    <p>Edellinen</p>
                                </Link>
                                <div className="form-nav-button" onClick={handleRetrieveLocalStorageAndDownloadPDF}>
                                    <p>Lataa PDF</p>
                                </div>
                                <Link to="/" className={`form-nav-button ${location.pathname === "/" ? "active" : ""}`}>
                                    <p>Etusivulle</p>
                                </Link>
                            </div>
                        </div>
                        <div id='clear-storage-btn' className='endingpage-button'onClick={handleClearStorage}>
                                <p>Tyhjennä</p>
                        </div>
                    </div>
                </div>
            </div>
            {showNotification && (
                <div id="" className="notification-container">
                    <p>Paikallinen muisti on tyhjennetty.</p>
                </div>
            )}
        </div>
    )
}

export default LastPage;


