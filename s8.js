export default `
<h2>8: Loops</h2>
<textarea id="codeEditor-8" data-size="1100">
//Temos o loop while
let cont = 1

while(cont < 5){
    console.log("contador =", cont)
    cont++
}
//Também temos o loop for

for(let i = 0; i < 5; i++){
    console.log("i = ", i)
}

//com a propriedade "length" dos arrays, fazer o loop fica mais simples
//Acrescente o sobrenome "Amorim" nos nomes contidos no array a seguir:
const nomes = ["Gunter", "Juliana", "Dante"]

for(let i = 0; i < nomes.length; i++){
    nomes[i] += " Amorim"
}

//console.log(nomes)
</textarea>
<div id="output-8"></div>
<button id="runButton-8">Rodar</button>
<button id="resetButton-8">Voltar ao original</button>
`