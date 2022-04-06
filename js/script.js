const name1 = prompt ("Come ti chiami?");
const lastname1 = prompt ("Come fai di cognome?");
document.getElementById("title").innerHTML = `Ciao ${name1} ${lastname1}!`;
const color1 = prompt ("Qual è il tuo colore preferito?");
// se scrive un colore base css cambia il colore del background
document.body.style.backgroundColor = color1;
document.getElementsByTagName("main")[0].innerHTML = `
<section>
La tua password super sicura è: 
    <p id="psw"></p>
</section>
`;
document.getElementById("psw").innerHTML = `${name1}${lastname1}${color1}21`;
