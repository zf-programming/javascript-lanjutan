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
