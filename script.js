document.addEventListener('DOMContentLoaded', function() {
    // Modal elemanlarını seçme
const videoLink = document.getElementById('videoLink');
const videoPopup = document.getElementById('video-popup');
const closeModal = document.getElementById('closeModal');
const introVideo = document.getElementById('introVideo');

//ESRA DİNÇ tıklayınca modal'ı aç
videoLink.addEventListener('click', function(e) {
    e.preventDefault(); // Sayfa yenilenmesini engelle
    videoPopup.classList.remove('hidden');
    videoPopup.classList.add('flex'); // Modalı görünür yap
});

// Kapatma butonuna basınca modal'ı kapat
closeModal.addEventListener('click', function() {
    videoPopup.classList.add('hidden');
    videoPopup.classList.remove('flex');
    introVideo.pause(); // Video oynatılıyorsa durdur
    introVideo.currentTime = 0; // Video başlangıca sarılır
});

// ESC kapatma
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !videoPopup.classList.contains('hidden')) {
        closeModal.click();
    }
});
    
    const sidebar = document.getElementById('sidebar');
    const contactLink = document.querySelector('a[href="#iletisim"]'); // İletişim linki
    const closeSidebarButton = document.getElementById('closeSidebar');

    // İletişim linkine tıklayınca sidebar'ı aç
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault(); // Varsayılan kaydırma davranışını engeller
            sidebar.classList.remove('translate-x-full');
        });
    }

    // Kapatma butonuna tıklayınca sidebar'ı kapat
    if (closeSidebarButton) {
        closeSidebarButton.addEventListener('click', function() {
            sidebar.classList.add('translate-x-full');
        });
    }
});