/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

/*
var pricetiket = 0.21;

var discountMinori = 0.2;

var discountOver65 = 0.4;*/
/*
var j = parseInt(prompt("Inserisci quanti km devi percorere"));

var k = parseInt(prompt("Insersci la tua età"));

var price = j * 0.21;

if (k < 18) {
  document.getElementById("pirecetiket").innerHTML = price.toFixed(2) * 0.8 + " € ";
} else {
  if (k >= 65) {
    document.getElementById("pirecetiket").innerHTML = price.toFixed(2) * 0.6 + " € ";
  } else {
    document.getElementById("pirecetiket").innerHTML = price.toFixed(2) + " € ";
  }
}
*/
/*
var textage = document.getElementById("textage");
var textticketprice = document.getElementById("textticketprice");
var textdiscount = document.getElementById("textdiscount");*/

var j = parseInt(prompt("Inserisci quanti km devi percorere: "));
var k = parseInt(prompt("Inserisci la tua età: "));

var pricetiket = 0.21;
var discountMinori = 0.2;
var discountOver65 = 0.4;

var totalkmprice = pricetiket * j;

if (isNaN(j) || isNaN(k)) {
  alert("devi inserire dei numeri");
} else {
  if (k < 18) {
    var discount = totalkmprice * discountMinori;
    var ticketpriceuser = totalkmprice - discount;
    textage.innerHTML = "6 minirene";
    textticketprice.innerHTML =
      "Il biglietto costa " + ticketpriceuser.toFixed(2) + "€";
    textdiscount.innerHTML = "Il tuo sconto è di " + discount.toFixed(2) + "€";
  } else if (k >= 65) {
    var discount = totalkmprice * discountOver65;
    var ticketpriceuser = totalkmprice - discount;
    textage.innerHTML = "6 vechio";
    textticketprice.innerHTML =
      "Il biglietto costa " + ticketpriceuser.toFixed(2) + "€";
    textdiscount.innerHTML = "Il tuo sconto è di " + discount.toFixed(2) + "€";
  } else {
    totalkmprice = pricetiket * j;
    textage.innerHTML = "hai un eta compresa tra 18 e 65 anni";
    textticketprice.innerHTML =
      "Il biglietto costa " + totalkmprice.toFixed(2) + "€";
    textdiscount.innerHTML = "nesun sconto aplicato";
  }
}
