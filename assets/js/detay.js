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
        <img src="${secilen.image}" alt="${secilen.title}" decoding="async" fetchpriority="high">
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
if (secilen) {
  var semaVerisi = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://eventhub.local/index.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Etkinlikler",
            "item": "https://eventhub.local/etkinlikler.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": secilen.title,
            "item": window.location.href
          }
        ]
      },
      {
        "@type": "Event",
        "name": secilen.title,
        "description": secilen.description,
        "startDate": secilen.date + "T20:00:00+03:00",
        "location": {
          "@type": "Place",
          "name": secilen.location
        },
        "image": [
          "https://eventhub.local/" + secilen.image
        ],
        "offers": {
          "@type": "Offer",
          "price": secilen.price,
          "priceCurrency": "TRY",
          "availability": "https://schema.org/InStock",
          "url": window.location.href
        }
      }
    ]
  };

  var semaAlani = document.getElementById("schema-event");
  if (semaAlani) {
    semaAlani.textContent = JSON.stringify(semaVerisi, null, 2);
  }
}