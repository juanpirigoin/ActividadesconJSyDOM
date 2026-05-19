// 1. El Poder del for...of (Iteración de Listas)



// 1)
console.log('ejercicio 1)')
let nombres = ["Ana","Luis","Javier","Carlos","Sofía","Jorge","Valentina","Pedro","Camila","Martín","Laura","Diego","Pablo","Marta"];

console.log('los elementos del array nombres son: ')    
for (const element of nombres) {
    console.log(element)    
}


// 2)
console.log('ejercicio 2)')
let numeros = [5, 12, 27, 33, 46, 58, 64, 79, 88, 100];
let suma = 0
for (const element of numeros) {
  suma = suma + element
}
console.log('la suma de todos los numeros da: ' + suma)

// 3)
console.log('ejercicio 3)')
let suma2 = 0
let palabras = ["qaz","tupo","len","mivor","sok","zupila","fero","dax","wenu","lopar","kiv","rusto","bem","nadir","xol","pavenu","tir","gome","zafor","hux"];
for (const element of palabras) {
  if (element.length>4) {
    suma2 = suma2 + 1
  }
}
console.log('la cantidad e palabras con mas de 4 caracteres es: ' + suma2)

// 4) 
console.log('ejercicio 4)')
for (const element of numeros) {
  console.log('el triple del numero ' + element +  ' es: ' + 3*element)
}


// 5)
console.log('ejercicio 5)')
for (const element of nombres) {
  let encontrado = false
  if (element==='Javier') {
    encontrado=true
  }    
  if (encontrado) {
    console.log('Javier se encuentra dentro de la lista') 
  }
}

// 6)
console.log('ejercicio 6)')
let numerosnegativos = []
for (const element of numeros) {
  numerosnegativos.push(-1*element)
}
console.log(numerosnegativos)

// 7)
console.log('ejercicio 7)')



// 2. El Detective for...in (Inspección de Objetos)

// 1) 

console.log('ejercicio 1)')
let persona = {
  nombre : 'Pedro',
  edad : 23,
  altura : 1.85
}

console.log(persona)

for (const key in persona) {
  console.log(key)  
}


// 2)
let mascota = {
  nombre: "Firulais",
  especie: "Perro",
  edad: 4,
  color: "Marrón",
  vacunado: true,
  dueño: "Carlos"
};
console.log('ejercicio 2)')
for (const caracteristica in mascota) {
  console.log(mascota[caracteristica]) 
}

// 3)
console.log('ejercicio 3)')
let configuracion = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true,
  volumen: 75,
  resolucion: "1920x1080",
}
let cantidaddepropiedades = 0
for (const key in configuracion) {  
  cantidaddepropiedades += 1
}
console.log(cantidaddepropiedades)

// 4) no entendi la consigna

// 5)

let auto = {
  marca : "Audi",
  modelo : 2018
}
for (const key in auto) {
  console.log(`la caracteristica ${key} es ${auto[key]} en el objeto auto`) 
}

// 6)

let producto = {
  nombre: "Notebook",
  precio: 1500,
  descuento: 0.15, // 15% de descuento
  stock: 20
}

for (const key in producto) {
  if (key === 'descuento') {
    console.log(`el descuento es de ${producto[key]}`)
  }   
}

// 7) 
let arraykeys = []
for (const key in producto) {
  arraykeys.push(key)
}

console.log(arraykeys)

// 8)
let nuevoproducto = {}
for (const key in producto) {
  nuevoproducto[key] = producto[key]  
}
console.log(nuevoproducto)

// BLOQUE B: Métodos de Array (Especialización)

// 3. El Ejecutor forEach

// 1)

let listaCompras = [
  "pan",
  "leche",
  "huevos",
  "arroz",
  "manzanas",
  "carne"
];

listaCompras.forEach(element => { console.log(element)})

// 2)
suma = 0
numeros.forEach(element => { suma += element})
console.log(suma)

// 3)
listaCompras.forEach((item,indice) => { console.log(`Procesando el item número ${indice}`)})

// 4)

listaCompras.forEach((item,indice) => {listaCompras[indice] += "⭐"});
console.log(listaCompras)

// 5)
let numerox10 =[]
numeros.forEach(element => {numerox10.push(element*10)});
console.log(numerox10)

// 6)

let contadorM = 0
listaCompras.forEach( item => {
  if (item.startsWith("m")) {
    contadorM ++
  }
});
console.log(`hay ${contadorM}  items que empiezan con la letra "m"`)

// 4. El Transformador map

// 1)

const duplicados = numeros.map(num => num * 2)
console.log(duplicados)

// 2)

let arrayminusculas = nombres.map(nombre => nombre.toLowerCase())
console.log(arrayminusculas)

// 3)

let años = [1984, 1983, 1992, 1978, 2000, 2012, 1993]
let edades = años.map( año => 2026-año)
console.log(edades)

// 4)

const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Teléfono", precio: 800 },
  { nombre: "Auriculares", precio: 150 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Teclado", precio: 100 }
];

let precios = productos.map( producto => producto.precio)
console.log(precios)

// 5)

let longitudes = palabras.map( palabra => palabra.length)
console.log(longitudes)

// 6)

let saludos = nombres.map( nombre => "Hola, " + nombre)
console.log(saludos)


// 5. El Guardián filter

// 1)

let impares = numeros.filter( numero => numero%2 !== 0 )
console.log(impares)

// 2)

let nombresde5 = nombres.filter (nombre => nombre.length === 5)
console.log(nombresde5)


// 3)

let productosbaratos = productos.filter(producto => producto.precio < 500)
console.log(productosbaratos)

// 4)



// 6. El Rastreador find

// 1)

let primero = numerox10.find( numero => numero >100)
console.log(primero)

// 2)

const usuarios = [
  { nombre: "Ana Pérez", mail: "ana.perez@example.com", telefono: "1123456789" },
  { nombre: "Luis Gómez", mail: "luis.gomez@example.com", telefono: "1145678910" },
  { nombre: "María López", mail: "maria.lopez@example.com", telefono: "1134567890" },
  { nombre: "Carlos Díaz", mail: "carlos.diaz@example.com", telefono: "1156789012" }
];

let usuario = usuarios.find( usuario => usuario.mail === "maria.lopez@example.com")
console.log(usuario)

// 3)

let primerapalabra = palabras.find( palabra => palabra.startsWith("z"))
console.log(primerapalabra)

// 4)

const estudiantes = [
  { legajo: 101, nombre: "Ana", notas: [8, 9, 10], estado: "Activo" },
  { legajo: 102, nombre: "Luis", notas: [4, 5, 4], estado: "Activo" },
  { legajo: 103, nombre: "Marta", notas: [10, 10, 9], estado: "Activo" },
  { legajo: 104, nombre: "Juan", notas: [2, 3, 5], estado: "Activo" },
];

function buscarPorLegajo(legajoBuscado, estudiantes) {
  let alumnoEncontrado = estudiantes.find(
    (estudiante) => estudiante.legajo === legajoBuscado,
  );

  if (alumnoEncontrado) {
    return alumnoEncontrado;
  } else {
    return "Alumno no encontrado";
  }
}


function darDeBaja(legajo, estudiantes) {
  let estudiante = buscarPorLegajo(legajo, estudiantes);
  if (estudiante) {
    if (estudiante.estado === "Activo") {
      estudiante.estado = "Inactivo";
      return `El estudiante ${estudiante.nombre} fue dado de baja`;
    } else {
      return "El estudiante ya se encuentra dado de baja";
    }
  }
}

console.log(darDeBaja(104, estudiantes));
console.log(estudiantes);