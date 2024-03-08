export function toggleBoxOpacity(event) {
  //Etsii lähimmän kohteen
  const box = event.target.closest('.outerbubble').querySelector('.infobubble');
  if (box) {
      box.style.opacity = box.style.opacity === '1' ? '0' : '1'; // vaihda opacityn arvoa
  } else {
      console.error('Info kuplan tekstiä ei löydy');
  }
}

  
  