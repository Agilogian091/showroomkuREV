// js/main.js – beri label tiap blok, mis. // ===== [Navbar] ===== (lihat docs/ISSUES.md)
// js/catalog.js
// ===== [Katalog] filter tipe mobil =====
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.car-card');
const noResult = document.getElementById('noResult');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    let shown = 0;
    cards.forEach(card => {
      const match = filter === 'semua' || card.dataset.type === filter;
      card.hidden = !match;
      if (match) shown++;
    });
    noResult.hidden = shown > 0;
  });
});
