// const simple = require ("./common_js_modules_2.mjs")// simple function ko maine import kiya , ./ se woh file jisse mai import krr raha hoon
// simple()// abb import ho gaya , toh run krr dunga 

import {simple} from "./common_js_modules_2.mjs";
simple(); // add type: module in package.json   

import * as math from "./common_js_modules_2.mjs";// import all from the modules from the file 
console.log(math.add(23,32));

math.simple()