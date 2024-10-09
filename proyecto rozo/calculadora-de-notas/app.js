const username = document.getElementById('name');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const calculate = document.getElementById('btn-calculate');
const resultNote = document.getElementById('resultNote');
const predict = document.getElementById("btn-predict");

calculate.addEventListener('click', calculateNote);
predict.addEventListener('click',predictNote);
function calculateNote(event) {
    event.preventDefault(); 

    let name = username.value;

    let nota1 = Number(note1.value);
    let nota2 = Number(note2.value);
    let nota3 = Number(note3.value);

    let finalNote = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4);

    resultNote.textContent = `buenas tardes ${name}, su nota es de: ${finalNote.toFixed(2)}`;


if (finalNote < 3.5) {
    resultNote.textContent =  `buenas tardes ${name},ha perdido la materia`;
    resultNote.style.color = "black";
} else if (finalNote >= 3.5 && finalNote <= 4.5) {
    resultNote.textContent = `buenas tardes ${name},ha ganado la materia`;
    resultNote.style.color = "orange";
} else {
    resultNote.textContent =`buenas tardes ${name},su nota es sobresaliente`;
    resultNote.style.color = "green";
}

}
function predictNote() {
let nota1 = Number(note1.value);
let nota2 = Number(note2.value);


let requiredNote3 = (3.5 - (nota1 * 0.3 + nota2 * 0.3)) / 0.4;


note3.value = Math.max(0, requiredNote3).toFixed(2); 
}