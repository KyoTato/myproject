// script.js

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Email copying function
const copyEmail = () => {
    const email = document.querySelector('.email-display');
    navigator.clipboard.writeText(email.innerText)
        .then(() => alert('Email copied!'))
        .catch(err => console.error('Error copying email: ', err));
};

// Smooth scrolling
const smoothScroll = (target) => {
    const scrollToElement = document.querySelector(target);
    scrollToElement.scrollIntoView({
        behavior: 'smooth'
    });
};

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh
    const formData = new FormData(form);
    // Handle form data as needed
    alert('Form submitted!');
});

// Dynamic email display
const emailElement = document.querySelector('.email-display');
emailElement.innerText = 'example@example.com'; // Set your desired email here