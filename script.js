//№1
let people = [
  { name: "Andrey", age: 10, budget: 20 },
  { name: "Ilya", age: 15, budget: 20000 },
  { name: "Sherik", age: 5, budget: 2000 },
  { name: "Ahmad", age: 20, budget: 200 },
]

let total = 0

for (const item of people) {
    total += item.budget
}

console.log(total);

//№2
let min = null

for (const human of people) {
  if (min === null || human.age < min.age) {
    min = human
  }
}

console.log(min.name);

//№3
let max = null

for (const human of people) {
  if (min === null || human.age > min.age) {
    max = human
  }
}

console.log(max.age);

//№4
console.log(min.age);

//№5
let amount = people.reduce ((a,b) => {
  if (a.budget && b.budget < 5000) {
    return a
  } else {
    return b
  }
})

console.log(amount);

//№6
for (const human of people) {
  if (human.budget > 1000) {
    console.log(human.name);

  }
}

//№7
let count = 0

for (const key in people) {
  if (people[key].age < 15) { //people[key] - получаем объект по индексу!!!
    count++

  }

}
console.log("Количество людей младше 15 лет:" ,count)

//№8
let ages = 0

for (const key in people) {
  if (people[key].age >= 10) { //people[key] - получаем объект по индексу!!!
    ages++

  }

}
console.log("Количество людей больше или равно 10 лет:" ,ages)
