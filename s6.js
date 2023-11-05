export default `
<h2>6: Funções</h2>
<textarea id="codeEditor-6" data-size="650">
//Funções em javascript são bem simples de criar e de usar
function soma(x, y){ //não é necessário "tipar" os parâmetros nem o retorno da função
    return x + y
}
console.log(soma(5,7))

//Você também pode fazer uma função sem retorno
function somaSemRetorno(x,t) {
    console.log(x + y)
}
//somaSemRetorno(10,8)

//definir uma variável dentro da função torna ela indisponível fora e vice-versa

function imprimirValor10(){
    const valor = 10
    console.log(valor)
}
//imprimirValor10()
//console.log(valor)
</textarea>
<div id="output-6"></div>
<button id="runButton-6">Rodar</button>
<button id="resetButton-6">Voltar ao original</button>
`