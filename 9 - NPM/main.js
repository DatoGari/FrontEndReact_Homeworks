var validator = require('validator');

let email1 = validator.isEmail('test@test.com')
let email2 = validator.isEmail('abcDE123')

console.log(email1)
console.log(email2)
