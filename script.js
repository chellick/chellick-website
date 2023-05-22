const button = document.getElementById('ava');
button.addEventListener('animationend', () => {
  button.disabled = true;
});