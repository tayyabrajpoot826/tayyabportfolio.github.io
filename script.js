// ===================================
// PROFESSIONAL PORTFOLIO WITH GSAP
// ===================================

import gsap from "gsap"
import { ScrollTrigger, TextPlugin } from "gsap/all"
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// ===================================
// TYPED TEXT ANIMATION
// ===================================
function initTypedText() {
  const typedText = "Crafting Dynamic & Scalable Shopify & WordPress Solutions"
  gsap.to("#typed-text", {
    duration: 3,
    text: typedText,
    delay: 0.5,
    ease: "none",
  })
}

// ===================================
// HEADER ANIMATIONS
// ===================================
function animateHeader() {
  gsap.from(".logo", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: "power2.out",
  })

  gsap.from(".nav-desktop ul li", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.2,
  })
}

// ===================================
// HERO SECTION ANIMATIONS
// ===================================
function animateHero() {
  const tl = gsap.timeline()

  tl.from(".badge", {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: "back.out",
  })
    .from(
      ".hero-title",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-description",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-tags",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-buttons",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".social-links",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".profile-image",
      {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.8",
    )

  // Floating animation for profile image
  gsap.to(".profile-image", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1.5,
  })
}

// ===================================
// SCROLL TRIGGER ANIMATIONS
// ===================================
function setupScrollTriggers() {
  // About section
  gsap.from(".about-text h3", {
    scrollTrigger: {
      trigger: ".about-text",
      start: "top center",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: "power2.out",
  })

  gsap.from(".about-text p", {
    scrollTrigger: {
      trigger: ".about-text",
      start: "top center",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  })

  // Skills cards
  gsap.from(".premium-card", {
    scrollTrigger: {
      trigger: ".skills-container",
      start: "top center",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  })

  // Skill items
  gsap.from(".skill-item", {
    scrollTrigger: {
      trigger: ".skills-showcase",
      start: "top center",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.05,
    ease: "back.out",
  })

  // Project cards
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects-grid",
      start: "top center",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
  })

  // Section titles
  gsap.from(".section-title", {
    scrollTrigger: {
      trigger: ".section-header",
      start: "top center",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
  })
}

// ===================================
// CARD HOVER EFFECTS
// ===================================
function setupCardHovers() {
  document.querySelectorAll(".premium-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -6,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })

  document.querySelectorAll(".tag").forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      gsap.to(tag, {
        y: -2,
        duration: 0.2,
        ease: "power2.out",
      })
    })

    tag.addEventListener("mouseleave", () => {
      gsap.to(tag, {
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      })
    })
  })
}

// ===================================
// SKILL ITEMS ANIMATION
// ===================================
function setupSkillItems() {
  document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        y: -4,
        duration: 0.2,
        ease: "power2.out",
      })

      const dots = item.querySelectorAll(".dot.active")
      dots.forEach((dot, index) => {
        gsap.to(dot, {
          scale: 1.3,
          duration: 0.2,
          delay: index * 0.05,
          ease: "power2.out",
        })
      })
    })

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      })

      const dots = item.querySelectorAll(".dot.active")
      dots.forEach((dot) => {
        gsap.to(dot, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        })
      })
    })
  })
}

// ===================================
// SMOOTH SCROLLING
// ===================================
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute("href"))
      if (target) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: target,
          ease: "power2.inOut",
        })
      }
    })
  })
}

// ===================================
// MOBILE MENU
// ===================================
function setupMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle")
  const menu = document.getElementById("mobile-menu")

  if (!toggle || !menu) return

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active")
  })

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active")
    })
  })
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================
function setupHeaderScroll() {
  const header = document.querySelector(".header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })
}

// ===================================
// FORM HANDLER
// ===================================
function setupFormHandler() {
  const form = document.getElementById("contact-form")
  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const btn = form.querySelector(".btn-primary")
    const originalText = btn.innerHTML

    gsap.to(btn, {
      opacity: 0.7,
      duration: 0.2,
      ease: "power2.out",
    })

    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
    btn.disabled = true

    setTimeout(() => {
      form.reset()
      btn.innerHTML = originalText
      btn.disabled = false
      gsap.to(btn, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      })
    }, 2000)
  })
}

// ===================================
// SET CURRENT YEAR IN FOOTER
// ===================================
function setCurrentYear() {
  const yearElement = document.getElementById("current-year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
}

// ===================================
// INITIALIZE APP
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear()
  initTypedText()
  animateHeader()
  animateHero()
  setupScrollTriggers()
  setupCardHovers()
  setupSkillItems()
  setupSmoothScrolling()
  setupMobileMenu()
  setupHeaderScroll()
  setupFormHandler()
})
