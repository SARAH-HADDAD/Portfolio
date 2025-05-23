/*==================== OPTIMIZED MAIN JS ====================*/
document.addEventListener('DOMContentLoaded', function() {
  // Cached DOM elements
  const domElements = {
    toggleButton: document.getElementById('mobile-menu-toggle'),
    navList: document.querySelector('.nav__list'),
    navLinks: document.querySelectorAll('.nav__link'),
    modal: document.getElementById('contactFormModal'),
    contactForm: document.getElementById('contactForm'),
    closeModal: document.getElementById('closeModal'),
    contactButtons: document.querySelectorAll('.footer-btn, #ContactME')
  };

  // Initialize all sliders
  initSliders();

  // Event delegation for path tabs and skills headers
  document.addEventListener('click', function(e) {
    // Path tabs
    if (e.target.closest('[data-target]')) {
      const tab = e.target.closest('[data-target]');
      const target = document.querySelector(tab.dataset.target);

      document.querySelectorAll('[data-content]').forEach(tabContent => {
        tabContent.classList.remove('path__active');
      });
      target.classList.add('path__active');

      document.querySelectorAll('[data-target]').forEach(t => {
        t.classList.remove('path__active');
      });
      tab.classList.add('path__active');
    }

    // Skills headers
    if (e.target.closest('.skills__header')) {
      const header = e.target.closest('.skills__header');
      const content = header.parentNode;
      const isClosed = content.classList.contains('skills__close');

      document.querySelectorAll('.skills__content').forEach(skill => {
        skill.className = "skills__content skills__close";
      });

      if (isClosed) {
        content.className = "skills__content skills__open";
      }
    }
  });

  // Mobile menu toggle
  if (domElements.toggleButton) {
    domElements.toggleButton.addEventListener('click', function() {
      domElements.navList.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Modal handling
  domElements.contactButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      domElements.modal.style.display = 'block';
    });
  });

  if (domElements.closeModal) {
    domElements.closeModal.addEventListener('click', () => {
      domElements.modal.style.display = 'none';
    });
  }

  window.addEventListener('click', function(event) {
    if (event.target === domElements.modal) {
      domElements.modal.style.display = 'none';
    }
  });

  // Form submission
  if (domElements.contactForm) {
    domElements.contactForm.addEventListener('submit', function(e) {
      // Form validation can be added here if needed
    });
  }

  // Initialize Typed.js effects
  initTypedEffects();
});
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      domElements.navList.classList.remove('active');
      domElements.toggleButton.classList.remove('active');
    }
    
    // Update active link
    document.querySelectorAll('.nav__link').forEach(navLink => {
      navLink.classList.remove('active-link');
    });
    link.classList.add('active-link');
  });
});

// Close menu on window resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    domElements.navList.classList.remove('active');
    domElements.toggleButton.classList.remove('active');
  }
});
/**
 * Initialize all sliders on the page
 */
function initSliders() {
  // Find all slider containers
  const sliders = document.querySelectorAll('.slideshow-container');
  
  sliders.forEach(container => {
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    let currentIndex = 0;
    let autoPlayInterval;
    
    // Show initial slide
    showSlide(currentIndex);
    
    // Navigation arrows
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        resetAutoPlay();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        resetAutoPlay();
      });
    }
    
    // Dot indicators
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        resetAutoPlay();
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
        resetAutoPlay();
      } else if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
        resetAutoPlay();
      }
    });
    
    // Auto-play (optional)
    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 5000);
    }
    
    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    }
    
    // Start auto-play (comment out if not needed)
    // startAutoPlay();
    
    // Pause on hover
    container.addEventListener('mouseenter', () => {
      clearInterval(autoPlayInterval);
    });
    
    container.addEventListener('mouseleave', () => {
      // startAutoPlay();
    });
    
    function showSlide(index) {
      // Wrap around if at beginning or end
      if (index >= slides.length) {
        index = 0;
      } else if (index < 0) {
        index = slides.length - 1;
      }
      
      // Hide all slides
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show current slide
      slides[index].style.display = 'block';
      
      // Update current dot
      if (dots[index]) {
        dots[index].classList.add('active');
      }
      
      currentIndex = index;
    }
  });
}

/**
 * Initialize Typed.js effects with Intersection Observer
 */
function initTypedEffects() {
  const typedElements = [
    { 
      id: 'typeit-quote', 
      options: {
        strings: ['a Computer Vision Engineer', 'a Machine Learning Engineer', 'an AI Enthusiast'],
        typeSpeed: 50,
        smartBackspace: true,
        backSpeed: 35,
        backDelay: 1000,
        cursorChar: '&#x25AE;',
        loop: true
      }
    },
    { 
      id: 'typeit-quote-head', 
      options: {
        strings: ['Sarah Haddad', ''],
        typeSpeed: 10,
        smartBackspace: true,
        backSpeed: 1000,
        backDelay: 5000,
        cursorChar: '&#x25AE;',
        loop: true
      }
    }
  ];

  typedElements.forEach(el => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadTypedJS().then(() => {
            new Typed(`#${el.id}`, el.options);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const target = document.querySelector(`#${el.id}`);
    if (target) observer.observe(target);
  });
}

/**
 * Load Typed.js library dynamically
 */
function loadTypedJS() {
  return new Promise((resolve) => {
    if (window.Typed) return resolve();
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11';
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

/**
 * Debounce function for resize events
 */
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Optimized resize handler
window.addEventListener('resize', debounce(function() {
  // Handle responsive adjustments here
}, 250));

