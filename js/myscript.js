console.log("verifica funzionamento console log");

console.log(document.getElementById("demojs").innerHTML)
document.getElementById("demojs").innerHTML =
"START BOOTSTRAP JSedition";


document.getElementById("demojs2").innerHTML =
"Cambio il contenuto di questo p per fare un ulteriore prova con js";
console.log("Il contenuto originale del p in questione è stato cambiato in:" + document.getElementById("demojs2").innerHTML);