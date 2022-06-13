// Open menu bar
const openMenuBar = () => {
  const menuBar = document.getElementById('the-menu-bar');
  const menuBarOverlay = document.getElementById('menu-bar-overlay');
  menuBar.addEventListener('click', () => {
    menuBarOverlay.style.display = 'block';
  });
};
openMenuBar();

// Close menu bar
function closeMenuBar() {
  document.getElementById('menu-bar-overlay').style.display = 'none';
}

// Open mobile menu options
const menuOptions = document.querySelectorAll('.menu-options');
const mobileMenuOpts = () => {
  menuOptions.forEach((menuOption) => {
    menuOption.addEventListener('click', () => {
      closeMenuBar();
    });
  });
};
mobileMenuOpts();