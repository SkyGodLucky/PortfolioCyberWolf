function showPopup() {
  const popup = document.getElementById('success-popup');
  popup.classList.add('active');
}

function closePopup() {
  const popup = document.getElementById('success-popup');
  popup.classList.remove('active');
}

document.addEventListener('click', function (event) {
  const popup = document.getElementById('success-popup');
  if (event.target === popup) {
    closePopup();
  }
}); 