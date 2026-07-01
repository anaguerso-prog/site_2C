let resposta = document.getElementById("resposta")

function principal(){
    let num = Number(document.getElementById("num").value)
    let num2 = Number(document.getElementById("num").value)

    let resultado = num + num2

    resposta.innerHTML = ''
    resposta.innerHTML += `O resultado da soma é: ${resultado.toFixed(2)}`
    resposta.style.fontSize = '2rem'
}
