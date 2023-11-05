export default `
<h2>8: Objects</h2>
<textarea id="codeEditor-8" data-size="2400">
//Objetos são, talvez, a principal estrutura em javascript
//Eles são semelhantes às structs, porém podem guardar funções
const pessoa = {
    nome: "Gunter Amorim",
    "profissão": "Professor",
    idade: 35,
    adivinhaSalario: function() {
        if(this.profissao === "Professor"){
            console.log(this.nome + " é um quebrado")
        } else {
            console.log(this.nome + " ainda tem chance de ganhar uma grana")
        }
    },
    amigos: ['marcos', 'vanessa', 'ricardo', 'gustavo', 'karol', 'pedro'],
    qtdAmigos: function(){
        return this.amigos.length
    }
}

//Imprima o objeto inteiro no console
console.log(pessoa)

//Para acessar as propriedades do object, assim como na struct, use o "ponto"
//console.log(pessoa.nome)

//Para imprimir uma propriedade que não segue o padrão camelCase, use []
//console.log(pessoa["profissão"])

//Com os colchetes, você também pode criar propriedades que não existem
//pessoa["endereço"] = "Taguatinga"
//console.log(pessoa)

//Com os colchetes, você pode acessar uma propriedade "dinâmicamente"
const propriedade = "idade"
//console.log(pessoa[propriedade])

//Você também pode criar uma nova propriedade sem usar os colchetes, da seguinte forma:
pessoa.altura = 1.82
//console.log(pessoa)

//para apagar uma propriedade do objeto utilize "delete"
//delete pessoa.altura
//console.log(pessoa)

//Você também pode invocar as funções incorporadas no objeto
//console.log(pessoa.qtdAmigos())

//Os objects são estruturas úteis para buscas ou criação de dicionários
//const inicial = prompt("Informe as iniciais de um estado do Brasil")
const estados = {
    AC: "Acre",
    AL: "Alagoas",
    AM: "Amazonas",
    AP: "Amapá",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goiás",
    MA: "Maranhão",
    MG: "Minas Gerais",
    MS: "Mato Grosso do Sul",
    MT: "Mato Grosso",
    PA: "Pará",
    PB: "Paraíba",
    PE: "Pernambuco",
    PI: "Piauí",
    PR: "Paraná",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RO: "Rondônia",
    RR: "Roraima",
    RS: "Rio Grande do Sul",
    SC: "Santa Catarina",
    SE: "Sergipe",
    SP: "São Paulo",
    TO: "Tocantins"
  };

//console.log(estados[inicial])

</textarea>
<div id="output-8"></div>
<button id="runButton-8">Rodar</button>
<button id="resetButton-8">Voltar ao original</button>
`