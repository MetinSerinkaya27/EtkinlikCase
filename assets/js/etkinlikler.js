var cards = document.getElementById("etkinlik-cards");
var baslik = document.getElementById("sayfa-basligi");
var aciklama = document.getElementById("sayfa-aciklamasi");


function favorileriAl() {
  var kayit = localStorage.getItem("favoriler");
  if (kayit != null) {
    return JSON.parse(kayit);
  } else {
    return [];
  }
}

function favoriYap(id, btn) {
  var dizi = favorileriAl();
  var varMi = false;
  var sira = -1;

  for (var i = 0; i < dizi.length; i++) {
    if (dizi[i] == id) {
      varMi = true;
      sira = i;
      break;
    }
  }

  if (varMi == false) {
    dizi.push(id);
    btn.className = "btn-fav active";
    btn.innerHTML = "★";
  } else {
    dizi.splice(sira, 1);
    btn.className = "btn-fav";
    btn.innerHTML = "☆";
  }

  localStorage.setItem("favoriler", JSON.stringify(dizi));
}


function kartlariGoster(liste) {
  cards.innerHTML = "";
  var favlar = favorileriAl();

  if (liste.length == 0) {
    cards.innerHTML = "<p>Bu alanda henüz etkinlik yok.</p>";
    return;
  }

  for (var i = 0; i < liste.length; i++) {
    var et = liste[i];


    var favoriMi = false;
    for (var k = 0; k < favlar.length; k++) {
      if (favlar[k] == et.id) {
        favoriMi = true;
        break;
      }
    }

    var favClass = "btn-fav";
    var favYazi = "☆";
    if (favoriMi == true) {
      favClass = "btn-fav active";
      favYazi = "★";
    }

    var kartHtml = '<div class="event-card">' +
      '<div class="card-img-wrap">' +
        '<img src="' + et.image + '" alt="' + et.title + '" loading="lazy">' +
        '<span class="card-badge">' + et.category + '</span>' +
        '<button class="' + favClass + '" onclick="favoriYap(' + et.id + ', this)">' + favYazi + '</button>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-date">' + et.date + '</div>' +
        '<div class="card-title">' + et.title + '</div>' +
        '<div class="card-location">' + et.location + '</div>' +
        '<div class="card-footer">' +
          '<span class="card-price">' + et.price + ' TL</span>' +
          '<a href="etkinlik-detay.html?id=' + et.id + '" class="btn-detail">Detay</a>' +
        '</div>' +
      '</div>' +
    '</div>';

    cards.innerHTML = cards.innerHTML + kartHtml;
  }
}


var urlBilgisi = new URLSearchParams(window.location.search);
var gelenKategori = urlBilgisi.get("kategori");

if (gelenKategori != null && gelenKategori != "") {

  var filtrelenenler = [];
  for (var j = 0; j < etkinlikler.length; j++) {
    if (etkinlikler[j].category.toLowerCase() == gelenKategori.toLowerCase()) {
      filtrelenenler.push(etkinlikler[j]);
    }
  }
  kartlariGoster(filtrelenenler);
} else {

  kartlariGoster(etkinlikler);
}