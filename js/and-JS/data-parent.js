const BlogSearch = document.querySelector('.blog-top__search'),
   SearchMenu = document.querySelector('.blog__search')
let subMenu = null
function documentActions(e) {
   const targetElement = e.target.closest('[data-parent]');
   if (targetElement) {
      const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
      subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      if (subMenu) {
         const ActiveBlock = document.querySelector('._sub-menu-active');
         if (ActiveBlock && ActiveBlock !== targetElement) {
            ActiveBlock.classList.remove('_sub-menu-active');
            document.documentElement.classList.remove('_sub-menu-open')
         }
         targetElement.classList.toggle('_sub-menu-active');
         subMenu.classList.toggle('_sub-menu-open');
      } else {
         console.log('Упс...')
      }

      e.preventDefault();
   }
   if (e.target.matches('.specialisation-card')) {
      subMenu.classList.remove('_sub-menu-open')
   }
   if (SearchMenu && BlogSearch) {
      if (SearchMenu.classList.contains('_active')) {
         if (e.target.matches('.blog__search')) {
            SearchMenu.classList.remove('_active')
         }
      }
      if (e.target.closest('.blog-top__search')) {
         SearchMenu.classList.add('_active')
      }
   }
}
document.addEventListener('click', documentActions)