$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    collapsible: true,
    icons: null,
    active: false,
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      arailabel: 'Перейти на слайд',
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });

  const bullets = document.getElementsByClassName('swiper-pagination-bullet')
  for (const bullet of bullets) {
    bullet.ariaLabel = bullet.ariaLabel.replace('Go to slide', 'Перейти на слайд')
  }

});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('.burger__menu').classList.add('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger__open').addEventListener('click', function() {
    document.querySelector('.burger__menu').classList.remove('is-active')
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tabs__btn').forEach(function(BtnTabs) {
        BtnTabs.classList.remove('tabs__active')
      })
      event.currentTarget.classList.add('tabs__active')
      document.querySelectorAll('[data-target]').forEach(function(tabContent) {
        tabContent.classList.remove('step-active')
      })
        document.querySelectorAll(`[data-target="${path}"]`).forEach(function(activeElement) {
         activeElement.classList.add('step-active')
       })
    })
  })
})
