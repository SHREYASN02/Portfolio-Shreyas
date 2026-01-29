/**
 * Portfolio Website - Main JavaScript File
 * Author: Shreyas N
 * Description: Handles navigation, theme switching, form validation, and smooth scrolling
 */

// ===== GLOBAL VARIABLES =====
const body = document.body;
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');
const sections = document.querySelectorAll('.section');

// ===== MOBILE MENU TOGGLE =====
/**
 * Opens the mobile navigation menu
 */
function showMenu() {
    if (navMenu) {
        navMenu.classList.add('show');
        navToggle.classList.add('active');
    }
}

/**
 * Closes the mobile navigation menu
 */
function hideMenu() {
    if (navMenu) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    }
}

// Event listeners for mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.contains('show') ? hideMenu() : showMenu();
    });
}

if (navClose) {
    navClose.addEventListener('click', hideMenu);
}

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});

// ===== HEADER SCROLL EFFECT =====
/**
 * Adds shadow to header when page is scrolled
 */
function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', scrollHeader);

// ===== SMOOTH SCROLLING FOR NAVIGATION =====
/**
 * Implements smooth scrolling behavior for internal links
 */
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId && targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== ACTIVE SECTION HIGHLIGHTING =====
/**
 * Highlights the active navigation link based on scroll position
 */
function activeSection() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activeSection);

// ===== DARK/LIGHT THEME TOGGLE =====
/**
 * Gets the saved theme from localStorage
 * @returns {string} The saved theme ('dark' or 'light')
 */
function getSavedTheme() {
    return localStorage.getItem('theme') || 'light';
}

/**
 * Sets the theme and saves it to localStorage
 * @param {string} theme - The theme to set ('dark' or 'light')
 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

/**
 * Toggles between dark and light themes
 */
function toggleTheme() {
    const currentTheme = getSavedTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme on page load
setTheme(getSavedTheme());

// Event listener for theme toggle button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// ===== SCROLL TO TOP BUTTON =====
/**
 * Shows/hides the scroll to top button based on scroll position
 */
function toggleScrollTop() {
    if (window.scrollY >= 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

/**
 * Scrolls the page to the top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', toggleScrollTop);

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', scrollToTop);
}

// ===== SKILL BARS ANIMATION =====
/**
 * Animates skill progress bars when they come into view
 */
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    if (!skillsSection) return;
    
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition > skillsSectionTop && window.scrollY < skillsSectionTop + skillsSectionHeight) {
        skillBars.forEach(bar => {
            bar.style.width = bar.style.width || '0%';
        });
    }
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ===== CONTACT FORM VALIDATION =====
/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} True if email is valid, false otherwise
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Shows error message for a form field
 * @param {HTMLElement} input - The input element
 * @param {string} message - The error message to display
 */
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');
    
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

/**
 * Clears error message for a form field
 * @param {HTMLElement} input - The input element
 */
function clearError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');
    
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

/**
 * Validates the contact form
 * @returns {boolean} True if form is valid, false otherwise
 */
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // Clear all errors first
    clearError(name);
    clearError(email);
    clearError(subject);
    clearError(message);
    
    // Validate name
    if (name.value.trim() === '') {
        showError(name, 'Please enter your name');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    if (email.value.trim() === '') {
        showError(email, 'Please enter your email');
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    if (subject.value.trim() === '') {
        showError(subject, 'Please enter a subject');
        isValid = false;
    } else if (subject.value.trim().length < 3) {
        showError(subject, 'Subject must be at least 3 characters');
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim() === '') {
        showError(message, 'Please enter your message');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

/**
 * Handles contact form submission
 * @param {Event} e - The form submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        const successMessage = document.getElementById('form-success');
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would normally send the form data to a server
        // For this demo, we'll just show a success message
        console.log('Form submitted:', formData);
        
        // Show success message
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        successMessage.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

// Event listener for form submission
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Real-time validation - clear errors on input
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
formInputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            clearError(this);
        }
    });
});

// ===== DOWNLOAD RESUME FUNCTIONALITY =====
/**
 * Handles resume download
 * Note: This is a placeholder - you need to add your actual resume file
 */
const downloadResumeBtn = document.getElementById('download-resume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a simple text resume as a fallback
        const resumeContent = `
SHREYAS N
Python Full Stack Developer

Contact:
Email: edigashreyasn02@gmail.com
Phone: +91-8073054833
Location: Bengaluru, 560064
LinkedIn: linkedin.com/in/shreyasnsvit
GitHub: github.com/SHREYASN02

EDUCATION:
B.E - Computer Science Engineering with specialization in Data Science
Visvesvaraya Technological University (VTU) - Sai Vidya Institute of Technology
Dec 2021 - May 2025 | CGPA: 8.44/10.00

SKILLS:
- Languages & Frameworks: Python, Django, SQL, Flask, FastAPI
- Web Development: HTML, CSS, JavaScript
- AI/ML: Machine Learning, Generative AI
- Operating Systems: Linux, Windows

EXPERIENCE:
Python Full Stack Developer Intern | Global Quest Technologies (Jun 2025 - Sep 2025)
- Developed ML-based web applications using Python, Flask, and ML libraries
- Built end-to-end ML pipelines from data preprocessing to deployment
- Created responsive front-end interfaces with HTML, CSS, and JavaScript

Web Development Intern | QSpiders (Sep 2023 - Nov 2023)
- Developed user-friendly web pages using HTML, CSS, and JavaScript
- Collaborated on real-world front-end projects

PROJECTS:
1. AuthPrivacyChain - Blockchain-based access control framework
2. Pneumonia Detection Using CNN - 92.07% accuracy in medical image classification

CERTIFICATIONS:
- Python for Beginners - Microsoft Learn
- OCI AI Foundations Associate - Oracle
- OCI Generative AI Professional - Oracle

ACHIEVEMENTS:
- Technical Coordinator for Tech Vidya 2023 at SVIT
- Rotaract SVIT volunteer
`;
        
        // Create blob and download
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Shreyas_N_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Note: Replace this with actual PDF download if you have a resume PDF
        alert('Resume downloaded! Note: For a professional PDF resume, please replace this with your actual resume file.');
    });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
/**
 * Observes elements and adds animation classes when they come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .education-card, .cert-card, .timeline-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c Portfolio Website Loaded Successfully! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Built with ❤️ using HTML, CSS & Vanilla JavaScript ', 'color: #2563eb; font-size: 14px;');

// ===== PREVENT CONSOLE ERRORS =====
// Handle potential null elements gracefully
window.addEventListener('error', function(e) {
    if (e.message.includes('null')) {
        e.preventDefault();
        console.warn('Minor error caught and handled:', e.message);
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events for better performance
let scrollTimeout;
const originalScrollHandler = window.onscroll;

window.onscroll = function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(function() {
        scrollHeader();
        activeSection();
        toggleScrollTop();
        animateSkillBars();
    });
};

// ===== KEYBOARD NAVIGATION =====
// Add keyboard support for theme toggle
document.addEventListener('keydown', function(e) {
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            toggleTheme();
        }
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        hideMenu();
    }
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Add focus visible styles for keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// ===== END OF FILE =====
