var favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
var grid = document.getElementById("events-grid");

function etkinlikleriBas(liste) {
  if (!grid) return;
  grid.innerHTML = "";

  for (var i = 0; i < liste.length; i++) {
    var e = liste[i];
    var favMi = favoriler.includes(e.id);

    grid.innerHTML += `
      <div class="event-card">
        <div class="card-img-wrap">
          <img src="${e.image}" alt="${e.title}">
          <span class="card-badge">${e.category}</span>
          <button class="btn-fav ${favMi ? "active" : ""}" onclick="favoriYap(${e.id})">
            ${favMi ? "★" : "☆"}
          </button>
        </div>
        <div class="card-body">
          <span class="card-date">${e.date}</span>
          <h3 class="card-title">${e.title}</h3>
          <p class="card-location">${e.location}</p>
          <div class="card-footer">
            <span class="card-price">${e.price} TL</span>
            <a href="etkinlik-detay.html?id=${e.id}" class="btn-detail">Detay</a>
          </div>
        </div>
      </div>
    `;
  }
}


var butonlar = document.querySelectorAll(".filter-btn");

for (var i = 0; i < butonlar.length; i++) {
  butonlar[i].onclick = function () {
    for (var j = 0; j < butonlar.length; j++) {
      butonlar[j].classList.remove("active");
    }
    this.classList.add("active");

    var kategori = this.getAttribute("data-category");

    if (kategori === "all") {
      etkinlikleriBas(etkinlikler);
    } else {
      var filtrelenen = [];
      for (var k = 0; k < etkinlikler.length; k++) {
        if (etkinlikler[k].category.toLowerCase() === kategori.toLowerCase()) {
          filtrelenen.push(etkinlikler[k]);
        }
      }
      etkinlikleriBas(filtrelenen);
    }
  };
}

function favoriYap(id) {
  if (favoriler.includes(id)) {
    favoriler = favoriler.filter(function (fId) {
      return fId !== id;
    });
  } else {
    favoriler.push(id);
  }
  localStorage.setItem("favoriler", JSON.stringify(favoriler));

  var seciliBtn = document.querySelector(".filter-btn.active");
  var seciliKat = seciliBtn ? seciliBtn.getAttribute("data-category") : "all";

  if (seciliKat === "all") {
    etkinlikleriBas(etkinlikler);
  } else {
    var filtrelenen = [];
    for (var k = 0; k < etkinlikler.length; k++) {
      if (etkinlikler[k].category.toLowerCase() === seciliKat.toLowerCase()) {
        filtrelenen.push(etkinlikler[k]);
      }
    }
    etkinlikleriBas(filtrelenen);
  }
}

etkinlikleriBas(etkinlikler);