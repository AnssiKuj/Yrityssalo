export const handleCopyToClipboard = (selectedValue) => {
    //Luo tilapäinen textare elementti
    const textarea = document.createElement('textarea');
    //Aseta arvoksi valittu esimerkki
    textarea.value = selectedValue;
    //Liitä textarea bodyyn
    document.body.appendChild(textarea);
    // Valitse textarea
    textarea.select();
    // Kopioi textarea
    document.execCommand('copy');
    // Poista tilapäinen textarea
    document.body.removeChild(textarea);
    
};

  