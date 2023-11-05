export default `
<h2>5: Arrays</h2>
<textarea id="codeEditor-5" data-size="1050">
//Array é central em javascript, você pode misturar tipos de dados em um mesmo array
let conjunto = ["Gunter", 35]
console.log(conjunto)

//Você pode inclusive colocar um array dentro de um array
conjunto = ["não acredito!", ["sim"], ["pode", "acreditar", [35]]]
//console.log(conjunto)

//O acesso dos elementos não muda. Os Arrays também possuem a propriedade "length"
conjunto = [100, 200, 300]
//console.log(conjunto[0], conjunto[conjunto.length - 1])

//inclusive, você pode tentar modificar os valores acessando diretamente
conjunto[1] = 400
//console.log(conjunto)

//Os arrays possuem funções para manipular seus elementos
//push()
conjunto.push(35)
//console.log(conjunto)

//pop()
conjunto.pop()
//console.log(conjunto)

//shift()
conjunto.shift()
//console.log(conjunto)

//unshift()
conjunto.unshift(35)
//console.log(conjunto)

</textarea>
<div id="output-5"></div>
<button id="runButton-5">Rodar</button>
<button id="resetButton-5">Voltar ao original</button>
`