// const persons = {
//   name1: "bilal",
//   name2: "ahmad",
//   name3: "omar",
//   name4: "yara",
// };
// const personscreate = firstname(persons);

// function firstname(obj) {
//   return obj;
// }

// console.log(personscreate);
console.log("Q1 : ");
//Q1//
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getdetails = function () {
    return (
      "brand : " +
      this.brand +
      " model : " +
      this.model +
      " year : " +
      this.year
    );
  };
}
const obj1 = new Car("kia", "cevea", 1999);
const obj2 = new Car("hondai", "elntra", 2016);
const obj3 = new Car("honda", "cevek", 2020);
let arr = [obj1, obj2, obj3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].getdetails());
}
//Q2//
const persons = {
  fname: ["bilal", "rania", "yara", "marah"],
};
function firstname(obj) {
  return Object.values(obj);
}
console.log(firstname(persons));
//ask anfal about this kind of obj-------------------------------------------------------------------------------------------
// const persons = {
//   person1: { firstName: "John", lastName: "Doe" },
//   person2: { firstName: "Alex", lastName: "Smith" },
//   person3: { firstName: "Alice", lastName: "Johnson" },
//   person4: { firstName: "Thor", lastName: "Odinson" },
//   person5: { firstName: "Soso", lastName: "Brown" },
// };
//Q3//
// console.log("Q3 : ");
// function objecttoarray(obj) {
//   var arr=[];
//   for (let i = 0; obj.length; i++) {
//     arr[i]=obj[i];
//     // arr[i+1]=obj[i+1];
//   }
//   return arr;
// }
// const blabla = {
//   name: "rania",
//   age: 20,
// };
// console.log(objecttoarray(blabla));
function objectToArray(bnbn) {
  const keys = Object.keys(bnbn);
  const values = Object.values(bnbn);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push(keys[i]);
    result.push(values[i]);
  }

  return result;
}

console.log(objectToArray({ firstName: "rania", age: 20,car: "kia" }));
