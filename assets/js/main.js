// js-biglietto-treno; DESCRIZIONE:  chiedere all'utente il numero di chilometri che vuole percorrere e la sua età. Sulla base di queste informazioni calcolare il prezzo totale del viaggio, secondo queste regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km) - va applicato uno sconto del 20% per i minorenni e va applicato uno sconto del 40% per gli over 65. Output del prezzo finale va scritto in forma umana (con massmo due deimali, per indicare centesimi sul prezzo).


//chiedere all'utente il numero di km che vuole percorrere

const tratta = parseInt(prompt("Quanti Km vuoi percorrere?"));
console.log(tratta);

if (isNaN(tratta)){
    alert("Attenzione, Inserire un valore numerico");
}




//chiedere all'utente la sua età

const age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

if (isNaN(age)) {
    alert("Attenzione, inserire un valore numerico")
}


//calcolare prezzo intero del viaggio

const price_one_km = 0.21;
const full_price = tratta * price_one_km ;

if (age < 18){
    /* il prezzo del biglietto con lo sconto per gli under18 */

    const discount_under18 = full_price * 0.20;
    const price_under18 = full_price - discount_under18;
    
    console.log(`il prezzo del tuo biglietto è ${price_under18} €`);
} 

else if (age > 65) {
    /* il prezzo del biglietto con lo sconto per gli over65 */
    const discount_over65 = full_price * 0.40;
    const price_over65 = full_price - discount_over65;

    console.log(`Il prezzo del tuo biglietto è ${price_over65} €`);
}

else {
    /* il prezzo del biglietto intero */
    console.log(` Il prezzo del tuo biglietto è ${full_price} €`);
}









