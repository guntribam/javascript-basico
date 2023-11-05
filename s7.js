export default `
<h2>7: Condicionais e booleanos</h2>
<textarea id="codeEditor-7" data-size="1100">
//Em javascript temos o tipo booleano que guarda "true" ou "false"
function gostaDePizza(gosta){ 
    if(gosta){
        console.log("que bom que gosta de pizza")
    } else {
        console.log("Tá maluco! Como alguém não gosta de pizza")
    }
}

let amoPizza = true;

gostaDePizza(amoPizza)

//amoPizza = false

//gostaDePizza(amoPizza)

//Aqui temos os operadores booleanos já estudados em portugol e c
// >, <, >=, <=, == e !=

//let idade = 25
function verificaIdade(idade){
    if(idade === 0){
        console.log("informe uma idade válida")
    } else if(idade >= 12 && idade < 18 ){
        console.log("Você é um adolescente")
    } else if(idade >= 18 && idade < 60){
        console.log("Você é um adulto")
    } else if(idade >= 60){
        console.log("Você é um idoso")
    } else {
        console.log("Você é uma criança")
    }
}
//verificaIdade(idade)

</textarea>
<div id="output-7"></div>
<button id="runButton-7">Rodar</button>
<button id="resetButton-7">Voltar ao original</button>
`