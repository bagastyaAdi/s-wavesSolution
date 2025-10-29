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



    // Data Hasil Uji Coba A/B dengan persentase terbaru
    const results = {
        stability: {
            cr: '62.5% ', // Data baru
        },
        green: {
            cr: '37.5% ', // Data baru
        }
    };

    function hideResult() {
        const resultDiv = document.getElementById('survey-result');
        
        // Mulai Fade-out
        resultDiv.style.opacity = '0';

        // Sembunyikan setelah transisi 0.3s selesai
        setTimeout(() => {
            resultDiv.style.display = 'none';
            // Hapus styling lain
            resultDiv.style.backgroundColor = '';
            resultDiv.style.color = '';
            resultDiv.style.maxWidth = '';
            resultDiv.style.padding = '';
            resultDiv.style.margin = '';
        }, 300); 

        // Re-enable all buttons
        document.querySelectorAll('#headline-survey button').forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('border', 'border-warning', 'border-3');
        });
        
        document.getElementById('result-text').innerHTML = '';
    }

    function selectHeadline(choice) {
        const resultDiv = document.getElementById('survey-result');
        const selectedResult = results[choice];

        if (selectedResult) {
            // 1. Set styling untuk kotak hasil
            resultDiv.style.backgroundColor = '#333';
            resultDiv.style.color = 'white';
            resultDiv.style.padding = '10px';
            resultDiv.style.maxWidth = '350px';
            
            // Mengatur posisi: Tengah di mobile, Kanan di desktop (karena CSS Anda yang mengatur margin auto/right)
            resultDiv.style.margin = '15px auto'; 
            
            resultDiv.querySelector('h4').style.color = '#198754'; 
            
            // 2. Isi konten HANYA DENGAN PERSENTASE
            resultDiv.querySelector('#result-text').innerHTML = `
                <p class="fw-bold mb-1">Result for ${choice === 'stability' ? '24/7 Stability' : 'Green Energy'}:</p>
                <h2 class="fw-bolder text-white ">${selectedResult.cr}</h2>
            `;
            
            // 3. Tampilkan div (Fade-in)
            resultDiv.style.display = 'block';
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
    }