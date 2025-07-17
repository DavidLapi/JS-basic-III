//Bienvenido/a a Javascript básico parte III, donde veremos funciones.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log("Hola, soy tu consola y juntos/as vamos a aprender JavaScript");

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Números
console.log("\nNúmeros");
//Ejercicio 1: Escribe una función que tome dos números como argumentos y devuelva su suma.
console.log("\nEjercicio 1: ");
let num1 = 34;
let num2 = 52;
const suma = (n1, n2) => n1 + n2;
console.log("Suma: " + num1 + " + " + num2 + " = " + suma(num1, num2));

//Ejercicio 2: Escribe una función que tome dos números como argumentos y devuelva su resta.
console.log("\nEjercicio 2: ");
num1 = 90;
num2 = 43;
const resta = (n1, n2) => n1 - n2;
console.log("Resta: " + num1 + " - " + num2 + " = " + resta(num1, num2)); 

//Ejercicio 3: Escribe una función que tome dos números como argumentos y devuelva su producto.
console.log("\nEjercicio 3: ");
num1 = 11;
num2 = 130;
const producto = (n1, n2) => n1 * n2;
console.log("Producto: " + num1 + " * " + num2 + " = " + producto(num1, num2));

//Ejercicio 4: Escribe una función que tome dos números como argumentos y devuelva su división.
console.log("\nEjercicio 4: ");
num1 = 40;
num2 = 8;
const division = (n1, n2) => n1 / n2;
console.log("División: " + num1 + " / " + num2 + " = " + division(num1, num2));

//Ejercicio 5: Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
console.log("\nEjercicio 5: ");
num1 = 2;
num2 = 6;
const exponenciacion = (base, exp) => base ** exp;
console.log("Exponenciación: " + num1 + " ** " + num2 + " = " + exponenciacion(num1, num2));

//Ejercicio 6: Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
console.log("\nEjercicio 6: ");
num1 = 35;
num2 = 20;
const restoDiv = (n1, n2) => n1 % n2;
console.log("Resto de la división: " + num1 + " % " + num2 + " = " + restoDiv(num1, num2));

//Ejercicio 7: Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
console.log("\nEjercicio 7: ");
num1 = 121;
const raizCuadrada = (n) => Math.sqrt(n);
console.log("Raíz cuadrada de "+num1+" = " + raizCuadrada(num1));

//Ejercicio 8: Escribe una función que tome un número como argumento y devuelva su valor absoluto.
console.log("\nEjercicio 8: ");
num1 = -40;
const valorAbs = (n) => Math.abs(n);
console.log("Valor absoluto de " + num1 + " = " + valorAbs(num1));

//Ejercicio 9: Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
console.log("\nEjercicio 9: ");
num1 = 5.92;
const enteroRedondo = (n) => Math.round(n);
console.log("Número redondeado de " + num1 + " = " + enteroRedondo(num1));

//Ejercicio 10: Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
console.log("\nEjercicio 10: ");
const numAleatorio = () => Math.floor(Math.random() * 2); // Este código multiplicado por 2 hace que salga entre 0 y 1 el resultado
console.log(numAleatorio());

//Letras
console.log("\nLetras");

//Ejercicio 1: Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
console.log("\nEjercicio 1:");
let texto1 = "Hey";
let texto2 = "Manolo";
const concat = (t1, t2) => t1 + " " + t2;
console.log(concat(texto1, texto2));

//Ejercicio 2: Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
console.log("\nEjercicio 2: ");
texto1 = "Soy marcelo picudo";
const longitud = (t1) => t1.length;
console.log("Longitud de \"" + texto1 + "\": " + longitud(texto1));

//Ejercicio 3: Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
console.log("\nEjercicio 3: ");
texto2 = "hola que tal";
const mayus = (t1) => t1.toUpperCase();
console.log(mayus(texto2));

//Ejercicio 4: Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
console.log("\nEjercicio 4: ");
texto1 = "QUE TAL ESTAMOS";
const minus = (t1) => t1.toLowerCase();
console.log(minus(texto1));

//Ejercicio 5: Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
console.log("\nEjercicio 5:");
texto1 = "Dame-un-kilo-de-cachopo";
let indice = 16;
const obtenerCaracter = (t, i) =>  i >= 0 && i < t.length ? t.charAt(i) : "Asigna un valor correspondiente";
console.log(obtenerCaracter(texto1, indice)); 

//Ejercicio 6: Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
console.log("\nEjercicio 6:");
texto1 = "como estan los cachopos";
const reverso = (t) => t.split('').reverse().join('');
console.log(texto1 + " : " + reverso(texto1));

//Ejercicio 7: Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
console.log("\nEjercicio 7:");
texto1 = "me encantas los cachopos con morcilla";
let caracter = "m";
const cantidadCaracteres = (t, c) => t.split(c).length - 1;
console.log("\"" + texto1 + "\" Cantidad de veces que sale la letra " + caracter + " : " + cantidadCaracteres(texto1, caracter)); 

//Ejercicio 8: Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
console.log("\nEjercicio 8:");
texto1 = "el cachopo es genial";
const sinEspacio = (t) => t.split(' ').join('');
const sinEspacio2 = (t) => t.replace(/ /g, '');
console.log(texto1 + " | con split y join --> " + sinEspacio(texto1) + " | con replace --> " + sinEspacio2(texto1));

//Ejercicio 9: Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
console.log("\nEjercicio 9:");
texto1 = "alibila";
const esPalindromo = (t) => t === t.split('').reverse().join('');
console.log(texto1 + " es palíndromo? --> " + esPalindromo(texto1));

//Ejercicio 10: Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
console.log("\nEjercicio 10:");
texto1 = "cachopo con patatas y pimientos de padron";
const primeraMayus = function(t) {
    const result = t.split(' ').map(palabra =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    ).join(' ');
    return result;
}
console.log(texto1 + " | Mejorado --> " + primeraMayus(texto1));

//Arrays
console.log("\nArrays: ");

//Ejercicio 1: Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
console.log("\nEjercicio 1: ");
let arrayNum = [4, 2, 3, 4, 5];
const sumArray = function(array) {
    let suma = 0;
    for (i=0; i<array.length; i++) {
        suma += array[i];
    }
    return suma;
}
console.log("Suma del array "+ arrayNum + " --> " + sumArray(arrayNum));

//Ejercicio 2: Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
console.log("\nEjercicio 2: ");
arrayNum = [5, 2, 3, 9, 10];
const promArray = function(array) {
    let suma = 0;
    for (i=0; i<array.length; i++) {
        suma += array[i];
    }
    let prom = suma / array.length;
    return prom;
}
console.log("Promedio del array "+ arrayNum + " --> " + promArray(arrayNum));

//Ejercicio 3: Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
console.log("\nEjercicio 3: ");
arrayNum = [1, 2, 6, 10, 13, 24]; 
// MAL - sin función de comparación (ordena según la posición del valor Unicode)
const ascendenteSinComp = function(array) {
    return array.sort(); // [1, 10, 13, 2, 24, 6] ❌
}
// BIEN - con función de comparación
const ascendenteConComp = function(array) {
    return array.sort((a, b) => a - b); // [1, 2, 6, 10, 13, 24] ✅
}
console.log("Array normal: "+arrayNum);
console.log("Orden ascendente según Unicode: "+ascendenteSinComp(arrayNum));
console.log("Orden ascendente con función de comparación: "+ascendenteConComp(arrayNum));

//Ejercicio 4: Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
console.log("\nEjercicio 4:");
arrayNum= [10, 20, 30, 40, 50];
let num = 19;
const mayorQue = function(array, n) {
    let nuevoArray = [];
    for(i=0; i<array.length; i++) {
        if(n < array[i]) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}
console.log("Array: "+ arrayNum + " | Numero dado: " + num + " | Resultado: " + mayorQue(arrayNum, num));

//Ejercicio 5: Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
console.log("\nEjercicio 5:")
let array1 = ["Hola", "Don", "Pepito"];
let array2 = ["Adios", "Don", "Jose"];
const combinarArrays = function(arr1, arr2) {
    return [...arr1, ...arr2]; //Metodo Spread
}
const combinarArraysConcat = function(arr1, arr2) {
    return arr1.concat(arr2); //Metodo concat
}
console.log("Array 1: "+array1+" | Array 2: "+array2);
console.log("Resultado 1:");
console.log(combinarArrays(array1, array2));
console.log("Resultado 2:");
console.log(combinarArraysConcat(array1, array2));

//Ejercicio 6: Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
console.log("\nEjercicio 6:");
arrayNum = [1, 5, 2, 9, 100, 3, 90];
const maxNum = function(array) {
    let numMax = array[0];
    for(i=0; i<array.length; i++) {
        if(array[i] > numMax) {
            numMax = array[i];
        }
    }
    return numMax;
}
console.log("Array: "+arrayNum);
console.log("Número máximo: ");
console.log(maxNum(arrayNum));

//Ejercicio 7: Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
console.log("\nEjercicio 7:");
arrayNum = [-10, 5, 2, 9, 3, 90];
const minNum = function(array) {
    let numMin = array[0];
    for(i=0; i<array.length; i++) {
        if(array[i] < numMin) {
            numMin = array[i];
        }
    }
    return numMin;
}
console.log("Array: "+arrayNum);
console.log("Número mínimo: ");
console.log(minNum(arrayNum));

//Ejercicio 8: Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
console.log("\nEjercicio 8: ");
let frutas = ["manzana", "pera", "platano", "manzana", "platano", "manzana"];
let fruta = "platano";
const apariciones = function(array, e) {
    let num = 0;
    for(i=0; i<array.length; i++) {
        if(array[i] == e) {
            num++;
        }
    }
    return num;
}
console.log("Lista de frutas: "+frutas+" | Buscar fruta: "+fruta);
console.log("Número de veces de "+fruta+" encontrada:");
console.log(apariciones(frutas, fruta));

//Ejercicio 9: Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
console.log("\nEjercicio 9: ");
let comidaArr = ["cachopo", "arroz", "patatas", "cachopo", "patatas", "cachopo", "costilla", "pimientos", "cachopo"];
const eliminaDuplicados = function(array) {
    //return [...new Set(array)]; // Metodo Set --> más eficiente
    return array.filter((elemento, indice) => array.indexOf(elemento) === indice); //Metodo filter
}
console.log("Comida con repeticiones: "+comidaArr);
console.log("Comida sin repetir:");
console.log(eliminaDuplicados(comidaArr));

//Ejercicio 10: Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
console.log("\nEjercicio 10:");
let arrayCosas = ["cachopo", 7, true, [1, 2, 3]];
//Metodo sencillo (reverse)
const inverso = (array) => array.reverse();

console.log("Array: "+arrayCosas);
console.log("Array en orden inverso:");
console.log(inverso(arrayCosas));


//Objetos literales

//Ejercicio 1: Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

//Ejercicio 2: Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

//Ejercicio 3: Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

//Ejercicio 4: Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

//Ejercicio 5: Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

//Ejercicio 6: Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

//Ejercicio 7: Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

//Ejercicio 8: Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

//Ejercicio 9: Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

//Ejercicio 10: Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
