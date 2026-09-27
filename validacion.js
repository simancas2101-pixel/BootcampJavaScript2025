//validar y contar cuales numeros son pares  desde el 1 al 100

let contador=0
for (let i = 1; i <= 100; i++) {

    if ((i % 2) == 0) {

        console.log("el numero es par " + i)
        contador = contador + 1
    } else {

        console.log("el numero es impar " + i)
    }

}
console.log("el numero de pares que se encontro son : " + contador)