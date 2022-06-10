nomes = ['Maria', 'Eduarda', 'Juliano', 'Bia', 'Vivi']

console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])

console.log(nomes[nomes.length - 1])
console.log(nomes[nomes.length - 2])





salarios = ['1500', '2999', '15000', '4000', '1200', '5000', '1250', '3500']

console.log(salarios)





array1 = [(Math.random()*10 > 5)]
array2 = [(Math.random()*20 > 70)]
array3 = [(Math.random()*50 > 10)]

console.log(array1,array2,array3)





salarios = ['1500', '2999', '15000']

console.log(salarios)





produtos = [120, 360]

lista = [produtos[0], produtos[0] * 0.05, produtos[1], produtos[1] * 0.05]
console.log("O produto de valor" ,"R$",produtos[0],"ao ser descontado 5% diminuirá", "R$",produtos[0] * 0.05 ,"do preço total do produto.")
console.log("O produto de valor" ,"R$",produtos[1],"ao ser descontado 5% diminuirá", "R$",produtos[1] * 0.05 ,"do preço total do produto.")





matriz_determinante = []

for (let i = 0; i < 2; i++) {
    matriz_determinante.push([(Math.random() * 10).toFixed(2), (Math.random() * 10).toFixed(2)])
}

console.log("Matriz : ");

for (let i = 0; i < 2; i++) {
    console.log("|", matriz_determinante[i][0], matriz_determinante[i][1], "|");
}

let determinante = matriz_determinante[0][0] * matriz_determinante[1][1] -  matriz_determinante[0][1] * matriz_determinante[1][0]
console.log("\nDeterminante : ", determinante.toFixed(2));
