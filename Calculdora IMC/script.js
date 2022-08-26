const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Você esta abaixo do peso.'
    } else if (imc < 25) {
      classification = 'Você esta com o peso normal.'
    } else if (imc < 30) {
      classification = 'Você esta acima do peso.'
    } else if (imc < 35) {
      classification = 'Você esta com obesidade de Grau I.'
    } else if (imc < 41) {
      classification = 'Você esta com obesidade de Grau II.'
    } else {
      classification = 'Você esta com obesidade de Grau III.'
    }
    
    resultado.innerHTML = `Seu IMC é de: ${imc}. ${classification}`
  } else {
    resultado.innerHTML = 'Algo esta errado. Por favor, preencha todos os campos corretamente.'
  }
}