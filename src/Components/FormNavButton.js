import React from 'react';
import { Link } from 'react-router-dom';

const FormNavButton = ({ nextPageUrl, lastPageUrl }) => {
  return (
    <div className="form-nav-buttons-container">
      <Link className="form-nav-button" to={lastPageUrl}>
        <p>Edellinen</p>
      </Link>
      <Link className="form-nav-button" to={nextPageUrl}>
        <p>Seuraava</p>
      </Link>
    </div>
  );
};

export default FormNavButton;

