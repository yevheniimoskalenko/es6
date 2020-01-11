const axios = require("axios");
// // const names = ["Yevhenii", "Vika", "Den", "Vadim"];
// // for (let name of names) {
// //   console.log(name);
// // }
// // Object

// let name = "jeck";
// let sex = "male";
// let age = 20;

// var person = {
//   name,
//   sex,
//   age,
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
//   // get:password(){
//   // 	return this.name + this.age
//   // }
// };

// person.name;
// person["name"];
// let firstname = "name";
// person[firstname];

// person.greet;
// // person = {
// //   [firstname]: "max"
// // };
// console.log(person);

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("promise complite");
//   } else {
//     reject("some error");
//   }
// });
// promise.then(res => console.log(res)).catch(res => console.log(res));
// const arr = ["Apple", "Orenge", "peare"];
// const arrs = [1, -3, 5, -2, 10];
// const number = [1, 2, 3, 4, 5];
// arr.forEach(res => {
//   console.log(res);
// });
// const newarr = arr.map(res => {
//   return res.length;
// });
// // console.log(newarr);
// const newars = arrs.filter(res => {
//   return res > 0;
// });
// console.log(newars);

// const result = number.reduce((previousValue, currentItem, index, rs) => {
//   let res = previousValue + currentItem;
//   return `${res} ${index} ${rs}`;
// });
// console.log(result);
// Код ниже получает из массива строк новый массив, содержащий их длины:
// const arr = ["Есть", "жизнь", "на", "Марсе"];

// const result = arr.map(res => {
//   return res.length;
// });
// let r = arr.forEach(res => {
//   console.log(res.length);
// });
// for (let r of arr) console.log(r.length);
// for (let r in arr) console.log(r);
// const arr = [1, 2, 3, 4, 5];
// function getSums(...arr) {
//   const res = arr.reduce((prev, curr) => {
//     return prev + curr;
//   });
//   return res;
// }
// console.log(getSums(1, 2, 3, 4, 5));
// const rx1 = /[a-z]+a[0-9]/g;
// console.log("awesome undeground awa9".match(rx1));

// const rx2 = /[a-z]+a[a-z]+/g;
// console.log("A man can die but once".match(rx2));
// const email = /[a-z0-9]+@([a-z]+[^0-9])\.[a-z]+/g;
// console.log("test@ru.co testjoker@gmail.com test@3ru.co".match(email));

// const link = /http:\/\/[a-z]+\.[a-z]+\.[a-z]*/g;
// console.log("http://google.com.ua googles.com http://google.com".match(link)); //

// const numbers = "test1 231".split("");
// console.log(numbers);
// console.log(numbers.join(" ", ":"));

// замыкания
// function create(n) {
//   return function() {
//     console.log(n * 2);
//   };
// }
// const result = create(12);
// // result();

// function calcinc(n) {
//   return function(num) {
//     return n + num;
//   };
// }
// const addOne = calcinc(2);
// console.log(addOne(2));

// function GetUrl(domen) {
//   return function(url) {
//     return `http://${domen}.${url}`;
//   };
// }

// const url = GetUrl("google");
// console.log(url("com"));

// function file(type) {
//   return function(name) {
//     return `${name}.${type}`;
//   };
// }
// // const files = file("jpg");
// // console.log(files("test"));

// const person1 = { name: "Yevhenii", age: 22, job: "frontend" };
// const person2 = { name: "Viktoriy", age: 20, job: "SMM" };

// function bind(context, fn) {
//   return function(...arg) {
//     fn.apply(context, arg);
//   };
// }
// function log() {
//   console.log(`${this.name} ${this.age} ${this.job}`);
// }
// bind(person1, log)();
// bind(person2, log)();

// const deley = ms => {
//   return new Promise(r => setTimeout(() => r(), ms));
// };
// const url = "http://jsonplaceholder.typicode.com/comments/";
// function fetchTodos() {
//   console.log(`Start`);
//   return deley(2000).then(() => axios({ method: "GET", url }));
// }

// fetchTodos()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => console.log(e));

// async function axiosn() {
//   console.log(`Start`);
//   try {
//     const respons = await axios.get(
//       "http://jsonplaceholder.typicode.com/comments/"
//     );
//     console.log(respons);
//   } catch (e) {
//     console.log(e);
//   }
// }
// axiosn();

// const person = new Object({
//   name: "Maxim",
//   age: 25,
//   greet: function() {
//     console.log(`gereet`);
//   }
// });

// Object.prototype.Sayhello = function() {
//   console.log(`Hello`);
// };

// const lena = Object.create(person);
// lena.name = "lena";
// lena.age = 20;
// console.log(lena);

// function hello() {
//   console.log(`hello`, this);
// }

// const person = {
//   name: "vllade",
//   age: 20,
//   log: function(...arrs) {
//     console.group(`${this.name} info:`);
//     console.log(this.name);
//     console.log(this.age);
//     console.log(arrs[0]);
//     console.log(arrs[1]);
//     console.groupEnd();
//   }
// };

// const lena = {
//   name: "lena",
//   age: 23
// };

// person.log.bind(lena, "Front-end", `380664657082`)();
// person.log.call(lena, "PM", 38065646);
// person.log.apply(lena, ["Front-end", `380664657082`]);

// const array = [1, 2, 3, 4, 5, 6];

// Array.prototype.Moult = function(n) {
//   return this.map(element => {
//     return element * n;
//   });
// };
// console.log(array.Moult(20));

// const person = [
//   {
//     name: "Yevhenii",
//     age: 23,
//     job: "Front-end",
//     budget: 1332
//   },
//   {
//     name: "Viktorya",
//     age: 20,
//     job: "PM",
//     budget: 1854
//   },
//   {
//     name: "Viktorya",
//     age: 14,
//     job: "PM",
//     budget: 5000
//   },
//   {
//     name: "Viktorys",
//     age: 49,
//     job: "PM",
//     budget: 499
//   },
//   {
//     name: "Viktorya",
//     age: 10,
//     job: "PM",
//     budget: 1500
//   }
// ];

// for (let s of person) {
//   console.log(s);
// }
// person.forEach(element => {
//   console.log(element);
// });

// const result = person.map(element => {
//   return `${element.name} ${element.age * 2}`;
// });

// const result = person.filter(element => {
//   if (element.age >= 18) return true;
// });

// for (let result of person) {
//   if (result.age >= 18) {
//     console.log(result);
//   }
// }
// const adult = [];
// for (let i = 0; i < person.length; i++) {
//   if (person[i].age >= 18) {
//     adult.push(person[i]);
//   }
// }

// let amount = person.reduce((total, person) => {
//   return total + person.budget;
// }, 0);
// for (let i = 0; i < person.length; i++) {
//   amount += person[i].budget;
// }
// console.log(amount);
// const result = person.find(people => people.name === "Viktorys");
// const result = person.findIndex(people => people.name === "Viktorys");
// console.log(result);

// const person = Object.create({
//   calcAge() {
//     console.log('Age:', new Date().getFullYear() - this.birthday)
//   }
// }, {
//   name: {
//     value: "Yevhenii",
//     enumerable: true,
//     writable: true,
//     configurable: true
//   },
//   birthday: {
//     value: 1997,
//     enumerable: false,
//     writable: false,
//     configurable: false
//   },
//   age: {
//     get() {
//       return new Date().getFullYear() - this.birthday
//     },
//     set(value) {
//       console.log(value)
//     }
//   }
// })
// person.calcAge()
// person.age = "test1"
// person.name = "Maxim"
// for (let key in person) {
//   console.log(person[key])
// }
// console.log(person.age)

// class Animal {

//   constructor(option) {
//     this.name = option.name
//     this.age = option.age
//     this.hasTail = option.hasTail

//   }
//   voice() {
//     console.log(`I am Animal`)
//   }
// }
// // const animal = new Animal({
// //   name: 'Animal',
// //   age: 5,
// //   hasTail: true
// // })
// class Cat extends Animal {
//   constructor(option) {
//     super(option)
//     this.color = option.color
//   }
//   voice() {
//     super.voice()
//     console.log(`I am cat`)
//   }
//   get AgeInfo() {
//     return this.age * 7
//   }
//   set AgeInfo(value) {
//     this.age = value
//   }
// }
// const cat = new Cat({
//   name: 'Animal',
//   age: 5,
//   hasTail: true,
//   color: 'black'
// })
// console.log(cat.AgeInfo = 10)
// console.log(cat.AgeInfo)
// function solution(number) {
//   for (let i = 0; i < number; i++) {
//     if (i % 2 && i != 1) console.log(i);
//   }
// }
// solution(10);
// Создайте программу, которая фильтрует список строк и возвращает список с именем только ваших друзей.
// Если имя содержит ровно 4 буквы,
// вы можете быть уверены, что оно должно быть вашим другом!
//  В противном случае, вы можете быть уверены, что он не ...
// Ex: (Input = ["Ryan", "Kieran", "Jason", "Yous"]), (Output = ["Ryan", "Yous"]);

// i.e.friend[("Ryan", "Kieran", "Mark")]`shouldBe`[("Ryan", "Mark")];

// function friend(friend) {
//   if (Array.isArray(friend) === true) {
//     let friends = [];
//     for (let key of friend) {
//       if (key.length === 4) {
//         friends.push(key);
//       }
//     }
//     return friends;
//   } else {
//     console.log("bad");
//   }
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]));

// ((x) => {
//   return x * x;
// })
// console.log((2))

// Исправьте код, указанный ниже, чтобы результат проверки всегда был true,
// без пропусков, не меняя оператора сравнения и общей логики вычисления

// for (let i = 0; i <= 10; i++) {
//   console.log(i + ':' + ((i * 0.1) == (i / 10)));
// }
// const arr = new Array(1, 2, 3, 4).
// console.log(arr)
// const arr = "arras.jpg".split(".", 3)
// console.log(arr)

// for (let i = 0; i <= 10; i++) {
//   console.log(i + ':' + ((i * 0.1) == (i / 10)));
// }
// Напишите функцию принимающую строку с именем файла и возвращающую
// расширение (фрагмент после последней точки). В случае отсутствия в
// строке расширения - выбрасывать исключение.

// function monkeyCount(n) {
//   let c = [];
//   for (let i = 1; i <= n; i++) {
//     c.push(i);
//   }
//   return c;
// }
// console.log(monkeyCount(10));

//  Ваша задача - написать функцию, которая принимает строку и возвращает новую строку 
// со всеми удаленными гласными. Например, строка «Этот сайт для неудачников LOL!» 
// стал бы "Ths wbst s fr lsrs LL!"
// Примечание: для этого ката у не считается гласным.


// a, e, i, o, u, 
// function disemvowel(str) {
//   let newstr = str.replace(/[aeiou]/gi, "")
//   return newstr;

// }
// console.log(disemvowel("This website is for losers LOL!"))
