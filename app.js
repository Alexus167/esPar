/*Crear una función expresada que al recibir un numero como parametro imprimima por consola “El número es par” 
si lo es, o “El número es impar” si no lo es. En el caso que el numero fuese 0 mostrar un mensaje de error.
 Se debe incluir un if ternario en script.
*/

function esPar(numero){
   let funcion = numero % 2 == 0 ? console.log("El numero " + numero + " es par") : console.log("El numero " + numero + " es impar");  
   numero === 0 ? console.log("ERROR") : funcion;
}
 
 esPar(0);