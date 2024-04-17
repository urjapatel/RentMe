

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list-mobile');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('d-none'); // Add/remove 'active' class to toggle visibility
});