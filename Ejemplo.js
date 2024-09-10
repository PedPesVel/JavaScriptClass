let num1 = 1

let num2 = 2.0

let cadena = "Hola"

console.log(num1)
console.log(num2)
console.log(cadena)

console.log("hola") 

const txt1 = new String("Hola a todos") 
console.log(txt1)

console.log('1.2.3.4'.split('.'))
console.log(txt1.split(' '))

console.log(txt1.length)

console.log(txt1.charAt(0))

//Arreglos 
var animales = ['trigre', 'ballena', 'lobo', 'aguila']
console.log(animales.length)
console.log(animales.pop()) //Elimina la última iteración del arreglo
console.log(animales)

console.log(animales.push("perro")) //Añade al arreglo
console.log(animales)

let numeros = [11,10,5,4,12]
console.log(numeros.reverse())

var juntar = numeros.join()
console.log(juntar)

let anio = [1995,1999, 2024, 2020]

function encontrar(item){
    return item>=2000
}

console.log(anio.find(encontrar)) //La primera iteración que encuentra
console.log(anio.some(encontrar)) //Si se cumple devuelve true

var vestimenta = ['camisa', 'gorra', 'pantalón']

function mifuncion(item, index){
    console.log(index+":"+item)
}

vestimenta.forEach(mifuncion)  //Recorre objetos

let array = Array.from("1A2B3C4D")
console.log(array) //Nos devuelve un arreglo

//every
 let numeross = [32,33,15,40]
mifuncion1()
 function validarArray(item){
    return item >= 19 
 }
 function mifuncion1(){
    console.log(numeross.every(validarArray))
 }

 //De un determinado arreglo con nombre y edad, buscar aquellas personas
 //que tengan mas de 5 años 
 //5 elementos

 let personas = [
    {nombre: "Alan", edad: 31} ,
    {nombre: "Alisson", edad:12},
    {nombre: "Juan", edad:21},
    {nombre: "Saraha", edad:25},
    {nombre: "Bruno", edad:19}
]

let busqueda = personas.filter(persona=>persona.edad>19)
console.log(busqueda)

// Hacer una búsqueda de 10 trabajadores donde sean developers
let chambeadores  = [
    {nombre: "Daniel", puesto: "developer"} ,
    {nombre: "Alisson", puesto:"portero"},
    {nombre: "Damian", puesto:"developer"},
    {nombre: "Esperanza", puesto:"no che quien es"},
    {nombre: "Alexander", puesto:"developer"},
    {nombre: "Ezequiel", puesto:"No sé quien es"},
    {nombre: "Pedro", puesto:"developer"},
    {nombre: "Alma", puesto:"jefa"},
    {nombre: "Gabriel", puesto:"profesor"},
    {nombre: "Brandon", puesto:"Rompe corazones"}
]

let buscachamba  = chambeadores.filter(chambeadores=>chambeadores.puesto === "developer");
console.log(buscachamba) 

