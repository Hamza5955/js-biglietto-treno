/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

/*
var pricetiket = 0.21;

var discountMinori = 0.2;

var discountOver65 = 0.4;*/

var j = parseInt(prompt("Inserisci quanti km devi percorere"));

var k = parseInt(prompt("Insersci la tua età"));

var price = j * 0.21;

if (k < 18) {
  document.getElementById("pirecetiket").innerHTML = price * 0.8 + " € ";
} else {
  if (k >= 65) {
    document.getElementById("pirecetiket").innerHTML = price * 0.6 + " € ";
  } else {
    document.getElementById("pirecetiket").innerHTML = price + " € ";
  }
}
