const axios = require("axios");
// const split = require("split");
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
//   let newstr = str.replace(/[aeiou]/gi, "");
//   return newstr;
// }
// console.log(disemvowel("This website is for losers LOL!"));

// function factorial(n) {
//   if (n == 1) return 1;
//   else
//    return n * factorial(n - 1);
// }
// console.log(factorial(5));
// Ваша задача - создать функцию, которая может принимать любое
//  неотрицательное целое число в качестве аргумента и возвращать
//  его с его цифрами в порядке убывания. По сути,
//  переставить цифры, чтобы создать максимально возможное число.
// function descendingOrder(n) {
//   let newnum = n.split("");
//   newnum.sort((a, b) => b - a);
//   let s = newnum.join("");
//   return s;
// }
// console.log(descendingOrder("123242"));

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// function validatePIN(pin) {
//   var myRe = /^[0-9]*$/gi;
//   var myArray = myRe.test(pin);
//   if (myArray === true) {
//     if (pin.length === 4 || pin.length === 6) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
// console.log(validatePIN("1234"));

// const arr = [1, 4, 2, 232, 4, 1, 22, 64, 3, 1003];
// const sortBulb = data => {
//   for (let i = data.length; i > 0; i--) {
//     var counter = 0;
//     for (let j = 0; j < i; j++) {
//       if (data[j] > data[j + 1]) {
//         let tmp = data[j];
//         data[j] = data[j + 1];
//         data[j + 1] = tmp;
//         counter++;
//       }
//     }
//     if (counter == 0) {
//       break;
//     }
//   }
//   return data;
// };
// console.log(sortBulb(arr));
// function removeSmallest(numbers) {
//   return numbers;
// }
// console.log(removeSmallest([5, 3, 2, 4]));
// function removeSmallest(obj) {
//   const e = Math.min.apply(Math, obj);
//   obj.splice(obj.indexOf(e), 1);

//   return obj;
// }

// console.log(removeSmallest([5, 3, 2, 4]));

// Array.prototype.match = function(...arg) {
//   // return arg * 2;
//   console.log(arg);
// };
// const fruits = [1, 2, 3, 4];
// console.log(fruits.match(1, 2, 3));

// Можете ли вы найти иголку в стоге сена? Напишите функцию findNeedle (),
// которая принимает массив, полный мусора, но содержащий одну «иглу» После того,
// как ваша функция найдет стрелку, она должна вернуть сообщение (в виде строки),
//  которое говорит: «нашел иглу в положении» плюс индекс, в котором он нашел иглу, так что:

// function findNeedle(haystack) {
//   const str = haystack.indexOf("needle");
//   return `found the needle at position ${str}`;
// }

// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );
// Напишите функцию с именем repeatString, которая повторяет данный String src точное количество раз.
// function repeatStr(n, s) {
//   const newstr = s.repeat(n);
//   return newstr;
// }

// console.log(repeatStr(10, "Hello"));
// Нам нужна функция, которая может преобразовать число в строку.
//  Какие способы достижения этого вы знаете?

// function numberToString(num) {
//   return String(num);
// }
// console.log(numberToString(999));

// Дано: массив, содержащий хэши имен Возврат: строка,
//  отформатированная в виде списка имен, разделенных запятыми,
//  за исключением двух последних имен, которые должны быть разделены амперсандом.

// function list(names) {
//   // return names.length-1;
//   let string = [];

//   for (let element of names) {
//     string.push(element.name);
//   }
//   console.log(string);
// }

// console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));

// function countSheeps(arrayOfSheep) {
//   let trues = [];
//   for (let key of arrayOfSheep) {
//     if (key === true) {
//       trues.push(key);
//     }
//   }
//   return trues.length;
//   // TODO May the force be with you
// }
// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true
//   ])
// );

// В этом небольшом задании вам дана строка чисел,
// разделенных пробелами, и вы должны вернуть самое высокое и самое низкое число.
// function highAndLow(numbers) {
//   let nameList = numbers.split(" ");
//   let newLists = nameList.map(element => {
//     return Number(element);
//   });
//   let min = Math.min.apply(null, newLists);
//   let max = Math.max.apply(null, newLists);

//   return `${max} ${min}`;
// }
// console.log(highAndLow("1 2 3 4 5"));

// Простой, учитывая строку слов, возвращает длину самого короткого слова.
//  Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

// function findShort(s) {
//   const list = s.split(" ");
//   const length = list.map(element => {
//     return element.length;
//   });
//   const min = Math.min.apply(null, length);
//   return min;
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// Ваша задача - написать функцию findSum.
// Вплоть до n эта функция будет возвращать сумму всех кратных 3 и 5.
// function findSum(n) {
//   let s = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       s += i;
//     }
//   }
//   return s + n;
// }
// console.log(findSum(10));

// Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив,
// содержащий те же строки, упорядоченные от самой короткой до самой длинной.
// Например, если этот массив был передан в качестве аргумента:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Ваша функция вернет следующий массив:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// Все строки в массиве, передаваемые вашей функции,
// будут иметь разную длину,
//  поэтому вам не придется решать,
// как упорядочить несколько строк одинаковой длины.

// function sortByLength(array) {
//   return array.sort();
// }
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

// function stringAs(str) {
//   let newstr;
//   if (str.length <= 70) {
//     newstr = str.split(" ");
//   } else {
//     console.log(`false`);
//   }
//   let list = [];
//   for (let key of newstr) {
//     if (/^[aA]/i.test(key) === true) {
//       list.push(key);
//     }
//   }
//   return list;
// }
// console.log(
//   stringAs(
//     "aywdkadl dlawndlwad Akalhd awkhd wiakdhodkuwadklhj ladjwaiod ha doi w"
//   )
// );

// У вас есть массив чисел.
//  Ваша задача сортировать возрастающие нечетные числа,
//  но четные числа должны быть на своих местах.
//  Ноль не является странным числом,
//  и вам не нужно его перемещать.
//   Если у вас есть пустой массив,
// вам нужно его вернуть.
// function sortArray(array) {
// let sors = array.sort((a, b) => a - b);
//   const list = [];
//   for (let key of array) {
//     if (key % 2 == 0) {
//       console.log(key);
//     }
//   }
// return sors;
// }
// console.log(sortArray([5, 3, 1.2, 2, 8, 1, 4]));
// Вернуть количество (количество) гласных в данной строке.
//  Мы будем рассматривать a, e, i, o и u как гласные для этого ката.
//  Входная строка будет состоять только из строчных букв и / или пробелов.
// function getCount(str) {
//   //   aeiou
//   // enter your majic here
//   let newstr = str.replace(/[aeiou]/gi, "");

//   return str.length - newstr.length;
// }
// // хаха вот это ришение так ришение
// console.log(getCount("abracadabra"));

// Есть массив с некоторыми числами.
//  Все числа равны, кроме одного.
//  Попробуйте найти это!
// function findUniq(arr) {
//   arr.sort();
//   if (arr[0] === arr[1]) {
//     return arr[arr.length - 1];
//   } else {
//     return arr[0];
//   }
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));

// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9),
//  который возвращает строку этих чисел в виде номера телефона.
// function createPhoneNumber(numbers) {
//   let num = numbers.join("");
//   let number = `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6, 10)}`;
//   return number;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Ваша задача - отсортировать заданную строку.
//  Каждое слово в строке будет содержать одно число.
//   Это число - позиция, которую слово должно занимать в результате.
//    Примечание: числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (не 0).
//  Если входная строка пуста, вернуть пустую строку.
//  Слова во входной строке будут содержать только действительные последовательные числа.
// function order(words) {
//   const arr = words.split(" ");
//   let list = [];
//   let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   for (let i = 0; i < numArr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j].includes(numArr[i])) {
//         list.push(arr[j]);
//       }
//     }
//   }
//   return list.join(" ");
// }

// console.log(order("is2 Thi1s T4est 3a"));
// Я новичок в кодировании, и теперь я хочу получить сумму двух массивов ... фактически сумму всех их элементов. Я буду признателен за вашу помощь. Постскриптум Каждый массив содержит только целые числа. Выход тоже число.
// function arrayPlusArray(arr1, arr2) {
//   let num = arr1.concat(arr2);
//   let sum = 0;
//   for (let elem of num) {
//     sum += elem;
//   }
//   return sum;
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// function array_diffB(a, b) {
//   return a.filter(function(num) {
//     return b.indexOf(num) === -1;
//   });
// }

// console.log(array_diffB([1, 2, 2, 2, 3], [2, 3]));
// function oddOrEven(array) {
//   if (array == [] || array == undefined) return "even";
//   for (let elem of array) {
//     if (elem % 2 === 0) {
//       console.log(elem);
//       return "even";
//     } else {
//       return "odd";
//     }
//   }
// }

// console.log(oddOrEven([1023, 1, 3]));
// function findLongest(str) {
//   var spl = str.split(" ");
//   var longest = 0;

//   for (var i = 0; i < spl.length; i++) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length;
//     }
//   }
//   return longest;
// }
// console.log(findLongest("The quick white fox jumped around the massive dog"));

// function getGrade(s1, s2, s3) {
//   let Num = (s1 + s2 + s3) / 3;
//   if (Num >= 90 || Num >= 100) return "A";

//   if (Num >= 80 || Num >= 90) return "B";

//   if (Num >= 70 || Num >= 80) return "C";

//   if (Num >= 60 || Num >= 70) return "D";

//   if (Num >= 0 || Num >= 60) return "F";
// }
// console.log(getGrade(50, 50, 50));
// function removeChar(str) {
//   let text = str.substr(1, str.length - 2)
//   return text
// };
// console.log(removeChar("eloquent"))

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }
// console.log(makeUpperCase("eloquent"))
// function boolToWord(bool) {
//   if (!!bool === true) {
//     return "Yes"
//   } else {
//     return "No"
//   }
// }
// console.log(boolToWord(true))

// function reverseWords(str) {
//   let strs = str.split(" ").reverse().join(" ")
//   return strs;
// }
// console.log(reverseWords("The greatest victory is that which requires no battle"))
// function booleanToString(b) {
//   if (!!b === true) return "true"
//   else return "false"
// }
// console.log(booleanToString(false))

// function reverseList(list) {
//   return list.reverse()
// }
// console.log(reverseList([1, 2, 3, 4]))

// возьмите массив и удалите каждый второй элемент из этого массива. Всегда оставляйте первый элемент и начинайте удаление со следующего элемента.
// function removeEveryOther(arr) {
//   let list = []
//   for (let i = 0; i < arr.length; i += 2) {
//     list.push(arr[i])
//   }
//   return list
// }
// console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']))

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// function hello(name) {
//   let lowCase = name.toLowerCase()
//   let s = lowCase[0].toUpperCase() + lowCase.slice(1)
//   return `Hello ${s}`
// }
// console.log(hello("johN"))
// function spacify(str) {
//   list = ""
//   for (let i = 0; i < str.length; i++) {
//     list += `${str[i]} `
//   }
//   return list.substr(0, list.length - 1)

// }
// console.log(spacify("hello world"))
// var add = n => {
//   const f = x => add(n + x);
//   f.valueOf = () => {
//     return n;
//   };
//   return f;
// };

// console.log(add(2)(5)(12).valueOf());

// function spinWords(str) {
//   return str
//     .split(" ")
//     .map(function(word) {
//       return word.length > 4 ? word.reverse() : word;
//     })
//     .join(" ");
// }

// String.prototype.reverse = function() {
//   return this.split("")
//     .reverse()
//     .join("");
// };
// console.log(spinWords("Hey fellow warriors"));

// let arr = {
//   sum: [1, 2, 3, 4],
//   mess: function() {
//     let s = this.sum.map(elem => {
//       return elem + 2;
//     });
//     console.log(s);
//   }
// };
// arr.mess();

// function absentVowel(x) {
//   let newstr = x.replace(/[^aeiou]/gi, "").split("");
//   let vowel = {
//     0: "a",
//     1: "e",
//     2: "i",
//     3: "o",
//     4: "u"
//   };
//   let list = "";
//   for (let i = 0; i < 5; i++) {
//     if (newstr.includes(vowel[i]) === false) {
//       list = i;
//     }
//   }
//   return Number.parseInt(list);
// }
// console.log(absentVowel("John Doe hs seven red pples under his bsket"));
// function isIntArray(arr) {
//   let list = "";
//   console.log(arr)
//   if (Array.isArray(arr) == true) {
//     list = true;
//   }

//   if (arr === null || arr === undefined) {
//     list = false
//   }

//   if (arr !== null && Number.isNaN(NaN) !== false && arr !== undefined) {
//     for (let elem of arr) {
//       if (Number.isInteger(elem) === false) {
//         list = !!elem;
//       } else {
//         list = !!elem;
//       }
//     }
//   }
//   return list;
// }

// function isIntArray(arr) {

//   if (!arr || Object.prototype.toString.call(arr) != "[object Array]") return false;
//   var el;

//   for (var i = 0; i < arr.length; i++) {

//     if (Number(el = arr[i]) !== el || el % 1 !== 0) {
//       return false
//     }
//   }
//   return true
// }

// function isIntArray(arr) {
//   return Array.isArray(arr) && arr.every(function (x) {
//     return Math.floor(x) === x
//   });
// }
// console.log(isIntArray([]));

// function between(a, b) {
//   let list = [];
//   for (let i = a; i <= b; i++) {
//     list.push(i);
//   }
//   return list;
// }
// console.log(between(5, 10));
// // Сравнение
// console.log("3" > "22");
// ucFirst("вася") == "Вася";
// const ucFirst = str => {
//   return str[0].toUpperCase() + str.substr(1);
// };

// console.log(ucFirst("вася"));

// const checkSpam = str => {
//   let newstr = str.toLowerCase();
//   // if (newstr.includes("viagra") == true || newstr.includes("xxx") == true) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return newstr.includes("viagra") || newstr.includes("xxx");
// };
// console.log(checkSpam("innocent rabbit"));

// const truncate = (str, maxlength) => {
//   return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
// };
// console.log(truncate("Всем привет!", 20));
// const extractCurrencyValue = str => {
//   return str.slice(1);
// };

// console.log(extractCurrencyValue("$120"));
// class Clock {
//   constructor({
//     template
//   }) {
//     this.template = template;
//   }
//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;
//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({
//   template: "h:m:s"
// });
// clock.start();
// clock.stop();

// function solution(str) {
//   // let strs = str.split("")
//   let list = []
//   const re = /(.{2}|.)/g

//   if (str.length % 2 === 0) {
//     list = str.match(re)
//   } else {
//     list = str.match(re)
//     let last = list[list.length - 1] + "_"
//     list.splice(list.length - 1, list.length - 1, `${str[str.length-1]}_`);
//   }
//   return list
// }

// // function solution(str) {
// //   return (str.length % 2 ? str + '_' : str).match(/../g);
// // }
// console.log(solution("abc1d"))

// function reverse(str) {
//   str = str.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2) {
//       str[i] = str[i]
//         .split("")
//         .reverse()
//         .join("");
//     }
//   }
//   return str.join(" ").trim();
// }

// console.log(reverse("   "));
// function solution(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// console.log(solution("world"));
// function sumMix(x) {
//   let sum = 0;
//   for (let key of x) {
//     sum += +key;
//   }
//   return sum;
// }
// console.log(sumMix([9, 3, "7", "3"]));
// function noSpace(x) {
//   return x.replace(/ /g, "");
// }
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
// function nthChar(words) {
//   let str = [];
//   for (let key in words) {
//     str.push(words[key][key]);
//   }
//   return str.join("");
// }
// console.log(nthChar(["yoda", "best", "has"]));

// function removeUrlAnchor(url) {
//   var to = url.search("#");
//   if (to == "-1") {
//     return url;
//   }

//   let s = url.substring(0, to);
//   return s;
// }
// function removeUrlAnchor(url) {
//   return url.split("#")[0];
//   // return url.replace(/#.+/gi, "");
// }
// console.log(removeUrlAnchor("www.codewars.com/katas/"));
// function digitize(n) {
//   let rev = n
//     .toString()
//     .split("")
//     .reverse()
//     .map(elem => {
//       return Number(elem);
//     });
//   return rev;
// }
// console.log(digitize(348597));

// function maps(x) {
//   return x.map(elem => {
//     return elem * 2;
//   });
// }
// console.log(maps([1, 2, 3]));
// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   return ` ${this.firstName} this.lastName `;
// }

// var n = new NameMe("John", "Doe");
// console.log(n);

// const arr = [1, 2, 3, 4, 56, 6];

// console.log(s);

// function hello() {
//     console.log("hello", this);
// }

// const person = {
//     name: "Vladilen",
//     age: 25,
//     Sayhello: hello,
//     loginfo: function (job, work) {
//         console.log(`${this.name}`);
//         console.log(`${job}`);
//         console.log(`${work}`);
//     }
// };

// const lena = {
//     name: "lena",
//     age: 22
// };

// person.loginfo.apply(lena, ["wadwa", "Awdaw"]);
// person.loginfo.call(lena, "wadwa", "Awdaw");
// person.loginfo.bind(lena, "wadwa", "Awdaw");
// const arr = [1, 23, 5, 3, 54, 12];
// Array.prototype.moynt = function(n) {
//   return this.map(elem => elem * n);
// };
// // console.log(arr.moynt(2));
// const func = (job, number) => {
//     console.log(`${this.name} ${this.age}`);
//     console.log(`${job} ${number}`);
// };
// func.call(lena, "Front-end", "543534");
// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     return 10;
// }
// function func(job, number) {
//     console.log(`${this.name} ${this.age}`);
//     console.log(`${job} ${number}`);
// };


// func.call(lena, "Front-end", "543534");
// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     return 10;
// }
// function f() {
//   wait().then(res => console.log(res));
// ...что здесь написать?
// чтобы вызвать wait() и дождаться результата "10" от async–функции
// не забывайте, здесь нельзя использовать "await"
// }

// f();
// let a = [1, 2, 3, 4, 6];
// let b = a.concat();
// b.push(5)
// console.log(a)
// console.log(b)
// console.log(1 + "2" + "2")
// console.log(1 + +"2" + "2")
// console.log(1 + -"2" + "2")
// console.log(+"1" + "2" + "2")
// console.log("A" + "B" + "2")
// console.log("A" - "B" + 2)


// var x = 21;
// var girl = function () {
//     console.log(x)
// }
// girl()


// function monkeyCount(n) {
//     const list = []
//     for (let i = 1; i <= n; i++) {
//         list.push(i)
//     }
//     return list
// }
// console.log(monkeyCount(10))


// function exchangeWith(a, b) {
//     const listA = a.reverse()
//     const listB = b.reverse()
//     // const listB = new Map([]);
//     // const listB = []

//     // for (let i = 0; i < b.length; i++) {
//     //     listB.push(i, b[i])
//     // listB.set(i, b[i]);

//     // }
//     //  a.reverse() 
//     return `${listA} ${listB}`
// }

// console.log(exchangeWith(['1', '2', '3', '4', '5', '6', '7'], ['a', 'b', 'c']))

// function calvalues(a, b) {
//     return [
//         a + b,
//         a - b,
//         a * b,
//         a / b
//     ]
// }
// const [sum, sub, mult, ...other] = calvalues(42, 10)
// console.log(sum, sub, sub, other, mult)


const person = {
    name: "yevhenii",
    age: 20,
    adress: {
        country: "Ukraine",
        city: "Kiev"
    }
}

// const { name: firstName, adress, car = "car not found",
//     adress: { city: homeTawn = 'not faund', country }
// } = person
// console.log(homeTawn)


function logPerson({ name, age }) {
    console.log(name, age)
}
console.log(logPerson(person))