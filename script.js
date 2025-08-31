// ===== PORTFOLIO WEBSITE JAVASCRIPT =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVIGATION FUNCTIONALITY =====
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    
    // ===== SKILL BARS ANIMATION =====
    
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress-bar');
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill');
            bar.style.width = skillLevel + '%';
        });
    }
    
    // Intersection Observer for skill bars
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillsObserver.observe(skillsSection);
    }
    
    // ===== PROJECTS DATA AND RENDERING =====
    
    const projects = [
        {
            title: "Amazon Clone ",
            description: "Created an Amazon Clone web application replicating core e-commerce functionalities such as user authentication, product listing, product details page, shopping cart, and checkout system. The project was developed using HTML, CSS, JavaScript, and React.js for the frontend, with backend and database integration to handle user data and orders. This project highlights my skills in full-stack development and building scalable e-commerce solutions",
            image: "pi/img14.PNG",
            techStack: ["HTML , CSS , JAVASCRIPTS , BOOTSTRAPS"],
            liveDemo: "#",
            sourceCode: "#",
            category: "web"
        },
        {
            title: "Personal Protfolio",
            description: "Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript. The website includes sections like Home, About, Skills, Projects, and Contact. It is optimized for both desktop and mobile devices with a clean UI and smooth navigation. This project showcases my frontend development skills and serves as a professional space to highlight my work and achievements.",
            image: "image/IMG 2.PNG",
            techStack: [" HTML , CSS , JAVASCRIPTS , BOOTSTRAP "],
            liveDemo: "#",
            sourceCode: "#",
            category: "Website"
        },
        {
            title: "Online Medicine Selling Website",
            description: "Developed a full-stack Online Medicine Selling Platform where customers can browse and purchase medicines securely. The website includes features like user authentication, product catalog, shopping cart, order tracking, and payment integration. Built using Angular for the frontend, NODE.JS for the backend, and SQL for database management, this project demonstrates my ability to create scalable, user-friendly, and secure web applications.",
            image: "pi/img13.JPG",
            techStack: ["HTML", "CSS", "JavaScript", "Bootstrap , NODE.JS , SQL "],
            liveDemo: "#",
            sourceCode: "#",
            category: "web"
        },
        {
            title: "Weather Dashboard",
            description: "A weather application displaying current conditions, forecasts, and interactive maps with location services.",
            image: "pi/IMG10.PNG",
            techStack: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
            liveDemo: "#",
            sourceCode: "#",
            category: "web"
        },
        {
            title: "Tic Tac Toe",
            description: "Developed a classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game features an interactive user interface, two-player mode, and logic to detect winning combinations or a draw.",
            image: "pi/img11.avif",
            techStack: ["HTML , CSS , JAVASCRIPTS"],
            liveDemo: "#",
            sourceCode: "#",
            category: "Game"
        },
        {
            title: "Quiz Portal",
            description: "Built an interactive Quiz Portal using HTML, CSS, and JavaScript where users can attempt multiple-choice questions with instant feedback. The portal tracks scores, displays results at the end, and ensures a smooth user experience with a responsive design. This project demonstrates my skills in frontend development, logical programming, and creating engaging web applications.",
            image: "pi/img12.PNG",
            techStack: ["HTML , CSS , JAVASCRIPTS"],
            liveDemo: "#",
            sourceCode: "#",
            category: "web"
        }
    ];
    
    // Render projects
    function renderProjects(filter = 'all') {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-lg-6 col-xl-4 mb-4';
            projectCard.innerHTML = `
                <div class="project-card">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" class="img-fluid">
                    </div>
                    <div class="project-content">
                        <h5 class="project-title">${project.title}</h5>
                        <p class="project-description">${project.description}</p>
                        <div class="tech-stack">
                            ${project.techStack.map(tech => `<span class="tech-chip">${tech}</span>`).join('')}
                        </div>
                        <div class="project-buttons">
                            <a href="${project.liveDemo}" class="btn btn-primary" target="_blank">
                                <i class="fas fa-external-link-alt me-2"></i>Live Demo
                            </a>
                            <a href="${project.sourceCode}" class="btn btn-outline-primary" target="_blank">
                                <i class="fab fa-github me-2"></i>Source Code
                            </a>
                        </div>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Initialize projects
    renderProjects();
    
    // ===== GALLERY FUNCTIONALITY =====
    
    const galleryImages = [
        "image/IMG 1.PNG",
        "image/IMG 2.PNG",
        "image/IMG 3.JPG",
        "image/IMG 4.AVIF",
        "image/IMG 5.AVIF",
        "image/IMG 6.JPG",
        "image/IMG 7.JPG",
        "image/IMG 8.JPEG",
        "image/IMG 9.PNG"
    ];
    
    // Render gallery
    function renderGallery() {
        const galleryGrid = document.getElementById('galleryGrid');
        if (!galleryGrid) return;
        
        galleryGrid.innerHTML = '';
        
        galleryImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'col-md-6 col-lg-4 mb-4';
            galleryItem.innerHTML = `
                <div class="gallery-item" onclick="openLightbox(${index})">
                    <img src="${image}" alt="Gallery Image ${index + 1}" class="img-fluid">
                    <div class="gallery-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // Initialize gallery
    renderGallery();
    
    // ===== LIGHTBOX FUNCTIONALITY =====
    
    // Create lightbox modal
    function createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img id="lightbox-image" src="" alt="Lightbox Image">
                <div class="lightbox-nav">
                    <button class="lightbox-prev" onclick="changeImage(-1)">&lt;</button>
                    <button class="lightbox-next" onclick="changeImage(1)">&gt;</button>
                </div>
            </div>
        `;
        
        // Add lightbox styles
        const lightboxStyles = document.createElement('style');
        lightboxStyles.textContent = `
            .lightbox {
                display: none;
                position: fixed;
                z-index: 9999;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(5px);
            }
            .lightbox-content {
                position: relative;
                margin: auto;
                padding: 20px;
                width: 90%;
                max-width: 800px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .lightbox-close {
                position: absolute;
                top: 20px;
                right: 30px;
                color: #f1f1f1;
                font-size: 40px;
                font-weight: bold;
                cursor: pointer;
                z-index: 1000;
            }
            .lightbox-close:hover {
                color: #bbb;
            }
            #lightbox-image {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
            .lightbox-nav button {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                padding: 15px;
                cursor: pointer;
                font-size: 18px;
                border-radius: 50%;
                transition: 0.3s;
            }
            .lightbox-nav button:hover {
                background: rgba(255, 255, 255, 0.4);
            }
            .lightbox-prev {
                left: 20px;
            }
            .lightbox-next {
                right: 20px;
            }
            @media (max-width: 768px) {
                .lightbox-nav button {
                    padding: 10px;
                    font-size: 14px;
                }
            }
        `;
        
        document.head.appendChild(lightboxStyles);
        document.body.appendChild(lightbox);
        
        // Close lightbox functionality
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (document.getElementById('lightbox').style.display === 'block') {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') changeImage(-1);
                if (e.key === 'ArrowRight') changeImage(1);
            }
        });
    }
    
    // Initialize lightbox
    createLightbox();
    
    // Global variables for lightbox
    let currentImageIndex = 0;
    
    // Open lightbox
    window.openLightbox = function(index) {
        currentImageIndex = index;
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        
        lightboxImage.src = galleryImages[index];
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    
    // Close lightbox
    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Change image in lightbox
    window.changeImage = function(direction) {
        currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = galleryImages[currentImageIndex];
    };
    
    // ===== CONTACT FORM VALIDATION =====
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            const consent = document.getElementById('consent');
            
            // Reset previous validation states
            [name, email, subject, message, consent].forEach(field => {
                field.classList.remove('is-invalid');
            });
            
            let isValid = true;
            
            // Validate name
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate subject
            if (!subject.value.trim()) {
                subject.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate consent
            if (!consent.checked) {
                consent.classList.add('is-invalid');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    // Log form data to console (replace with actual API call)
                    const formData = {
                        name: name.value.trim(),
                        email: email.value.trim(),
                        subject: subject.value.trim(),
                        message: message.value.trim(),
                        consent: consent.checked
                    };
                    
                    console.log('Form submitted:', formData);
                    
                    // Show success message
                    showNotification('Message sent successfully!', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
    
    // ===== NOTIFICATION SYSTEM =====
    
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add notification styles
        if (!document.querySelector('#notification-styles')) {
            const notificationStyles = document.createElement('style');
            notificationStyles.id = 'notification-styles';
            notificationStyles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 10000;
                    max-width: 400px;
                    animation: slideInRight 0.3s ease;
                }
                .notification-content {
                    background: white;
                    padding: 1rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .notification-success .notification-content {
                    border-left: 4px solid #28a745;
                }
                .notification-error .notification-content {
                    border-left: 4px solid #dc3545;
                }
                .notification-info .notification-content {
                    border-left: 4px solid #17a2b8;
                }
                .notification-close {
                    background: none;
                    border: none;
                    font-size: 1.2rem;
                    cursor: pointer;
                    margin-left: auto;
                    color: #6c757d;
                }
                .notification-close:hover {
                    color: #343a40;
                }
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(notificationStyles);
        }
        
        document.body.appendChild(notification);
        
        // Auto-remove notification after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }
    
    // ===== BACK TO TOP BUTTON =====
    
    const backToTopBtn = document.getElementById('backToTop');
    
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== SCROLL EVENT LISTENERS =====
    
    window.addEventListener('scroll', function() {
        updateActiveNav();
        toggleBackToTop();
    });
    
    // ===== NAVBAR SCROLL EFFECT =====
    
    function handleNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
    
    // ===== PERFORMANCE OPTIMIZATION =====
    
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function() {
        updateActiveNav();
        toggleBackToTop();
        handleNavbarScroll();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // ===== INITIALIZATION =====
    
    // Set initial active navigation
    updateActiveNav();
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // ===== UTILITY FUNCTIONS =====
    
    // Smooth scroll to element
    function smoothScrollTo(element, offset = 0) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // ===== ERROR HANDLING =====
    
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        showNotification('An error occurred. Please refresh the page.', 'error');
    });
    
    // ===== ACCESSIBILITY IMPROVEMENTS =====
    
    // Add keyboard navigation for gallery
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ===== FINAL INITIALIZATION =====
    
    console.log('Portfolio website loaded successfully!');
    
    // Add some interactive elements
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation styles
    if (!document.querySelector('#ripple-styles')) {
        const rippleStyles = document.createElement('style');
        rippleStyles.id = 'ripple-styles';
        rippleStyles.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .btn {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(rippleStyles);
    }
    
});
