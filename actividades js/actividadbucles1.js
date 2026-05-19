let edades = [10, 15, 18, 25, 8];
console.log(edades)

// 1) Recorrer la fila (for): Crea un bucle for
//  que recorra todo el arreglo de edades.
for (let index = 0; index < edades.length; index++) {
    console.log('el elemento numero ' + index + ' es: ' + edades[index])    
}

// 2) Cobrar la entrada (switch): Adentro del bucle, utiliza la estructura 
// switch(true) para evaluar la edad de la persona actual y mostrar 
// un mensaje en consola: 
//  Si es menor de 13: Imprimir "Entrada Infantil: $500"
//  Si está entre 13 y 17: Imprimir "Entrada Adolescente: $800"
//  Si es mayor o igual a 18: Imprimir "Entrada Adulto: $1000"
for (let index = 0; index < edades.length; index++) {
    console.log('el edad numero ' + index + ' es: ' + edades[index]) 
    switch (true) {
        case (edades[index] < 13):
            console.log("Entrada Infantil: $500")    
            break;
        case (edades[index] >= 13 && edades[index] < 18):
            console.log("Entrada Adolescente: $800")    
            break;
        case (edades[index] >= 17):
            console.log("Entrada Adulto: $1000")    
            break;
        default:
            break;
    }

    
    // 3) El Premio Sorpresa (if o Ternario): Aún adentro del bucle (debajo del switch),
    //  verifica si la edad de la persona es un número par (usando edad % 2 === 0). Si es par,
    //  imprime: "¡Ganaste un balde de pochoclos gratis! 🍿"


    if (edades[index]%2 === 0) {
        console.log("¡Ganaste un balde de pochoclos gratis! 🍿")
    } 
}


