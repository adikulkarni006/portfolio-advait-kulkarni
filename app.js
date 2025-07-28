// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
    
    // Reset form
    this.reset();
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect for hero section
const roles = ['Full Stack Developer', 'MERN Stack Expert', 'React Specialist', 'Node.js Developer'];
let currentRole = 0;
let currentChar = 0;
let isDeleting = false;
const heroP = document.querySelector('.hero p');

function typeWriter() {
    const current = roles[currentRole];
    
    if (isDeleting) {
        heroP.textContent = current.substring(0, currentChar - 1);
        currentChar--;
    } else {
        heroP.textContent = current.substring(0, currentChar + 1);
        currentChar++;
    }

    if (!isDeleting && currentChar === current.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
}

// Start typing effect after page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});