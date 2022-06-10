let question1 = document.querySelector("#pergunta1")
let question2 = document.querySelector("#pergunta2")
let question3 = document.querySelector("#pergunta3")
let question4 = document.querySelector("#pergunta4")
let question5 = document.querySelector("#pergunta5")
let question6 = document.querySelector("#pergunta6")
let question7 = document.querySelector("#pergunta7")
let question8 = document.querySelector("#pergunta8")
let question9 = document.querySelector("#pergunta9")
let question10 = document.querySelector("#pergunta10")
var paragrafo = document.querySelector("#pontuação")

function setPontos(){
    let resposta1 = question1.value
    let resposta2 = question2.value
    let resposta3 = question3.value
    let resposta4 = question4.value
    let resposta5 = question5.value
    let resposta6 = question6.value
    let resposta7 = question7.value
    let resposta8 = question8.value
    let resposta9 = question9.value
    let resposta10 = question10.value
    let pontos = 0

    if (resposta1 === "Donald") {
        pontos++
    }
    if (resposta2 === "Branca de neve") {
        pontos++
    }
    if (resposta3 === "Peter Pan") {
        pontos++
    }
    if (resposta4 === "Catatau e Zé Colmeia") {
        pontos++
    }
    if (resposta5 === "Alice") {
        pontos++
    }
    if (resposta6 === "Arthur") {
        pontos++
    }
    if (resposta7 === "Simba") {
        pontos++
    }
    if (resposta8 === "Marie, Toulouse e Berlioz") {
        pontos++
    }
    if (resposta9 === "Bambi") {
        pontos++
    }
    if (resposta10 === "Hobin Hood") {
        pontos++
    }
    if (pontos === 0) {
        frase = "Vamos tentar de novo?"
    }
    else if (pontos === 1) {
        frase = "Quem sabe da próxima vez!"
    }
    else if (pontos === 2) {
        frase = "Bom!"
    }
    else if (pontos === 3) {
        frase = "Nada mal!"
    }
    else if (pontos === 4) {
        frase = "Quase lá!Estamos indo bem!"
    }
    else if (pontos === 5) {
        frase = "Estamos indo bem!"
    }
    else if (pontos === 6) {
        frase = "Muito bem!"
    }
    else if (pontos === 7) {
        frase = "Ótima pontuação!"
    }
    else if (pontos === 8) {
        frase = "Uau! Muito bom"
    }
    else if (pontos === 9) {
        frase = "Você quase gabaritou o quiz, parabéns!"
    }
    else if (pontos === 10) {
        frase = "Parabéns! Você atingiu a pontuação máxima."
    }
    paragrafo.innerText = "Você conseguiu: " + pontos +"/10\n" + frase
}