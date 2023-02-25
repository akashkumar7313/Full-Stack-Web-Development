// Object
let obj = {
    id: 101,
    name: "Alex",
    salary: 10000,
}

console.log(obj);
console.log(obj.id + " " + obj.name + " " + obj.salary);
/////////////////////////////////////////////////////////////////////////

let emp = new Object  ();
emp.id = 102;
emp.name = "Sam";
emp.salary = 12000;
console.log(emp);

// Creating object using function 
function Emp (id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

const e = new Emp(101, "Alex",10000);
console.log(e);
///////////////////////////////////////////////////////////////////////////////

// Manipulating objects
const empty = {
    id: 101,
    name: "Rahul",
    salary: 15000,
};

console.log(empty.id);
console.log(empty["id"]);
empty.items = 10;
empty['type'] = 'intern';

empty.id = 12;
empty['salary'] = 11000;
console.log(empty);

delete empty.name;  // Using delete keyword we can delete key value pairs.
console.log(empty);