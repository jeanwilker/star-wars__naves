function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tab__menu li');
  const tabContent = document.querySelectorAll('.js-tab__content section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');

    function activeTab(index) {
      tabContent.forEach((section => {
        section.classList.remove('active');
      }));
      tabContent[index].classList.add('active');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}initTabNav();


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'active'

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}initAccordion();


function initSmoothScroll() {
  const onternalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  onternalLinks.forEach((link) => {
    link.addEventListener('click', scrollSection);
  });
}initSmoothScroll();

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
    const halfWindow = window.innerHeight * 0.6;

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - halfWindow) < 0;

      if(isSectionVisible) {
        section.classList.add('active');
      }else {
        section.classList.remove('active');
      }
    });
  }
  animateScroll();

  window.addEventListener('scroll', animateScroll);

  }
}initScrollAnimation();

const navbarMobile = document.querySelector('.navbar-mobile');
const navbarMenu  = document.querySelector('.navbar');

function openMenu() {
  navbarMobile.classList.toggle('active');
  navbarMenu.classList.toggle('active');
}

navbarMobile.addEventListener('click', openMenu);