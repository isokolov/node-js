const os = require("os");
const { userName: user, sayHi } = require("./test2");

console.log(sayHi(user));

console.log(os.version(), os.arch(), os.hostname());

console.log(__dirname);
console.log(__filename);
