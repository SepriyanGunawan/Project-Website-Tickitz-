const menu = document.querySelector('.select-nav');
const hmenu = document.querySelector('.hamMenu');
// console.log(hmenu);

hmenu.addEventListener('click', () => {
  menu.classList.toggle('active-humMenu');
});
