const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});