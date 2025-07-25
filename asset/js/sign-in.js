const form = document.querySelector('form');
const inputpwd = form.querySelector('#pwd');
const eye_open = form.querySelector('.open');
const eye_close = form.querySelector('.close');
const warpwd = document.querySelector('.text-warning-pass');
const waremail = document.querySelector('.text-warning-email');
eye_close.addEventListener('click', () => {
  eye_close.classList.add('eye');
  eye_open.classList.remove('eye');
  inputpwd.type = 'text';
});
eye_open.addEventListener('click', () => {
  eye_open.classList.add('eye');
  eye_close.classList.remove('eye');
  inputpwd.type = 'password';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email');
  const emailvalue = email.value;
  const password = document.querySelector('#pwd').value;
  // console.log(password);
  let valid = true;
  const reemail = /^[^\s@]+@gmail+\.com+$/;
  const rg_az = /^(?=.*[a-z]).*$/;
  const rg_AZ = /^(?=.*[A-Z]).*$/;
  const rg_sim = /^(?=.*[!@#$%^*/><]).*$/;
  //  email validasi
  // const text1 = document.createElement('p');
  if (emailvalue === '') {
    console.log('masuk');
    waremail.textContent = 'email tidak boleh kosong';
  } else {
    if (!reemail.test(emailvalue)) {
      waremail.textContent = 'gmail tidak valid';
    }
  }

  if (password === '') {
    warpwd.textContent = 'password tidak boleh kosong';
    return;
  }
  if (!rg_AZ.test(password)) {
    warpwd.textContent = 'harus ada huruf besar';
    return;
  }
  if (!rg_az.test(password)) {
    warpwd.textContent = 'harus ada huruf kecil';
    return;
  }
  if (!rg_sim.test(password)) {
    warpwd.textContent = 'harus ada karakter';
    return;
  }
  if (password.length < 8) {
    warpwd.textContent = 'password harus lebih dari 8 karakter';
    return;
    // return;
  }
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if (emailvalue === storedEmail && password === storedPassword) {
    alert('Login berhasil, menuju ke halaman HOME');
    localStorage.setItem('loggedIn', 'true');
    window.location.href = '../index.html';
  } else {
    alert('Email atau password salah');
  }
});
