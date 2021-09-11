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
