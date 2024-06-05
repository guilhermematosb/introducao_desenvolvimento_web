let paragrafo = document.getElementById("paragrafo")
// paragrafo.innerHTML = "TExto alterado"

let novoParagrafo = document.createElement("div")
novoParagrafo.innerHTML = '<strong>Novo paragrafo adicionado</strong>'

paragrafo.appendChild(novoParagrafo)

let novoLi = document.createElement("li")
novoLi.innerHTML = "Novo li"

let ul = document.querySelector("ul")
let primeiroLi = ul.firstChild
ul.insertBefore(novoLi, primeiroLi)

let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert("Teste")
})

botao.addEventListener("mouseover", function(){
    alert("Mouseover botao")
})