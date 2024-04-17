const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list-mobile');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('d-none'); // Add/remove 'active' class to toggle visibility
});

const swiper = new Swiper('.carousel.swiper', {
  slidesPerView: 1,
  spaceBetween: 20, 
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});


const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameErrorMessage = nameInput.nextElementSibling;
  const emailErrorMessage = emailInput.nextElementSibling;
  const messageErrorMessage = messageInput.nextElementSibling;

  let isValid = true;

  // Validate name
  if (nameInput.value === '') {
    nameErrorMessage.textContent = 'Please enter your name.';
    nameErrorMessage.style.display = 'block';
    isValid = false;
  } else {
    nameErrorMessage.style.display = 'none';
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailErrorMessage.textContent = 'Please enter a valid email address.';
    emailErrorMessage.style.display = 'block';
    isValid = false;
  } else {
    emailErrorMessage.style.display = 'none';
  }

  // Validate message
  if (messageInput.value === '') {
    messageErrorMessage.textContent = 'Please enter your message.';
    messageErrorMessage.style.display = 'block';
    isValid = false;
  } else {
    messageErrorMessage.style.display = 'none';
  }

  // Submit form if all fields are valid
  if (isValid) {
    // Simulate form submission (replace with your actual submission logic)
    alert('Your message has been sent!');
  }
});
