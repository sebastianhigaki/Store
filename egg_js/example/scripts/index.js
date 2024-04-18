const selector = document.getElementById("mensaje");
selector.innerHTML = "Realizaste tu transaccion :) Gracias.";

const myname = prompt("Podrias indicarme tu nombre porfavor?");
console.log("Tu nombre es:" + myname);
alert("Bienvenido a mi pagina " + myname + "!");

const product = prompt("¿Qué producto desea comprar?");
console.log("Seleccionaste:" + product);
alert("Tenemos " + product + "! en descuento.");

const confirm = prompt("¿Comprar?");
console.log("Decidiste comprar:" + confirm);
alert("En buena hora " + myname);

const payment = prompt("¿Metodo de pago?");
console.log("Seleccionaste:" + payment);
alert("Tenemos las tarjetas " + payment + "! en cuotas sin intereses.");
