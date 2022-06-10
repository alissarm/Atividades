const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case '#55729':

            console.log('Opção selecionada é #55729')
            resultado.innerHTML = "A opção selecionada é: Arroz, produto não-perecível."
            break;

        case '#22920':

            console.log('Opção selecionada é #22920')
            resultado.innerHTML = "A opção selecionada é: Acerola, produto perecível."
            break;

        case '#22010':

            console.log('Opção selecionada é #22010')
            resultado.innerHTML = "A opção selecionada é: Maçã, produto perecível."
            break;

        case '#78912':

            console.log('Opção selecionada é #78912')
            resultado.innerHTML = "A opção selecionada é: Feijão, produto não-perecível."
            break;

        case '#82865':

            console.log('Opção selecionada é #82865')
            resultado.innerHTML = "A opção selecionada é: Pasta de dente Colgate, produto de higiene pessoal."
            break;
        
        case '#77321':  

            console.log('Opção selecionada é #77321')
            resultado.innerHTML = "A opção selecionada é: Escova de dente, produto de higiene pessoal."
            break;

    case '#21570':

            console.log('Opção selecionada é #21570')
            resultado.innerHTML = "A opção selecionada é: Camiseta polo, produto de vestuário."
            break;
        
        case '#56320':

            console.log('Opção selecionada é #56320')
            resultado.innerHTML = "A opção selecionada é: Bermuda, produto de vestuário."
            break;
        
    
        case '#45565':
 
            console.log('Opção selecionada é #45565')
            resultado.innerHTML = "A opção selecionada é: Água sanitária, produto de limpeza."
            break;
        
        case '#02001':

            console.log('Opção selecionada é #02001')
            resultado.innerHTML = "A opção selecionada é: Detergente, produto de limpeza."

        break;
                
        default:

    }

}