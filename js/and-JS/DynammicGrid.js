"use strict"

function ImageInit() {
   const images = document.querySelectorAll('.article__image')
   if (images.length) {
      images.forEach(image => {
         const ImageItem = image.querySelector('img');
         const padding = ImageItem.offsetHeight / ImageItem.offsetWidth * 100;
         image.style.paddingBottom = `${padding}%`;
         ImageItem.classList.add('init');
      });
   }
}

function gridInit() {
   const items = document.querySelector('.articles__items')
   const itemsGrid = new Isotope(items, {
      itemSelector: '.article',
      masonry: {
         fitWidth: true,
         gutter: 20,
      }
   })
   document.addEventListener('click', documentActions)
   function documentActions(e) {
      const target = e.target
      if (target.closest('.portfolio-menu__item')) {
         const filterItem = target.closest('.portfolio-menu__item');
         const filterValue = filterItem.dataset.filter;
         const filterActiveItem = document.querySelector('.portfolio-menu__item.active');

         filterValue === '*' ? itemsGrid.arrange({ filter: `` }) :
            itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` })

         filterActiveItem.classList.remove('active')
         filterItem.classList.add('active')

         e.preventDefault();
      }
   }
}
window.addEventListener('load', windowLoad)

function windowLoad() {
   ImageInit();
   gridInit();
}