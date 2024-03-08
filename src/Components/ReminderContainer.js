import React from 'react';


const ReminderContainer = () => {
  return (
    <div className="reminder-container">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="reminder-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      </svg>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="reminder-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
      </svg>
      <div className="reminder-text">
          <p>Vinkki- ja ohjenappien takaa löydät vinkkejä ja neuvoja, joita voit lisätä tulostettavalle muistilistalle</p>
      </div>
  </div>
  );
};

export default ReminderContainer;