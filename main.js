/*
Descrizione:
Visualizzare in pagina (html) 5 numeri casuali.
Avviare un timer di 30 secondi
Dopo 30 secondi, nascondere i numeri.
L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

const container = document.querySelector(".container");
const timer = document.getElementById("timer");

//variabili globali
const numeriGenerati = [];
const numeriUtente = [];
const indovinati = [];

function generaRandom(){

        do{
            const numRand = Math.floor(Math.random() * 90)+1 ;
            if(!numeriGenerati.includes(numRand))
                numeriGenerati.push(numRand);

        }while(numeriGenerati.length<5);

 
    container.innerHTML+= `<h2>${numeriGenerati.join(" ")}</h2>`;
    

}

const nascondi = setTimeout(nascodiNum , 30000)
function nascodiNum(){
    container.innerHTML = "";
}





const chiedi =  setTimeout(chiediNumeri,30100) 
function chiediNumeri(){


   
  for(let i = 0 ; i < 5 ; i++){
      let inseritoUtente = prompt(`Inserisci il tuo  ${+i+1}° numero `);
        numeriUtente.push(inseritoUtente);
        if(numeriGenerati.includes(parseInt(numeriUtente[i])))
            indovinati.push(numeriUtente[i])

  }

  risultato();

}


function risultato(){
    if(indovinati.length===0)
        {
            alert("Non hai indovinato nessun numero riprova");
        }
        else{
            alert(`Hai indovinato ${indovinati.length} numeri \n questo è l'elenco di quelli indovinati \n ${indovinati.join(" ")}`)
        }
}

setInterval(function (){

if(timer.innerText>0)
timer.innerText--;   

}, 1000);




generaRandom();
