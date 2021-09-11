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
console.log(sayName(nama)); // undefined

var nama = "Fahrul Zaman"; // nama di isi

function sayName(nama) {
  console.log(arguments[0]); // print parameter di function

  var sapa = "Halo! Salam Kenal";
  return `${sapa} ${nama}`; // kalau sapa nya dibawah di hoisting jadi undefined
  // var sapa = "Halo! Salam Kenal";
}
console.log(sayName(nama)); // print var nama = Fahrul Zaman
console.log(sayName(`Yanto`)); // print yanto

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
