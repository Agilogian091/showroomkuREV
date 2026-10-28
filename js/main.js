// js/main.js – beri label tiap blok, mis. // ===== [Navbar] ===== (lihat docs/ISSUES.md)




// ===== [Kontak] form -> WhatsApp (website statis, tanpa backend) =====
const WA_NUMBER = '6281200000000'; // GANTI dengan nomor WhatsApp showroom (format 62...)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const text = `Halo SHOWROOMKU, saya ${f.nama.value}. Saya tertarik dengan: ${f.minat.value}. ${f.pesan.value}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
