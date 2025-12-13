const path = require("path") // path is an internal dependencie
console.log(__dirname);// it gives similar what "pwd" in linux do 
console.log(path.join(__dirname,__filename));//d:\CODING\100XDEV\WEB DEV\WEEK 4\WEEK 4.1\d:\CODING\100XDEV\WEB DEV\WEEK 4\WEEK 4.1\main.js

console.log(__dirname + "/../../index.js" + "/projects" + "/index.js");
/*Start at:
/Users/ThatGuy/projects/node-app/src

First .. →
/Users/ThatGuy/projects/node-app

Second .. →
/Users/ThatGuy/projects

Now add /index.js →
/Users/ThatGuy/projects/index.js 

/ = current folder

../ = ek folder upar

../../ = do folders upar

../../../ = teen folders upar*/

