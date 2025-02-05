// Practicando Console.log()

console.log("Este es un mensaje normal.");
console.info("Este es un mensaje informativo.");
console.warn("¡Cuidado! Este es un mensaje de advertencia.");
console.error("Error: Algo salió mal.");

global.miMensaje = "Este es un mensaje global.";
console.log(global.miMensaje); // Accediendo a la variable global

globalThis.otroMensaje = "Este es otro mensaje global.";
console.log(globalThis.otroMensaje);
