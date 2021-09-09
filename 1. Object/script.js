// // Cara Membuat Object

// // Object Literal
// let mahasiswa1 = {
//   nama: "Fahrul",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     return mahasiswa1;
//   },
// };

// let mahasiswa2 = {
//   nama: "Ujang",
//   energi: 15,
//   makan: function (porsi) {
//     this.energi += porsi;
//     return mahasiswa2;
//   },
// };

// console.log(mahasiswa1);
// console.log(mahasiswa2);

// // Function Declaration
// const mahasiswaMethod = {
//   makan: function (porsi) {
//     this.energi += porsi;
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = mahasiswaMethod.makan;

//   return mahasiswa;
// }

// let mhs1 = Mahasiswa("Fahrul", 10);
// let mhs2 = Mahasiswa("Ujang", 15);
// console.log(mhs1);
// console.log(mhs2);

// // Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     return this;
//   };
// }

// let mhs1 = new Mahasiswa("Fahrul", 10);
// let mhs2 = new Mahasiswa("Ujang", 15);
// console.log(mhs1);
// console.log(mhs2);

// // Object.create()
// const mahasiswaMethod = {
//   makan: function (porsi) {
//     this.energi += porsi;
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(mahasiswaMethod); // membawa object mahasiswaMethod
//   // mirip seperti inheritance

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let mhs1 = Mahasiswa("Fahrul", 10);
// let mhs2 = Mahasiswa("Ujang", 15);
// console.log(mhs1);
// console.log(mhs2);

// // contoh 2
// let obj1 = {
//   nama: "Fahrul",
//   umur: 19,
// };

// let obj2 = Object.create(obj1);
// obj2.nama = "Ujang"; // meng-override yang atas
// obj2.alamat = "Bandung";
// console.log(obj2.nama);

// // Implementasi Prototype
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
};

let mhs1 = new Mahasiswa("Mhs1", 10);

// Konsep Class
class Person {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
  }
}

let person1 = new Person("Fahrul", 19);
