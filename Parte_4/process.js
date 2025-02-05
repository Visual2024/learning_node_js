const process = require("node:process");

console.log("proceso arquitectura: " + process.arch);

console.log("proceso pid: " + process.pid);
console.log("proceso node: v" + process.versions.node);


// Argumento de entrada
console.log("proceso" + process.argv);

// Comtra