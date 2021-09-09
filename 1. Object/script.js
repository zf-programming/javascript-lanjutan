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
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     return mahasiswa;
//   };

//   return mahasiswa;
// }

// let mhs1 = Mahasiswa("Fahrul", 10);
// let mhs2 = Mahasiswa("Ujang", 15);
// console.log(mhs1);
// console.log(mhs2);

// Constructor Function
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    return this;
  };
}

let mhs1 = new Mahasiswa("Fahrul", 10);
let mhs2 = new Mahasiswa("Ujang", 15);
console.log(mhs1);
console.log(mhs2);

// Object.create()
