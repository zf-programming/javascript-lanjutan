//// 3.1 Arrow Function

//// Membuat Function
//// Function Declaration
// function sayHello(nama) {
//   return `Halo ${nama}`;
// }
// console.log(sayHello("Fahrul"));

//// Function Expression
// let sayHello = function (nama) {
//   return `Halo ${nama}`;
// };
// console.log(sayHello("Fahrul"));

//// Arrow Function

// No Parameter
// let sayHello = () => `Halo Kawan`;
// console.log(sayHello());

// 1 Parameter
// let sayHello = nama => `Halo ${nama}`;
// console.log(sayHello("Fahrul"));

// >1 Parameter
// let sayHello = (nama, umur) => `Saya ${nama}, ${umur} tahun`;
// console.log(sayHello("Fahrul", 19));

// 1 baris dan menghasilkan return
// let tambah = () => 10 + 15;
// console.log(tambah());

// >1 baris
// let sayName = (nama, umur) => {
//   console.log(`Nama: ${nama}`);
//   console.log(`Umur: ${umur}`);
// };
// sayName("Yanto", 20);

// // Contoh Penerapan
// let mahasiswa = ["Fahrul Zaman", "Yanto", "Muhammad Ujang"];

// // mengembalikan Array
// let jumlahHuruf = mahasiswa.map((value) => value.length);
// console.table(jumlahHuruf);

// // Mengembalikan Object
// let jumlahHurufObj = mahasiswa.map((value) => ({
//   nama: value,
//   jumlah: value.length,
// }));
// console.table(jumlahHurufObj);

//// 3.2 Arrow Function Lanjutan (this)
// Arrow Function tidak memiliki konsep this
// this pada Arrow merujuk pada this punya Parent
// kalau tdk ada maka akan this = window

// // Object dengan Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Fahrul";
//   this.umur = 19;

//   this.sayName = function () {
//     return `Nama ${this.nama}`;
//   };

//   // arrow function
//   this.sayAge = () => `Umur ${this.umur}`;
// };

// const fahrul = new Mahasiswa();
// console.log(fahrul.sayName());
// console.log(fahrul.sayAge());

// // // Object Literal
// const mhs1 = {
//   nama: "Yanto",
//   umur: 22,
//   sayName: function () {
//     return `Nama ${this.nama}`;
//   },

//   //arrow function
//   sayAge: () => `Umur ${this.umur}`, // undefined (karena di window tidak ada umur)
// };

// console.log(mhs1.sayName());
// console.log(mhs1.sayAge());

// // Contoh Penerapan
// // class
// class Person {
//   constructor(nama, umur) {
//     this.nama = nama;
//     this.umur = umur;

//     // this pada setInverval mengacu ke windows
//     // bisa di akali dengan arrow function agar this mengacu ke parent
//     setInterval(() => console.log(this.umur++), 1000);
//   }
// }

// const person1 = new Person("person1", 20);
// console.log(person1);
