// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Typed text effect for hero section
    const typedTextElement = document.getElementById('typed-text');
    const textToType = "Crafting Dynamic & Scalable Shopify & WordPress Solutions";
    let index = 0;
    
    function typeText() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 30);
        } else {
            // Add blinking cursor after typing is complete
            typedTextElement.innerHTML = typedTextElement.textContent + '<span class="cursor">|</span>';
            setInterval(() => {
                const cursor = document.querySelector('.cursor');
                if (cursor) {
                    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                }
            }, 500);
        }
    }
    
    // Start typing animation
    setTimeout(typeText, 1000);
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Project View All/Hide functionality
    function setupProjectToggle(categoryPrefix) {
        const viewAllBtn = document.getElementById(`${categoryPrefix}-view-all`);
        const hideBtn = document.getElementById(`${categoryPrefix}-hide`);
        const hiddenProjects = document.querySelectorAll(`.${categoryPrefix}-project.hidden-project`);
        
        if (viewAllBtn && hideBtn) {
            viewAllBtn.addEventListener('click', () => {
                // Show hidden projects with animation
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.display = 'flex';
                        project.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }, index * 100);
                });
                
                // Toggle buttons
                viewAllBtn.style.display = 'none';
                hideBtn.style.display = 'inline-flex';
                
                // Scroll to show new projects
                setTimeout(() => {
                    const firstHiddenProject = hiddenProjects[0];
                    if (firstHiddenProject) {
                        firstHiddenProject.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }, 300);
            });
            
            hideBtn.addEventListener('click', () => {
                // Hide projects with animation
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.animation = 'fadeOut 0.4s ease-out forwards';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 400);
                    }, index * 50);
                });
                
                // Toggle buttons
                hideBtn.style.display = 'none';
                viewAllBtn.style.display = 'inline-flex';
                
                // Scroll back to the category title
                const categoryTitle = document.querySelector(`#${categoryPrefix}-projects`).previousElementSibling;
                if (categoryTitle) {
                    categoryTitle.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }
    
    // Setup toggle functionality for both project categories
    setupProjectToggle('shopify');
    setupProjectToggle('wordpress');
    
    // Add fadeOut animation to CSS if not present
    if (!document.querySelector('style[data-fade-out]')) {
        const style = document.createElement('style');
        style.setAttribute('data-fade-out', 'true');
        style.textContent = `
            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Let the form submit naturally to FormSubmit
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Re-enable button after a delay (in case of errors)
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 5000);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get email
            const email = document.getElementById('newsletter-email').value;
            
            // Simulate subscription
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            const originalIcon = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Reset form
                newsletterForm.reset();
                
                // Show success message
                alert('Thank you for subscribing to my newsletter!');
                
                // Reset button
                submitBtn.innerHTML = originalIcon;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top-btn');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation classes on scroll
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .skills-grid, .experience-card, .project-card');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animate-fade-in');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add parallax effect to project images on mouse move
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(image => {
        image.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = image.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            const img = image.querySelector('img');
            if (img) {
                img.style.transform = `scale(1.1) translate(${x * 10}px, ${y * 10}px)`;
            }
        });
        
        image.addEventListener('mouseleave', () => {
            const img = image.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add loading states for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.style.opacity = '0.5';
            img.alt = 'Image failed to load';
        });
    });
    
    // Performance optimization: Debounce scroll events
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
    
    // Apply debounce to scroll events
    const debouncedCheckScroll = debounce(checkScroll, 100);
    window.addEventListener('scroll', debouncedCheckScroll);
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // ESC key to close mobile menu
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--purple-primary)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
});
