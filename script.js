document.addEventListener('DOMContentLoaded', function () {
  const heroElements = document.querySelectorAll('.hero-animated, .belgian-box');
  const drinkElements = document.querySelectorAll('.minuman-animated');

  const observerOptions1 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions1);

  heroElements.forEach(el => observer1.observe(el));

  const observerOptions2 = {
    threshold: 0.1
  };

  const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions2);

  drinkElements.forEach(el => observer2.observe(el));
});

fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
      });
      
    document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const navOverlay = document.getElementById("navOverlay");

  menuBtn.addEventListener("click", () => {
    navOverlay.style.height = "100%"; // buka penuh
  });

  closeMenu.addEventListener("click", () => {
    navOverlay.style.height = "0%"; // tutup
  });

  // Tutup menu saat klik link
  document.querySelectorAll(".overlay-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navOverlay.style.height = "0%";
    });
  });
});
// Simplified A/B Test Result Data
    const results = {
        stability: {
            cr: '25% Conversion Rate (WINNER)',
            message: '24/7 Stability clearly leads in audience attraction.'
        },
        green: {
            cr: '15% Conversion Rate',
            message: 'Green Energy performs well, but 24/7 focus is more effective.'
        }
    };

    // Fungsi untuk menyembunyikan hasil dan mengaktifkan tombol kembali
    function hideResult() {
        const resultDiv = document.getElementById('survey-result');
        
        // Mulai Fade-out (membuat opacity menjadi 0)
        resultDiv.style.opacity = '0';

        // Set Timeout untuk menyembunyikan display setelah animasi selesai (0.3 detik)
        setTimeout(() => {
            resultDiv.style.display = 'none';
            // Hapus styling lain
            resultDiv.style.backgroundColor = '';
            resultDiv.style.color = '';
            resultDiv.style.maxWidth = '';
            resultDiv.style.padding = '';
            resultDiv.style.margin = '';
        }, 300); // Harus sama dengan durasi transisi di CSS (0.3s)

        // Re-enable all buttons
        document.querySelectorAll('#headline-survey button').forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('border', 'border-warning', 'border-3');
        });
        
        document.getElementById('result-text').innerHTML = '';
    }

    function selectHeadline(choice) {
        const resultDiv = document.getElementById('survey-result');
        
        // 1. Set styling dasar sebelum ditampilkan (terutama untuk transisi)
        resultDiv.style.transition = 'opacity 0.3s ease-in-out'; // Tambahkan transisi di sini
        resultDiv.style.backgroundColor = '#333';
        resultDiv.style.color = 'white';
        resultDiv.style.padding = '10px';
        resultDiv.style.maxWidth = '350px';
        resultDiv.style.margin = '15px auto';
        resultDiv.querySelector('h4').style.color = '#198754'; 

        // 2. Isi konten
        const selectedResult = results[choice];
        resultDiv.querySelector('#result-text').innerHTML = `
            <p class="fw-bold mb-1">Your Selection: ${choice === 'stability' ? '24/7 Stability' : 'Green Energy'}</p>
            <p>Conversion Rate: <span class="fw-bolder">${selectedResult.cr}</span></p>
            <p class="mt-2 mb-0"><small>${selectedResult.message}</small></p>
        `;
        
        // 3. Tampilkan div dan atur opacity ke 1 untuk memulai fade-in
        resultDiv.style.display = 'block';
        // Memberikan sedikit jeda (0ms) sebelum setting opacity agar transisi berjalan
        setTimeout(() => {
             resultDiv.style.opacity = '1';
        }, 10);
        
        // 4. Disable buttons
        const buttons = document.querySelectorAll('#headline-survey button');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.getAttribute('onclick').includes(choice)) {
                button.classList.add('border', 'border-warning', 'border-3');
            }
        });
        
        // 5. Automatically hide after 3 seconds (3000ms)
        setTimeout(() => {
            hideResult();
        }, 3000); 
    }

    // Pastikan saat load awal, opacity diatur 0 agar fade-in berjalan dengan benar
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('survey-result').style.opacity = '0';
    });