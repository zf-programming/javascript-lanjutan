// /// For of
/// for untuk iterable object
/// Iterable object = [String, array, args, nodelist, typeArray, Map, set, user-defined iterables]

// perbandingan
const contoh = ['Halo', 'Nama', 'Fahrul', 'Umur', 19];
// for biasa
// for (let i = 0; i < contoh.length; i++) {
//   console.log(contoh[i]);
// }

// array.forEach
// contoh.forEach((value, index) => console.log(value, index));

// for of
// for (const iterator of contoh) {
//   console.log(iterator);
// }

// index dengan for of
// for (const [index, value] of contoh.entries()) {
//   console.log(index);
//   console.log(value);
// }

// Array
// const arr = [1, 2, 'Z', 'A', 'B'];
// for (const i of arr) {
//   console.log(i);
// }

// String
// const nama = 'Fahrul';
// for (const i of nama) {
//   console.log(i);
// }

// Nodelist
// const nama = document.querySelectorAll('.nama');
// console.log(nama);

// nama.forEach((n) => console.log(n.textContent));

// for (const n of nama) {
//   console.log(n.textContent);
// }

// Arguments
// function jumlahkanAngka() {
//   // return arguments.reduce((a, i) => a + i);
//   // arguments.forEach((angka) => angka);
//   let jumlah = 0;
//   for (const angka of arguments) {
//     jumlah += angka;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5, 6, 7));

// /// For in
// Looping over enumerable
// object

// const mhs = {
//   nama: 'Fahrul',
//   umur: 19,
// };

// for (value in mhs) {
//   console.log(value);
//   console.log(mhs[value]);
// }
