//verificar si este conectado con el html
console.log("Hola! soy la actividad de hoy");

//traer los elementos que necesitan de su html, los que tienen identificador unico
//id->los elementos que me traiga deben estar en una variable->debeser constante

//document me accede a mi html
//getElementbyID me traen un elemento en particular por su identificador
//dentro de los parentesis DEBO PONER EL MISMO ID que puse e mi html
// mi elemento 2
const edadinput= document.getElementById("edadinput");

// mi elemento 2
//const btn = document.getElementById ("botón"); console.log (btn)
function verificarEdad (){
    //yo quiero que cada que le de clik al botón le de un mensjae de "hola"
    console.log ("Entró en mi función verificar edad");
}
const mensaje = document.getElementById ("mensajeEdad");

let edad = edadinput.value; 
console.log (edad);

//utilizar condicionales
if(edad>= 18){
    console.log ("Eres mayo de edad");  
    mensaje.textContent = "Eres mayor de edad";
}else {
        console.log ("Eres menor de edad");
        mensaje.textContent =" Eres menor de edad";
    }

