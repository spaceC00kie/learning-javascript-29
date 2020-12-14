//object literals

const person = {
  firstName: "Brian",
  lastName: "Griffin",
  age: 18,
  hobbies: ["writing", "smugness", "adventure"],
  address: {
    street: "Spooner Street",
    city: "Quahog",
    state: "RI",
  },
}

console.log(person)
console.log(person.firstName)
console.log(person.firstName, person.lastName)
console.log(person.hobbies[1])
console.log(person.address.city)
