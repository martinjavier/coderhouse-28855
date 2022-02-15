console.clear()
console.log('Hola coderhouse')
console.error('Mensaje de Error')
console.warn('Advertencia')
console.log({ nombre : "Coderhouse"});
console.log(true);
console.log(null);
console.log(undefined);
console.table(['luces','azulejos','vidrios','sanitarios']);
console.table({ nombre : "Coderhouse"});

// Tipos de datos
var variable1 = "Coder1";
function function1() {
    variable2 = "Coder2";
}
function1();

console.log(variable1, variable2);

let let1 = "Let1";
const const1 = "Const1";
console.log(let1, const1);

const const2 = [];
const const3 = {};

const2.push(1);
const3.nombre = "Coderhouse";

console.log(const2, const3);

function foo() {
    let i = 1;
    if (true) {
        let i = 2;
        console.log("Function Foo", i);
    }
    console.log(i);
}
foo();
