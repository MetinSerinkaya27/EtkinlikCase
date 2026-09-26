var urlParams = new URLSearchParams(window.location.search);
var etkinlikId = parseInt(urlParams.get("id"));

var detayAlani = document.getElementById("detay-alani");

var secilen = null;
for (var i = 0; i < etkinlikler.length; i++) {
  if (etkinlikler[i].id === etkinlikId) {
    secilen = etkinlikler[i];
    break;
  }
}

if (secilen) {
  document.title = secilen.title + " | EventHub";

  detayAlani.innerHTML = `
    <div class="detay-kutu">
      <div class="detay-sol">
        <img src="${secilen.image}" alt="${secilen.title}">
      </div>
      <div class="detay-sag">
        <span class="detay-badge">${secilen.category}</span>
        <h1 class="detay-baslik">${secilen.title}</h1>
        
        <div class="detay-bilgiler">
          <p><strong>Tarih:</strong> ${secilen.date}</p>
          <p><strong>Mekan:</strong> ${secilen.location}</p>
          <p><strong>Fiyat:</strong> ${secilen.price} TL</p>
        </div>

        <div class="detay-aciklama">
          <h3>Etkinlik Hakkında</h3>
          <p>${secilen.description}</p>
        </div>
      </div>
    </div>
  `;
} else {
  detayAlani.innerHTML = "<p>Aradığınız etkinlik bulunamadı.</p>";
}