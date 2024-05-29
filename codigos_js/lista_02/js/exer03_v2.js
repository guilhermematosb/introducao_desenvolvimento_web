/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

function solicitarNumero(mensagem) {
  let valorPrompt = prompt(mensagem)

  while (isNaN(valorPrompt) || valorPrompt.trim() === "") {
    alert("Entre com um valor válido")
    valorPrompt = prompt(mensagem)
  }

  return Number(valorPrompt)
}

function solicitarOperador(mensagem) {
  let operacao = prompt(mensagem)

  while (!["+", "-", "/", "*"].includes(operacao)) {
    alert("Entre com um valor válido")
    operacao = prompt(mensagem)
  }

  return operacao
}

function calcularResultado(numero01, numero02, operacao) {
  let resultado
  switch (operacao) {
    case "+":
      resultado = numero01 + numero02
      break
    case "-":
      resultado = numero01 - numero02
      break
    case "*":
      resultado = numero01 * numero02
      break
    case "/":
      resultado = numero01 / numero02
      break
    default:
      return "Operação inválida."
  }
  return resultado
}

function executarCalculador() {
  let numero01 = solicitarNumero("Digite o valor 01")
  let numero02 = solicitarNumero("Digite o valor 02")
  let operacao = solicitarOperador("Entre com um operador")

  let resultado = calcularResultado(numero01, numero02, operacao)

  alert(resultado)
}

executarCalculador()
