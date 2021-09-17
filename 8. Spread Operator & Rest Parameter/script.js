// /// 8.1 Spread Operator

// memecah iterables menjadi single element
// const mhs = ['Fahrul', 'Ujang', 'Eka'];
// console.log(...mhs);

// menggabungkan 2 array
// const dosen = ['Yanto', 'Yuda', 'Iqbal'];
// const orang = [...mhs, 'Nanto', ...dosen];
// console.log(orang);

// meng-copy Array
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);
// console.log(mhs1);

// Nodelist
// memasukkan content li ke array
// const liMhs = document.querySelectorAll('.mhs');

// looping
// const mhs = [];
// for (const m of liMhs) {
//   mhs.push(m.textContent);
// }
// console.log(mhs);

// higher order function
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

// Spread string pada h2
// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');

// nama.innerHTML = huruf;

// /// 8.2 Rest Parameter
// contoh 1
// function func(a, b, ...param) {
//   return `a ${a}, b ${b}, sisanya ${param}`;
//   // return arguments;
//   // return Array.from(arguments);
//   // return [...arguments];
// }

// console.log(func(1, 2, 3, 4, 5, 6, 7, 8));

// contoh 2
// function penjumlahan(...angka) {
//   // let total = 0;
//   // for each
//   // angka.forEach((a) => (total += a));
//   // for of
//   // for (const a of angka) {
//   //   total += a;
//   // }
//   // return total;
//   // higher order function
//   return angka.reduce((total, akumulator) => total + akumulator, 0);
// }

// console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7));

// Array Destructuring
// const kel1 = ['Dadan', 'Defit', 'Fahrul', 'Jacob', 'Teja'];
// const [ketua, wakil, ...anggota] = kel1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// Object Destructuring
// const team = {
//   ketua: 'Yanto',
//   wakil: 'Yusril',
//   sekretaris: ['Eygin', 'Aulia'],
//   keamanan: ['Defit', 'Diana'],
//   kerohanian: 'Teja',
// };

// const { ketua, ...anggota } = team;
// console.log(ketua);
// console.log(anggota);

// Filtering
function filterBy(tipe, ...values) {
  return values.filter((v) => typeof v == tipe);
}

console.log(filterBy('number', 1, true, 2, 'satu', 3, 4));
console.log(filterBy('boolean', 1, true, 2, 'satu', 3, 4));
console.log(filterBy('string', 1, true, 2, 'satu', 3, 4));
