const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'uva':

            console.log('Opção selecionada é Uva')
            resultado.innerHTML = "A opção selecionada é: Uva, proveniente do Sul."
            break;

        case 'laranja':

            console.log('Opção selecionada é Laranja')
            resultado.innerHTML = "A opção selecionada é: Laranja, proveniente do Norte."
            break;

        case 'maçã':

            console.log('Opção selecionada é Maçã')
            resultado.innerHTML = "A opção selecionada é: Maçã, proveniente do Leste."
            break;

        case 'pera':

            console.log('Opção selecionada é Pera')
            resultado.innerHTML = "A opção selecionada é: Pera, proveniente do Oeste."
            break;

        case 'pêssego':

            console.log('Opção selecionada é Pêssego')
            resultado.innerHTML = "A opção selecionada é: Pêssego, proveniente do Nordeste."
            break;
        
        case 'banana':

            console.log('Opção selecionada é Banana')
            resultado.innerHTML = "A opção selecionada é: Banana, proveniente do Sudeste."
            break;

        case 'frutas cristalizadas':

        console.log('Opção selecionada é Frutas cristalizadas')
        resultado.innerHTML = "A opção selecionada é: Frutas cristalizadas, proveniente do Centro-oeste."
        break;
                
        default:


    }

}