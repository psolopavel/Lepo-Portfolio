window.addEventListener('DOMContentLoaded', function () {
   const sitebar = document.querySelector('.sitebar'),
      body = document.querySelector('body');
   if (localStorage.getItem('them-site')) {
      if (localStorage.getItem('them-site') == 'dark') {
         document.body.classList.add('dark_theme');
         this.document.querySelector('.settings-body__dark-mode').classList.remove('_active')
      }
   }
   if (localStorage.getItem('garland')) {
      if (localStorage.getItem('garland') == 'nothave') {
         document.querySelector('#girliands-none').classList.remove('_active')
         document.querySelector('.main-home').classList.add('_garland-none')
      }
   }
   if (localStorage.getItem('preloader')) {
      if (localStorage.getItem('preloader') == 'nothave') {
         document.querySelector('#preloader-none').classList.remove('_active')
         document.querySelector('.preloader').classList.add('preloader-none')
      }
   }
   if (localStorage.getItem('navigation')) {
      const sitebar = this.document.querySelector('.sitebar'),
         settings_buttons = document.querySelectorAll('.settings-body__button')
      if (localStorage.getItem('navigation') == 'header') {
         body.classList.add('_header')
         sitebar.classList.add('_settings-hidden')
         settings_buttons[0].classList.remove('_active')
         settings_buttons[1].classList.add('_active')
      } else {
         body.classList.remove('_header');
         sitebar.classList.remove('_settings-hidden');
      }
   }
   if (localStorage.getItem('theme-name')) {
      body.setAttribute('theme-name', localStorage.getItem('theme-name'))
      document.querySelectorAll('.settings-body__color').forEach(element => {
         element.classList.remove('_active')
         if (element.getAttribute('data-theme-color') == localStorage.getItem('theme-name')) {
            element.classList.add('_active')
         }
      });
   }
   function preloaderReade() {
      const preloader = document.querySelector('.preloader')
      if (preloader) {
         setTimeout(function () {
            preloader.classList.add('_finish')
            setTimeout(() => {
               preloader.querySelector('span').classList.add('_hidden')
            }, 2000)
         }, 3000)
      }
   }
   function SidebarResize() {
      if (sitebar) {
         setInterval(function () {
            if (parseInt(sitebar.style.width) <= 200) {
               sitebar.classList.add('_tiny')
            } else {
               sitebar.classList.remove('_tiny')
            }
         }, 400)
      }
   }
   function CustomMouse() {
      const small_dot = document.querySelector('.custom-mouse__small'),
         big_dot = document.querySelector('.custom-mouse__big'),
         cursor_conteiner = document.querySelector('.custom-mouse')
      if (small_dot && big_dot) {
         window.addEventListener('mousemove', e => {
            let dot_positionX = (((e.pageX - window.scrollX) / window.innerWidth) * 100),
               dot_positionY = (((e.pageY - window.scrollY) / window.innerHeight) * 100);
            target = e.target
            small_dot.style.cssText = `
               left:${dot_positionX}%;
               top: ${dot_positionY}%;
            `
            setTimeout(() => {
               big_dot.style.cssText = `
                  left:${dot_positionX}%;
                  top: ${dot_positionY}%;
               `
            }, 120)
            if (target.closest('.resizable-r')) {
               cursor_conteiner.classList.add('_resize')
            } else {
               cursor_conteiner.classList.remove('_resize')
               if (target.closest('a') || target.closest('button') || target.closest('[data-cursorActive]')) {
                  cursor_conteiner.classList.add('_active')
               } else {
                  cursor_conteiner.classList.remove('_active')
               }
               if (target.closest('iframe')) {
                  cursor_conteiner.classList.add('_hidden')
               } else {
                  cursor_conteiner.classList.remove('_hidden')
               }

            }

         })
         document.body.addEventListener('mouseleave', () => {
            cursor_conteiner.classList.add('_hidden')
         })
         document.body.addEventListener('mouseover', () => {
            cursor_conteiner.classList.remove('_hidden')
         })
      }
   }
   function DarkThem() {
      const moons = document.querySelectorAll('.sitebar__moon')
      if (moons) {
         moons.forEach(moon => {
            moon.addEventListener('click', () => {
               if (document.body.classList.contains('dark_theme')) {
                  document.body.classList.remove('dark_theme');
                  localStorage.setItem('them-site', 'light')
                  if (moon.parentNode.classList.contains('sitebar__body')) {
                     document.querySelector('.settings-body__dark-mode').classList.add('_active')
                  }
               }
               else {
                  document.body.classList.add('dark_theme');
                  localStorage.setItem('them-site', 'dark')
                  if (moon.parentNode.classList.contains('sitebar__body')) {
                     document.querySelector('.settings-body__dark-mode').classList.remove('_active')
                  }
               }
            })
         });
      }
   }
   function dificultCod() {
      const AboutParents = document.querySelectorAll('.parent-item'),
         AboutSubMenu = document.querySelectorAll('.specialisation-card'),
         Params = document.querySelector(".settings"),
         Params_icon = document.querySelector('.settings__icon div')
      var prevScrollPos = window.pageYOffset;

      if (AboutParents && AboutSubMenu) {
         for (let index = 0; index < AboutParents.length; index++) {
            const parent = AboutParents[index];
            const menu = AboutSubMenu[index];
            parent.dataset.parent = `${index + 1}`;
            if (menu) {
               menu.dataset.submenu = `${index + 1}`;
            }
         }
      }
      if (Params) {
         window.addEventListener('click', e => {
            if (Params.classList.contains('_active')) {
               if (!e.target.closest('.settings__content')) {
                  Params.classList.remove('_active')
                  Params_icon.classList.remove('_active')
               }
               if (e.target.closest('.settings-body__checkbox-input')) {
                  if (e.target.classList.contains('_active')) {
                     e.target.classList.remove('_active')
                     // ------------------------------------
                     if (e.target.closest('#girliands-none')) {
                        document.querySelector('.main-home').classList.add('_garland-none')
                        localStorage.setItem('garland', 'nothave')
                     }
                     // ------------------------------------
                     if (e.target.closest('#preloader-none')) {
                        document.querySelector('.preloader').classList.add('_preloader-none')
                        localStorage.setItem('preloader', 'nothave')
                     }
                  }
                  else {
                     e.target.classList.add('_active')
                     // ------------------------------------
                     if (e.target.closest('#girliands-none')) {
                        document.querySelector('.main-home').classList.remove('_garland-none')
                        localStorage.setItem('garland', 'have')
                     }
                     // ------------------------------------
                     if (e.target.closest('#preloader-none')) {
                        document.querySelector('.preloader').classList.remove('_preloader-none')
                        localStorage.setItem('preloader', 'have')
                     }
                  }
               }
               if (e.target.closest('.settings-body__button')) {
                  const settings_buttons = document.querySelectorAll('.settings-body__button')
                  settings_buttons.forEach(button => {
                     button.classList.remove('_active');
                     e.target.classList.add('_active');
                     if (!e.target.closest('#settings-body__button-sitebar')) {
                        sitebar.classList.add('_settings-hidden');
                        localStorage.setItem('navigation', 'header')
                        body.classList.add('_header')
                     } else {
                        sitebar.classList.remove('_settings-hidden');
                        localStorage.setItem('navigation', 'sitebar')
                        body.classList.remove('_header')
                     }

                  });
               }
               if (e.target.closest('.settings-body__color')) {
                  const colors = document.querySelectorAll('.settings-body__color')
                  for (let color = 0; color < document.querySelectorAll('.settings-body__color').length; color++) {
                     const element = colors[color],
                        elemenThemeName = e.target.getAttribute('data-theme-color')
                     element.classList.remove('_active');
                     e.target.classList.add('_active');
                     body.setAttribute('theme-name', elemenThemeName)
                     localStorage.setItem('theme-name', elemenThemeName)
                  }
               }
            } else {
               if (e.target.closest('.settings__icon div')) {
                  Params.classList.add('_active')
                  Params_icon.classList.add('_active')
               }
               if (document.querySelector('.burger')) {
                  const burger = document.querySelector('.burger')
                  if (burger.classList.contains('_active')) {
                     if (!e.target.closest('.header__burger-icon')) {
                        if (!e.target.closest('.burger .header-menu')) {
                           burger.classList.remove('_active')
                           body.classList.remove('_hidden')
                           document.querySelector('.header__burger-icon').classList.remove('_active')
                        }
                     }
                  }
               }
               if (e.target.closest('.sitebar-content__menu-sublink >span')) {
                  e.target.nextElementSibling.classList.toggle('_hidden')
               }
            }
         })
         const header = document.querySelector('.header')
         window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (scrollY >= 70) {
               if (prevScrollPos > currentScrollPos) {
                  header.classList.remove('_hidden')
               } else {
                  header.classList.add('_hidden')
               }
            }
            else { header.classList.remove('_hidden') }
            prevScrollPos = currentScrollPos;
         }
      }
   }
   preloaderReade()
   DarkThem()
   CustomMouse()
   SidebarResize()
   dificultCod()
})