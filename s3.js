export default `
<h2>3: Inicialização de variáveis e aritmética básica</h2>
<textarea id="codeEditor-3" data-size="950">
//tente imprimir o valor de a, b e c

var a //= 5
var b //= 10
var c //= "eu sou um "
//console.log(a, b, c)

// Imprima novamente depois das 3 linhas a seguir

a = a + 1
b += 5
c = c + "texto"
//console.log(a, b, c)

//Soma
console.log( a + 25 )

//Subtração
console.log( b - 25 )

//Multiplicação
const pi = 3.14
console.log( pi * 100 )

//Divisão
const denominador = 3
console.log( 9 / denominador , "  ------  ",  1 / denominador )

//Resto
console.log( 10 % denominador)

</textarea>
<div id="output-3"></div>
<button id="runButton-3">Rodar</button>
<button id="resetButton-3">Voltar ao original</button>
`