// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use the system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the saved theme or system preference
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        applyLightTheme();
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        applyDarkTheme();
    }
    
    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
            applyLightTheme();
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
            applyDarkTheme();
        }
    });
    
    function applyLightTheme() {
        document.documentElement.style.setProperty('--bg', 'var(--light-bg)');
        document.documentElement.style.setProperty('--secondary-bg', 'var(--light-secondary)');
        document.documentElement.style.setProperty('--text-color', 'var(--light-text-primary)');
        document.documentElement.style.setProperty('--text-secondary', 'var(--light-text-secondary)');
        document.documentElement.style.setProperty('--card-bg', 'var(--light-card-bg)');
        document.documentElement.style.setProperty('--border-color', 'var(--light-border-color)');
    }
    
    function applyDarkTheme() {
        document.documentElement.style.setProperty('--bg', 'var(--dark-bg)');
        document.documentElement.style.setProperty('--secondary-bg', 'var(--dark-secondary)');
        document.documentElement.style.setProperty('--text-color', 'var(--dark-text-primary)');
        document.documentElement.style.setProperty('--text-secondary', 'var(--dark-text-secondary)');
        document.documentElement.style.setProperty('--card-bg', 'var(--dark-card-bg)');
        document.documentElement.style.setProperty('--border-color', 'var(--dark-border-color)');
    }
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Add active class to navigation items on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`nav a[href="#${sectionId}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${sectionId}"]`).parentElement.classList.remove('active');
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demonstration purposes, we'll just show a success message
            const formData = new FormData(contactForm);
            let formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            console.log('Form submitted with values:', formValues);
            
            // Show success message (in a real application)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Add animation to skill cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .tool-card, .insight-card');
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});