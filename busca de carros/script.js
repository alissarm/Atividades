let url ="./carros.json"

let placa = document.getElementById("placa")
let marca = document.getElementById("marca")
let modelo = document.getElementById("modelo")
let ano = document.getElementById("ano")    
    
    function busca() {
   
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for(var car of data.carros){
                if(placa.value == car.placa){
                    marca.value = car.marca
                    modelo.value = car.modelo
                    ano.value = car.ano
                    break
                }
            }
        })
}