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
}
initTabNav();

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
}
initAccordion();