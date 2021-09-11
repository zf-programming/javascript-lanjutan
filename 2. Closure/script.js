// 2.1 Execution Context, Hoisting, and Scope

// Global Execution Context

// console.log(umur); // error
// console.log(nama); // undefined
// var nama = "Fahrul";
// console.log(nama); // Fahrul

// Creation Phase
// nama var = undefined
// nama function = fn()
// Konsep Hoisting
// window = global object
// this = window

// Execution Phase

// console.log(sayHello);
// console.log(sayHello()); // hoisting (var = undefined)

// var nama = "Fahrul"; // isi var
// var umur = 19;

// console.log(sayHello()); // skrng sudah isi var nya

// function sayHello() {
//   return `Nama saya ${nama}, umur saya ${umur} tahun`;
// }

// Function membuat Local Execution Context
// ada creation dan execution phase
// window
// arguments
// hoisting

// contoh
// console.log(sayName(nama)); // undefined

// var nama = "Fahrul Zaman"; // nama di isi

// function sayName(nama) {
//   console.log(arguments[0]); // print parameter di function

//   var sapa = "Halo! Salam Kenal";
//   return `${sapa} ${nama}`; // kalau sapa nya dibawah di hoisting jadi undefined
//   // var sapa = "Halo! Salam Kenal";
// }
// console.log(sayName(nama)); // print var nama = Fahrul Zaman
// console.log(sayName(`Yanto`)); // print yanto

// Contoh 2
// function a() {
//   console.log(`a`);
//   function b() {
//     console.log(`b`);
//     function c() {
//       console.log(`c`);
//     }
//     c();
//   }
//   b();
// }
// console.log(a());

// 2.2 Closures

// function init() {
//   let nama = "Fahrul"; // closure scope
//   // karena di butuhkan di function printNama()
//   let umur = 19;
//   function printNama() { // inner function
//     console.log(nama);
//   }
//   printNama();
//   console.dir(printNama);
// }
// init();

// contoh 2
// function init() {
//   let nama = "Fahrul";
//   let umur = 19;
//   // function printNama(nama) {
//   //   console.log(nama);
//   // }
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let print = init(); // print berisi function printNama
// console.log(print);

// print("Fahrul"); // eksekusi printNama
// print("Yahto");

// contoh 3
// function ucapSalam(waktu) {
//   return function (nama) {
//     return `Halo ${nama}, Selamat ${waktu}`;
//   };
// }

// let selamatPagi = ucapSalam("Pagi");
// let selamatSiang = ucapSalam("Siang");
// let selamatMalam = ucapSalam("Malam");

// console.log(selamatPagi("Fahrul"));
// console.log(ucapSalam("Siang")("Yanto"));

// Contoh 4
// let counter = 0;

// function add() {
//   return ++counter;
// }

// console.log(add()); // 1

// counter = 100;
// console.log(add()); // 101
// console.log(add()); // 102

// function add() {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// }

// const a = add();
// console.log(a()); // 1

// counter = 100;
// console.log(a()); // 2
// console.log(a()); // 3

// langsung menjalankan function didalamnya
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
