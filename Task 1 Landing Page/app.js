const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-button');
  const navList = document.querySelector('nav ul');

  toggleButton.addEventListener('click', function () {
    navList.classList.toggle('active');
  });
});
