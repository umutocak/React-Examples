const users = [
    {
        name : "Umut",
        age : 10,
    },
    {
        name : "Ocak",
        age : 29,
    },
    {
        name : "Ahmet",
        age : 40,
    }
]

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// Push
// users.add("Ayşe");
// users.add("Fatma");
// console.log(users);


//Map
// users.map((item) => {
//     console.log(item.name);
// })


//Find
// const result = users.find((item) => item.name === "Mehmet");
// console.log(result);


//Filter
// const filtered = users.filter(
//     (item) => item.name === "Mehmet"
// );
// console.log(filtered);


//Some  True - False 
// const some = users.some((item) => item.age === 11 );
// console.log(some);


//Every  True - False 
// const every = users.every((item) => item.age > 20);
// console.log(every);


//Includes  True - False 
const fruits = ['apple','pear','banana'];
const isIncludes = fruits.includes("banana");
console.log(isIncludes);