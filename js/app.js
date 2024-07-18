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

const kmInputElement = document.getElementById ("km")

console.log (kmInputElement)

// Richiamare l'input dell'età

const ageElement = document.getElementById ("age")

console.log (ageElement)

// Richiamiamo l'output del prezzo finale del biglietto

const prezzoFinaleElement = document.getElementById ('ticket')

console.log (prezzoFinaleElement)

formElement.addEventListener ('submit', function (event){
    
    event.preventDefault()
    
    // Recuperiamo i km
    const km = parseFloat(kmInputElement.value) //number
    console.log (km)
    const age = parseInt(ageElement.value) //number
    console.log (age)
    
    // Dichiariamo la variabile per il prezzo base

    let prezzoBiglietto = parseFloat ( km * 0.21 ) //number
    
    console.log (prezzoBiglietto)
    // ci calcoliamo un eventuale sconto 
    if (age < 18) {
        
        prezzoScontato = prezzoBiglietto - (prezzoBiglietto * 0.20)
        
        console.log (prezzoScontato.toFixed(2))
        
        
    } else if (age > 65) {
        
        prezzoScontato = prezzoBiglietto - (prezzoBiglietto * 0.40)
        
        console.log (prezzoScontato.toFixed(2))
        
    } else {
        prezzoScontato = prezzoBiglietto
        console.log(prezzoScontato.toFixed(2))
        
    }
    console.log ('submit del form')
    // stampiamo il prezzo finale  
    prezzoFinaleElement.innerHTML = prezzoScontato + '€'
})