let emp = {
    id: 101,
    name: 'Prem',
    age: 27,
    salary: 10000,
};

// Object.keys
const keys = Object.keys(emp);
// Returns an array of an object's own keys

console.log(keys);

// Object.values
const values = Object.values(emp);
// Returns an array of an oject's own values

console.log(values);

// Object.entries 
const entries = Object.entries(emp);
// Returns an array of an objects own key value pairs

console.log(entries);

// Object.freeze(emp); // freeze will not allow you to update, delete or change
// emp.id = 100;
// delete emp.name;
// console.log(emp);

Object.seal(emp); // seal will allow you to update
emp.id = 100;
delete emp.name;
console.log(emp);

const x = Object.assign({}, emp);
console.log(x);