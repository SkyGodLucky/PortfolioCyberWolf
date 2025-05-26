// Initialize theme after toggle is loaded
function initializeTheme() {
  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme') || 'light-mode';

  document.body.classList.add(currentTheme);
  if (currentTheme === 'dark-mode') {
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', function (e) {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  });
}

// Load toggle component and initialize theme
document.addEventListener('DOMContentLoaded', () => {
  fetch('components/toggle.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('toggle-container').innerHTML = data;
      initializeTheme();
    });
}); 