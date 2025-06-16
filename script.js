// ===================================
// PORTFOLIO WEBSITE JAVASCRIPT
// Organized and Optimized
// ===================================

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
        this.setupAnimations();
    }

    // ===================================
    // EVENT LISTENERS SETUP
    // ===================================
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setCurrentYear();
            this.initTypedText();
            this.setupScrollEffects();
            this.setupMobileMenu();
            this.setupProjectToggles();
            this.setupFormHandlers();
            this.setupSmoothScrolling();
            this.setupBackToTop();
            this.setupSkillsToggle();
        });

        window.addEventListener('scroll', this.debounce(this.handleScroll.bind(this), 100));
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    }

    // ===================================
    // UTILITY FUNCTIONS
    // ===================================
    debounce(func, wait) {
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

    setCurrentYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // ===================================
    // TYPED TEXT ANIMATION
    // ===================================
    initTypedText() {
        const typedTextElement = document.getElementById('typed-text');
        if (!typedTextElement) return;

        const textToType = "Crafting Dynamic & Scalable Shopify & WordPress Solutions";
        let index = 0;

        const typeText = () => {
            if (index < textToType.length) {
                typedTextElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeText, 30);
            } else {
                this.addBlinkingCursor(typedTextElement);
            }
        };

        setTimeout(typeText, 1000);
    }

    addBlinkingCursor(element) {
        element.innerHTML = element.textContent + '<span class="cursor">|</span>';
        setInterval(() => {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }
        }, 500);
    }

    // ===================================
    // SCROLL EFFECTS
    // ===================================
    setupScrollEffects() {
        this.header = document.querySelector('.header');
        this.animatedElements = document.querySelectorAll('.section-header, .about-content, .project-card');
        
        this.setupIntersectionObserver();
    }

    handleScroll() {
        this.updateHeaderOnScroll();
        this.checkElementsInView();
    }

    updateHeaderOnScroll() {
        if (!this.header) return;

        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }

    checkElementsInView() {
        this.animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animate-fade-in');
            }
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => observer.observe(card));
    }

    // ===================================
    // MOBILE MENU
    // ===================================
    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        if (!mobileMenuToggle || !mobileMenu) return;

        mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu(mobileMenu, mobileMenuToggle);
        });

        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu(mobileMenu, mobileMenuToggle);
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                this.closeMobileMenu(mobileMenu, mobileMenuToggle);
            }
        });
    }

    toggleMobileMenu(menu, toggle) {
        menu.classList.toggle('active');
        const icon = toggle.querySelector('i');
        
        if (menu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    closeMobileMenu(menu, toggle) {
        menu.classList.remove('active');
        const icon = toggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    // ===================================
    // PROJECT TOGGLES
    // ===================================
    setupProjectToggles() {
        this.setupCategoryToggle('shopify');
        this.setupCategoryToggle('wordpress');
    }

    setupCategoryToggle(categoryPrefix) {
        const viewAllBtn = document.getElementById(`${categoryPrefix}-view-all`);
        const hideBtn = document.getElementById(`${categoryPrefix}-hide`);
        const hiddenProjects = document.querySelectorAll(`.${categoryPrefix}-project.hidden-project`);

        if (!viewAllBtn || !hideBtn) return;

        viewAllBtn.addEventListener('click', () => {
            this.showProjects(hiddenProjects, viewAllBtn, hideBtn);
        });

        hideBtn.addEventListener('click', () => {
            this.hideProjects(hiddenProjects, viewAllBtn, hideBtn, categoryPrefix);
        });
    }

    showProjects(hiddenProjects, viewAllBtn, hideBtn) {
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.style.display = 'flex';
                project.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }, index * 100);
        });

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
    }

    hideProjects(hiddenProjects, viewAllBtn, hideBtn, categoryPrefix) {
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.style.animation = 'fadeOut 0.4s ease-out forwards';
                setTimeout(() => {
                    project.style.display = 'none';
                }, 400);
            }, index * 50);
        });

        hideBtn.style.display = 'none';
        viewAllBtn.style.display = 'inline-flex';

        // Scroll back to category title
        const categoryTitle = document.querySelector(`#${categoryPrefix}-projects`).previousElementSibling;
        if (categoryTitle) {
            categoryTitle.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // ===================================
    // SKILLS TOGGLE FUNCTIONALITY
    // ===================================
    setupSkillsToggle() {
        // Ensure all hidden skills are initially hidden
        const hiddenSkills = document.querySelectorAll('.hidden-skill');
        hiddenSkills.forEach(skill => {
            skill.style.display = 'none';
        });

        // Add fadeOut animation to CSS if not present
        this.addFadeOutAnimation();
    }

    addFadeOutAnimation() {
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
    }

    // ===================================
    // FORM HANDLERS
    // ===================================
    setupFormHandlers() {
        this.setupContactForm();
        this.setupNewsletterForm();
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Re-enable button after delay (in case of errors)
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 5000);
        });
    }

    setupNewsletterForm() {
        const newsletterForm = document.getElementById('newsletter-form');
        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleNewsletterSubmission(newsletterForm);
        });
    }

    handleNewsletterSubmission(form) {
        const email = document.getElementById('newsletter-email').value;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalIcon = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        setTimeout(() => {
            form.reset();
            alert('Thank you for subscribing to my newsletter!');
            
            submitBtn.innerHTML = originalIcon;
            submitBtn.disabled = false;
        }, 1500);
    }

    // ===================================
    // SMOOTH SCROLLING
    // ===================================
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleSmoothScroll(anchor);
            });
        });
    }

    handleSmoothScroll(anchor) {
        const targetId = anchor.getAttribute('href');

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
    }

    // ===================================
    // BACK TO TOP FUNCTIONALITY
    // ===================================
    setupBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top-btn');
        if (!backToTopBtn) return;

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===================================
    // COMPONENT INITIALIZATION
    // ===================================
    initializeComponents() {
        this.setupImageLoadingStates();
        this.setupProjectImageEffects();
        this.setupAccessibilityFeatures();
    }

    setupImageLoadingStates() {
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
    }

    setupProjectImageEffects() {
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
    }

    setupAccessibilityFeatures() {
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
    }

    // ===================================
    // ANIMATIONS SETUP
    // ===================================
    setupAnimations() {
        // Initial check for elements in view
        setTimeout(() => {
            this.checkElementsInView();
        }, 100);
    }

    // ===================================
    // RESIZE HANDLER
    // ===================================
    handleResize() {
        // Handle any resize-specific logic here
        this.checkElementsInView();
    }
}

// ===================================
// GLOBAL FUNCTIONS (for HTML onclick)
// ===================================
function toggleSkills(containerId, button) {
    const container = document.getElementById(containerId);
    const hiddenSkills = container.querySelectorAll('.hidden-skill');
    const isExpanded = button.classList.contains('expanded');

    if (isExpanded) {
        // Hide skills
        hiddenSkills.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.remove('show');
                setTimeout(() => {
                    skill.style.display = 'none';
                }, 300);
            }, index * 50);
        });

        button.innerHTML = '<i class="fas fa-chevron-down"></i><span>View All Skills</span>';
        button.classList.remove('expanded');
    } else {
        // Show skills
        hiddenSkills.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.display = 'block';
                setTimeout(() => {
                    skill.classList.add('show');
                }, 10);
            }, index * 50);
        });

        button.innerHTML = '<i class="fas fa-chevron-up"></i><span>Hide Skills</span>';
        button.classList.add('expanded');
    }
}

// ===================================
// INITIALIZE APPLICATION
// ===================================
const portfolioApp = new PortfolioApp();
