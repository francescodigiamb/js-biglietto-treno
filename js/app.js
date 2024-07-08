// ESERCIZIO 1 (senza form)

// // Chiedere all'utente il numero di chilometri da percorrere

// let km = prompt ('Quanti chilometri devi percorrere');
// console.log (km)

// // Chiedere all'utente l'età

// let età = prompt ('Quanti anni hai')
// console.log (età)

// // Calcolare il prezzo totale del viaggio
//     // prezzo del biglietto è definito in base ai km (0.21€ al km)
//     let prezzoBiglietto = 0.21 * km
//     console.log (prezzoBiglietto.toFixed(2))
    
//     let prezzoScontato;
    
//     if (età < 18) {
        
//         // va applicato uno sconto del 20% per i minorenni
//         prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 0.20 )
        
//         console.log (prezzoScontato.toFixed(2))

//         // va applicato uno sconto del 40% per gli over 65
//     } else if (età > 65) {
        
//         prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 0.40)
    
//         console.log (prezzoScontato.toFixed(2))
//     } else {
        
//         prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 0)

//         console.log (prezzoScontato.toFixed(2))
        
//     }
    
// // Stampare il prezzo del biglietto in console
    
// console.log (prezzoScontato.toFixed(2))


// ESERCIZIO 2.0 (con form)

// Richiamare il form

const formElement = document.getElementById ("form-calcolo")
console.log (formElement)

// Richiamare l'input km 

const inputKmElement = document.getElementById ("km")

// console.log (kmElement)

// Richiamare la select dell'età

const ageElement = document.getElementById ("age")
console.log (ageElement)

ageElement.addEventListener ('click', function () {

    const age = ageElement.value
    console.log (age)
})
// // Recuperiamo l'età

const age = ageElement.value

let prezzoBiglietto = inputKmElement * 0.21

// Richiamo il tasto per calcolare

const calculationElement = document.getElementById ("calculation")

// Aggiungiamo altro evento al form

 calculationElement.addEventListener ('click', function (event){

    event.preventDefault();

    if (age === Minorenne) {

        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.20)

                console.log (prezzoBiglietto.toFixed(2))


    } else if (age === over65) {

        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.40)

            console.log (prezzoBiglietto.toFixed(2))

    } else {

            console.log(prezzoBiglietto.toFixed(2))

    }

 })
    
    // Recuperiamo i km
    
    
    // // Dichiariamo la variabile per il prezzo base
    
    // let prezzoBiglietto = km * 0.21
    
    // // Dichiariamo la variabile per lo sconto
    
    // let prezzoScontato 
    
    // SE minorenne assegnamo lo sconto
    // if  (ageElement === Minorenne) {
        
    //     prezzoScontato = prezzoBiglietto - (prezzoBiglietto * 0.2)

    // ALTRIMENTI SE over65 assegnamo un altro sconto 
    
    // ALTRIMENTI prezzo base