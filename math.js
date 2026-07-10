const add = (a, b)=> a+b;
const sub = (a, b)=> a-b;

const mul = (a, b)=> a*b;
const PI = 3.14;
const g = 9.8;

// const obj = {
//     add: add,
//     sub: sub,
//     mul: mul,
//     PI: PI,
//     g: g
// }
// module.exports = obj

// module.exports = {
//     add: add,
//     sub: sub,
//     mul: mul,
//     PI: PI,
//     g: g
// }

exports.add = (a, b)=> a+b;
exports.sub = (a, b)=> a-b;
exports.mul = (a, b)=> a*b;
module.exports.PI = 3.14; // if we write exports alone js will not consider it as an object and will be treated as a variable. So we need to use module.exports to export the variable.

module.exports.g = 9.8;
