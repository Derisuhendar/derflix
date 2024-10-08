const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link'); 
const loginLink = document.querySelector('.login-link'); 
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// Menambahkan event listener untuk menampilkan form register
registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah perilaku default
    wrapper.classList.add('active'); 
    // Sembunyikan form login dan tampilkan form register
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.register').style.display = 'block';
});

// Menambahkan event listener untuk menampilkan form login
loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah perilaku default
    wrapper.classList.remove('active'); 
    // Sembunyikan form register dan tampilkan form login
    document.querySelector('.form-box.register').style.display = 'none';
    document.querySelector('.form-box.login').style.display = 'block';
});

// Menambahkan event listener untuk membuka popup login
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active'); 
    // Tampilkan form login saat membuka popup
    document.querySelector('.form-box.login').style.display = 'block';
    document.querySelector('.form-box.register').style.display = 'none';
});

// Menambahkan event listener untuk menutup popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active'); 
    // Sembunyikan kedua form saat menutup popup
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.register').style.display = 'none';
});
