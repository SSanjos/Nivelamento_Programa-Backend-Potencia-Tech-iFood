var usuario = ["joão da Silva", 18, 170]

function maiorAlto(array){ 
    if(array[1] >= 18 && array[2] >= 170) {
    return true
    } else {
        return false
    }
} 
console.log(maiorAlto(usuario))
