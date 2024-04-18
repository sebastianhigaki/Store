const numero1 = Number(prompt("ingresa un numero"));
const numero2 = Number(prompt("ingresa el numero a ejecutar"));
const suma = numero1 + numero2;
console.log(suma);
const mensajeSuma = "El resultado de la suma es " + suma;
const promedio = suma / 2;
console.log(promedio);
const triple = promedio * 3;
console.log(triple);
const resultadoMenosDiez = triple - 10;
console.log(resultadoMenosDiez);
// Suponiendo que tienes la variable mensajeFinal con el mensaje que deseas mostrar en la alerta
var mensajeFinal = resultadoMenosDiez;

// Mostrar una alerta con el mensaje contenido en la variable mensajeFinal
alert(mensajeFinal);

