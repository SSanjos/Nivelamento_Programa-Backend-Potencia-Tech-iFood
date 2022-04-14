var notas = [0, 2, 4, 4, 5, 4, 3, 1, 3, 4, 5, 5, 3, 1, 0, 5, 5, 4, 3, 5]

function calculaGostos(notas){
var nNaoGostaram = 0
var nMediano = 0
var nGostaram = 0

for(var i = 0; i < notas.length; i++){
    if(notas[i] >=0 && notas[i] <= 1){
        nNaoGostaram++ 
    } else if (notas[i] >=2 && notas[i] <= 3){
        nMediano++
    } else {
        nGostaram++
    }
}
return [nNaoGostaram, nMediano, nGostaram]
}

console.log(calculaGostos(notas))