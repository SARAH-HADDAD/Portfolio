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
  });
});
