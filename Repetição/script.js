let n = 100

for (i = 0; i < n; i++){
    console.log("i: ",i+1)
}



numero = 100 
for (i = 0; i <= numero; i ++){ 
if((i + 1) % 2 == 0){ 
    console.log("Números pares: ", i+1) 
} 
}


qtdeFuncionarios = 5
totalMedia = 0
for (i = 0; i < qtdeFuncionarios; i ++){
    let salario1 = Math.random() * 2500
    let salario2 = Math.random() * 2500
    let salario3 = Math.random() * 2500
    let salario4 = Math.random() * 2500
    let salario5 = Math.random() * 2500
    let media = (salario1 + salario2 + salario3 + salario4 + salario5) /5
    totalMedia += media
    console.log("salarios [",
                    salario1.toFixed(2),
                    salario2.toFixed(2),
                    salario3.toFixed(2),
                    salario4.toFixed(2),
                    salario5.toFixed(2),
                    "], média:[",
                    media.toFixed(2),"]"
                    )
}
totalMedia = totalMedia /qtdeFuncionarios
console.log("Média dos salarios:", totalMedia.toFixed(2));



numero = 15000.00
n = 5
for (i = 0; i < n; i++){
    console.log(numero)
    numero /= 2
}
