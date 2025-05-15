/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== Path TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("path__active");
    });
    target.classList.add("path__active");

    tabs.forEach((tab) => {
      tab.classList.remove("path__active");
    });
    tab.classList.add("path__active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const navList = document.querySelector('.nav__list');

  toggleButton.addEventListener('click', function() {
    navList.classList.toggle('active');
    toggleButton.classList.toggle('active');
  });
  
  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navList.classList.remove('active');
      toggleButton.classList.remove('active');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize slideshow
  let slideIndex = 1;
  showSlides(slideIndex);

  // Initialize certification slideshow
  let certificationSlideIndex = 1;
  changeSlide(0, 'certification');

  // Contact form modal
  const modal = document.getElementById('contactFormModal');
  const contactButtons = document.querySelectorAll('.footer-btn, #ContactME');
  const closeButton = document.getElementById('closeModal');

  contactButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Form validation can be added here if needed
    });
  }
});

// Slideshow functions
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n, type) {
  if (type === 'certification') {
    certificationSlideIndex = n;
    changeSlide(0, 'certification');
  } else {
    showSlides(slideIndex = n);
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (!slides.length) return;
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  if (dots.length > 0 && slideIndex <= dots.length) {
    dots[slideIndex - 1].className += " active";
  }
}

function changeSlide(n, slideshowType) {
  let slideIndex;
  let slides;
  let dots;

  if (slideshowType === 'certification') {
    slideIndex = certificationSlideIndex += n;
    slides = document.getElementsByClassName("certificationSlides");
    dots = document.getElementsByClassName("certificationDot");
  }

  if (!slides || !slides.length) return;

  // Wrap around if needed
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }

  // Hide all slides and remove 'active' class from all dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and add 'active' class to the current dot
  slides[slideIndex - 1].style.display = "block";
  if (dots.length > 0 && slideIndex <= dots.length) {
    dots[slideIndex - 1].className += " active";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // ========== Typed.js Animations ==========
  new Typed('#typeit-quote', {
    strings: ['a Computer Vision Engineer', 'a Machine Learning Engineer', 'an AI Enthusiast'],
    typeSpeed: 50,
    smartBackspace: true,
    backSpeed: 35,
    backDelay: 1000,
    cursorChar: '&#x25AE;',
    loop: true,
    loopCount: Infinity,
  });

  new Typed('#typeit-quote-head', {
    strings: ['Sarah Haddad', ''],
    typeSpeed: 10,
    smartBackspace: true,
    backSpeed: 1000,
    backDelay: 5000,
    cursorChar: '&#x25AE;',
    loop: true,
    loopCount: Infinity,
  });

  // ========== General Slideshow ==========
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  window.plusSlides = plusSlides;
  window.currentGeneralSlide = function(n) {
    showSlides(slideIndex = n);
  };

  // ========== Certification Slideshow ==========
  let certificationSlideIndex = 1;
  changeCertificationSlide(0);

  function changeCertificationSlide(n) {
    certificationSlideIndex += n;
    let slides = document.getElementsByClassName("certificationSlides");
    let dots = document.getElementsByClassName("certificationDot");

    if (certificationSlideIndex > slides.length) { certificationSlideIndex = 1 }
    if (certificationSlideIndex < 1) { certificationSlideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[certificationSlideIndex - 1].style.display = "block";
    dots[certificationSlideIndex - 1].className += " active";
  }

  window.changeCertificationSlide = changeCertificationSlide;
  window.currentCertificationSlide = function(n) {
    certificationSlideIndex = n;
    changeCertificationSlide(0);
  };

  // ========== Modal Handling ==========
  const modal = document.getElementById('contactFormModal');
  const footerBtn = document.querySelector('.footer-btn');
  const contactMeBtn = document.getElementById('ContactME');
  const closeModal = document.getElementById('closeModal');

  if (modal) modal.style.display = 'none';

  if (footerBtn) {
    footerBtn.onclick = () => modal.style.display = 'block';
  }

  if (contactMeBtn) {
    contactMeBtn.onclick = () => modal.style.display = 'block';
  }

  if (closeModal) {
    closeModal.onclick = () => modal.style.display = 'none';
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
});