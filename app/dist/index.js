"use strict";

// function fetchTodos() {
//   console.log(`Start`);
//   return deley(2000).then(() => axios({ method: "GET", url }));
// }

// fetchTodos()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => console.log(e));

var axiosn = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var respons;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Start");
            _context.prev = 1;
            _context.next = 4;
            return axios.get("http://jsonplaceholder.typicode.com/comments/");

          case 4:
            respons = _context.sent;

            console.log(respons);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);

            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function axiosn(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = require("axios");
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

var deley = function deley(ms) {
  return new Promise(function (r) {
    return setTimeout(function () {
      return r();
    }, ms);
  });
};
var url = "http://jsonplaceholder.typicode.com/comments/";
axiosn(url);