// Fungsi bikin spacer sesuai tinggi navbar
function updateNavbarSpacer() {
  const navbar = document.querySelector('#navbar-placeholder nav'); 
  const spacer = document.getElementById('navbar-spacer');
  
  if (navbar && spacer) {
    spacer.style.height = navbar.offsetHeight + "px";
  }
}

// Jalankan saat halaman load
window.addEventListener("load", updateNavbarSpacer);
// Jalankan juga saat resize (biar responsive)
window.addEventListener("resize", updateNavbarSpacer);

const navbarPlaceholder = document.getElementById('navbar-placeholder');

// Simpan navbar di localStorage supaya halaman lain langsung punya data
if (localStorage.getItem('navbarHTML')) {
  navbarPlaceholder.innerHTML = localStorage.getItem('navbarHTML');
}

fetch('/navbar.html')
  .then(res => res.text())
  .then(data => {
    navbarPlaceholder.innerHTML = data;
    localStorage.setItem('navbarHTML', data); // simpan untuk halaman berikutnya
  })
  .catch(err => console.error('Gagal memuat navbar:', err));

