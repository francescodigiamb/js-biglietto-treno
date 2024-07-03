// console.log('ciao mondo')

// Chiedere all'utente il numero di chilometri da percorrere

let km = prompt ('Quanti chilometri devi percorrere');
console.log (km)

// Chiedere all'utente l'età

let età = prompt ('Quanti anni hai')
console.log (età)

// Calcolare il prezzo totale del viaggio
    // prezzo del biglietto è definito in base ai km (0.21€ al km)
    let prezzoBiglietto = 0.21 * km
    console.log (prezzoBiglietto.toFixed(2))
    
    let prezzoScontato;
    
    if (età < 18) {
        
        // va applicato uno sconto del 20% per i minorenni
        prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 0.20 )
        
        console.log (prezzoScontato.toFixed(2))

        // va applicato uno sconto del 40% per gli over 65
    } else if (età > 65) {
        
        prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 0.40)
    
        console.log (prezzoScontato.toFixed(2))
    } else {
        
        prezzoScontato = prezzoBiglietto - ( prezzoBiglietto * 0)

        console.log (prezzoScontato.toFixed(2))
        
    }
    
    // Stampare il prezzo del biglietto in console

    console.log (prezzoScontato.toFixed(2))


// Output del prezzo finale va messo fuori in forma umana con massimo due decimali
