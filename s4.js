export default `
<h2>4: Escrevendo Strings</h2>
<textarea id="codeEditor-4" data-size="810">
let nome = "Gunter"
let sobrenome = 'Amorim'

//concatenação de strings
console.log(nome + sobrenome)

//outra forma de concatenar
nome += sobrenome;
//console.log(nome + " é o professor de programação ")

//Aqui temos um problema na string
const stringInvalida = "Estamos usando uma \"excelente\" linguagem de programação"

//para utilizar as aspas duplas dentro de uma string temos que usar o "escape character"
const stringValida = "Estamos usando uma \"excelente\" linguagem de programação"

//Podemos também usar aspas simples
const stringValidaOutraForma = 'Estamos usando uma "excelente" linguagem de programação'

//As strings em javascript possuem utilitários ligados a elas, como a propriedade "length"
const minhaString = "Laranja!"
//console.log(minhaString, minhaString.length, "maçã".length)

//As strings são arrays de caracteres, o que permite acesso a seus membros como um array
console.log(minhaString[0], minhaString[1], minhaString[2])
console.log(minhaString[minhaString.length - 1])
</textarea>
<div id="output-4"></div>
<button id="runButton-4">Rodar</button>
<button id="resetButton-4">Voltar ao original</button>
`