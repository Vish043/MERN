import {convert} from './conversion.js';
let args = process.argv.slice(2); 
let a = Number(args[0]); 

console.log(convert(a));