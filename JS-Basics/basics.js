// Variables
let name = "Someone";
console.log(name);

// Constants
const value = 10;
console.log(value);

// Primitive Types
let username = "newuser";
let number_ = 20;
let is_eligible = true;
let not_defined = undefined;
let selection = null;

console.log(typeof username);
console.log(typeof number_);
console.log(typeof is_eligible);
console.log(typeof not_defined);
console.log(typeof selection);

// Reference Types

// 1. Objects

let company = {
    name: "SMC",
    id: 1234
};
console.log(company);

company.name = "Private";
console.log(company.name);

company["name"] = "Public";
console.log(company.name);

let select = "name";
company[select] = "SMC";
console.log(company.name);