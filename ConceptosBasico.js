// esta es le forma de comentar en JS
//console.log es la forma de enviar mensajes a la consola del navegador
console.log ("Hola, desarrolladores y psicologo");
console.log( " Mi mensaje");



//conceptos basicos en javascript
//1. tipos de variables
//3. condicionales
//4. ciclos


// LAS VARIABLES JS
//Hay tres tipos de variables en js

//VAR- ya no se usa( no la utilizaremos)
//LET-> Es una variable que puede cambiar en el tiempo
//CONST -> es una variable que no puede cambiar en el tiempo

//TIPOS DE DATOS O IFNROMACION PODEMOS ALMACENAR
//Numericos
let numeros= 7;
//cadena de caracteres -> tecto ->string( en programacion)
// el texto siempre debe ir en comillas
let texto= "hola,mundo";


//booleanos-> es un dato que puede ser verdadero o falso
let esVerdadero =true; //true es verdad
let esFalso = false; // false->falso

//arreglos ->arrays ( en programacion) ->me permite almacenar varios datos del mismo tipo en la misma variable 

let arregloNombres= [" Dayana", "Sammai", "Matias", "Felipe"];
let arreglonumeros= [ 1, 2, 3, 4];
//Objetos un representacion d
//->tiene atributos-------->caracteristicas de ese objeto
//->metodos ->acciones que puede realizar el objeto
//{}[]()
//-> [] son para declarar arreglos
//-> {} para declarar objetos
// -> () nos permite ejeuctar acciones->  invocar acciones

const celular = {
color: "blanco",
modelo: "samsung galaxy",
ancho: 350,
alto: 800, 
}
Enviarmensajes: function Enviarmensajes (){
// entre corchetes al lado del parentesis yo establezco la accion a realizar
console.log("Mensaje enviado")
}
//el metodo->las acciones ->directamente de una operación
function buscarObjeto (){
    console.log("le muestra lo que esta buscando")
}