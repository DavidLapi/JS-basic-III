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
console.log("\nObjetos literales: ");

//Ejercicio 1: Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
console.log("\nEjercicio 1: ");
let info = {
    nombre: "David",
    edad: 26,
    color: "marron"
}

const nombreObj = (obj) => obj.nombre;

console.log("Nombre: " + nombreObj(info));

//Ejercicio 2: Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
console.log("\nEjercicio 2: ");
let edad = 12;

const edadAct = function(obj, num) {
    //Comprobacion de numero
    if (isNaN(num) && typeof num !== 'number') {
        return "Error: Elige un número adecuado";
    }
    obj.edad = num;
    return obj;
}  
console.log("Objeto actual: ", info);
console.log("Objeto actualizado: ", edadAct(info, edad));

//Ejercicio 3: Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
console.log("\nEjercicio 3: ");

let texto = "telefono";
const agregarProp = function(obj, texto) {
    obj[texto] = null;
    return obj;
}
console.log("Objeto actual: ", info);
console.log("Objeto actualizado: ", agregarProp(info, texto));

//Ejercicio 4: Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
console.log("\nEjercicio 4: ");
texto = "nombre";
const eliminarProp = function(obj, texto) {
    delete obj[texto];
    return obj;
}
console.log("Objeto actual: ", info);
console.log("Objeto actualizado: ", eliminarProp(info, texto));


//Ejercicio 5: Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
console.log("\nEjercicio 5: ");
const cantidadProp = function(obj) {
    let cantidad = Object.keys(obj).length;
    return cantidad;
}
console.log("Objeto actual: ", info);
console.log("Número de propiedades del objeto: ", cantidadProp(info));

//Ejercicio 6: Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
console.log("\nEjercicio 6: ");
texto = "color";
//con hasOwnProperty():
const compruebaProp = function(obj, texto) {
    if(obj.hasOwnProperty(texto)) {
        return true;
    } else {
        return false;
    }
}
//con el operador in:
const compruebaProp2 = function(obj, texto) {
    if(texto in obj) {
        return true;
    } else {
        return false;
    }
}

console.log("Objeto actual:", info);
console.log("Buscamos la propiedad:", texto);
console.log("Resultado 1: ", compruebaProp(info, texto));
console.log("Resultado 2: ", compruebaProp2(info, texto));

//Ejercicio 7: Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
console.log("\nEjercicio 7: ");

const arrayObj = function(obj) {
    let valores = Object.values(obj);
    return valores;
}

console.log("Objeto actual:", info);
console.log("Array con los valores del objeto:", arrayObj(info));

//Ejercicio 8: Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
console.log("\nEjercicio 8: ");

let info2 = {
    edad: 12,
    ojos: 'marron',
    telefono: null
}

const compararObjs = function(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return ("No tienen la misma longitud: ", false);
    }

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return "No tienen las mismas propiedades ni los mismos valores: ", false;
        }
    }

    return true;
} 

console.log("Objeto 1: ", info);
console.log("Objeto 2: ", info2);
console.log("¿Son iguales? --> ", compararObjs(info, info2));

//Ejercicio 9: Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
console.log("\nEjercicio 9: ");

const copiaExacta1 = function(obj) {
    let copia = Object.assign({}, obj); //Copia superficial
    copia.edad = 34; //Modificamos la copia
    return copia;
}

const copiaExacta2 = function(obj) {
    let copia = { ...obj}; //Spread
    copia.color = "verde"; //Modificamos la copia
    return copia;
}

console.log("Objeto actual: ", info);
console.log("Resultado 1: ", copiaExacta1(info));
console.log("Resultado 2: ", copiaExacta2(info));

//Ejercicio 10: Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
console.log("\nEjercicio 10: ");

let comida = {
    nombre: "Cachopo",
    color: "marron",
    cantidad: 5,
}

const newObject = function(obj1, obj2) {
    return { ...obj1, ...obj2};
}

const newObjectAlt = function(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log("Objeto 1: ", info);
console.log("Objeto 2: ", comida);
console.log("Nuevo objeto: ", newObject(info, comida));
console.log("Nuevo objeto alternativo: ", newObjectAlt(info, comida));
