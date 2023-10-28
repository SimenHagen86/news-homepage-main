const initApp = () => {
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileMenuBtnOpen = document.getElementById('mobile-menu-btn-open')

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenuBtnOpen.classList.toggle('hidden')
  }

  mobileMenu.addEventListener('click', toggleMenu)
  mobileMenuBtnOpen.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
