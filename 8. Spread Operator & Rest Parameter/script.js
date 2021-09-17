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
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;
