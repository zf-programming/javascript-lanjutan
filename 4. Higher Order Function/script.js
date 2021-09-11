//// 4.1 Higher Order Function
// Function yang beroperasi dalam function yang lain

// // Contoh 1
// // kerjakanTugas = Higher Order Function
// // selesai = callback
// function kerjakanTugas(matkul, selesai) {
//   console.log(`Mulai mengerjakan ${matkul} ...`);
//   selesai();
// }

// function selesai() {
//   setTimeout(() => alert(`selesai`), 3000);
// }

// kerjakanTugas("Java", selesai);

// // Contoh 2
// let i = 0;
// setInterval(() => console.log(++i), 1000);

// // Contoh 3
// const ucapSalam = (waktu) => (nama) => `Halo ${nama}, selamat ${waktu}`;

// const selamatPagi = ucapSalam("Pagi");
// console.log(selamatPagi("Fahrul"));

// // Contoh 4
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // sederhanakan dengan function
// let looping = (length) => {
//   for (let i = 0; i < length; i++) {
//     console.log(i);
//   }
// };
// looping(5);

// // sederhanakan lagi
// let loopAction = (length, action) => {
//   for (let i = 0; i < length; i++) {
//     action(i);
//   }
// };
// loopAction(3, alert);
// loopAction(2, console.log);

//// 4.2 Array.prototype Filter, Map, & Reduce
const angka = [1, 9, 4, 5, 3, -4, -2, 0, 10, 2, 12];
console.log(angka);

// // mencari angka >= 3
// const newAngka = [];
// // for
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// // filter
// // mencari angka >= 3
// const newAngka = angka.filter((value) => value >= 3);
// console.log(newAngka);

// // map
// // Kalikan semua angka dengan 2
// const newAngka = angka.map((value) => value * 2);
// console.log(newAngka);

// // reduce
// // jumlahkan seluruh angka
// const newAngka = angka.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(newAngka);

//// Method Chaining
// cari angka > 4
// kalikan 3
// jumlahkan

const hasil = angka
  .filter((value) => value > 4)
  .map((value) => value * 2)
  .reduce((prev, curr) => prev + curr);
console.log(hasil);
