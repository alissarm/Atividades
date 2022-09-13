function Calcular(){
    var s = document.getElementById("s")
    var t = document.getElementById("t")
    var snum = Number(s.value)
    var tnum = Number(t.value)

    var resultado = snum / tnum
    var resultadoFinal = resultado.toFixed(2)

    document.getElementById("vm").value = resultadoFinal

    document.getElementById("resultados").innerHTML += resultadoFinal + "<br>"

}

function Limpar() {
    s = (" ")
    t = (" ")
    vm = (" ")
    var limps = document.getElementById("s").value = limps
    var limpt = document.getElementById("t").value = limpt
    var limpvm = document.getElementById("vm").value = limpvm
}