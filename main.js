//Victor Sarria

/* 
Declarar dos variables con la palabra reservada "var", 
imprimir el resultado de las operaciones de "Suma", "Resta", 
"Multiplicación" y "División" en la consola 
Las variables pueden ser estáticas.
*/

var test1 = 4;
var test2 = 3;

//Suma
console.log("Suma es igual a: " + (test1 + test2));

//Resta
console.log("Resta es igual a: "  + (test1 - test2));

//Multiplicación
console.log("Multiplicación es igual a: "  + (test1 * test2));

//Multiplicación
console.log("División es igual a: "  + (test1 / test2));

/*
 Declarar dos variables con la
 palabra reservada "let", imprimir la concatenación de ellas.
*/

let prob = "Esto es un valor numérico ";
let numb = 5;

console.log("Concatenación: "+ (prob + numb));

/*
Declarar dos variables con la palabra reservada 
"const", imprimir cuál es el tipo de dato de esa variable.
*/

const albin = "Esto es un String";
const decim = 65;

console.log("El tipo de dato para albin es: " + typeof(albin) +"\n"
            +"El tipo de dato para decim es: " + typeof(decim) 
            );

/*
Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que 
contengan un entero, un string, un booleano y un objeto vacío, 
en ese mismo orden.
*/
var objeto= {
    numeros:{
        num1:54,
        num2:33,
        num3:12
    },

    caracteres:{
        caract1:"Cadena 1",
        caract2:"Cadena 2",
        caract3:"Cadena 3"
    },

    bol:{
        bol1:true,
        bol2:false    
    },
    emptyObject:null
}