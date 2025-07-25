const loggedIn = localStorage.getItem('loggedIn');
// if (loggedIn !== 'true') {
//   // kalau belum login, paksa ke halaman login
//   window.location.href = '../sign-in.html';
// } else {
if (loggedIn) {
  const profil = document.querySelector('.profil-nav');
  const btn = document.querySelector('.btn-login');

  profil.classList.add('profil-aktif');
  btn.classList.add('btn-hiden');
}

const img_profil = document.querySelector('.foto-profil');
const pro_select = document.querySelector('.profil-select');

img_profil.addEventListener('click', () => {
  pro_select.classList.toggle('profil-klick');
});

// Logout
const logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  window.location.href = '../index.html'; // halaman awal / landing page
});
