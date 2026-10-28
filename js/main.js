// js/main.js – beri label tiap blok, mis. // ===== [Navbar] ===== (lihat docs/ISSUES.md)



// ===== [Hero] ganti warna cat =====
const swatches = document.querySelectorAll('.swatch');
const swatchLabel = document.getElementById('swatchLabel');
swatches.forEach(btn => {
  btn.addEventListener('click', () => {
    swatches.forEach(s => { s.classList.remove('is-active'); s.setAttribute('aria-checked', 'false'); });
    btn.classList.add('is-active');
    btn.setAttribute('aria-checked', 'true');
    document.documentElement.style.setProperty('--paint', btn.dataset.color);
    swatchLabel.textContent = 'Warna: ' + btn.dataset.name;
  });
});
