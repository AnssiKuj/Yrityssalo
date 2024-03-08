import { useState } from 'react';

const ClearStorage = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClearStorage = () => {
    localStorage.clear();
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return { showNotification, handleClearStorage };
};

export default ClearStorage;
