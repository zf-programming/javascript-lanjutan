// /// 10.1 Callback

/// Synchronous Callback
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }
// function inputNama(callback) {
//   const nama = prompt('Masukkan nama anda', 'Orang');
//   callback(nama);
// }

// inputNama(halo);
// inputNama((nama) => alert(`Halo ${nama}`));

/// Asynchronous Callback
// const mhs = [
//   {
//     nama: 'Fahrul',
//     umur: 19,
//     email: 'fhrlzmn26@gmail.com',
//   },
//   {
//     nama: 'Yanto',
//     umur: 18,
//     email: 'yanto@gmail.com',
//   },
//   {
//     nama: 'Yusril',
//     umur: 21,
//     email: 'yusril@gmail.com',
//   },
// ];

// simulasi synchronous
// console.log('mulai');
// mhs.forEach((m) => {
//   for (let i = 0; i < 1000000; i++) {
//     let d = new Date();
//   }
//   console.log(m.nama);
// });

// console.log('selesai');
// console.log('------');

// simulasi asynchronous
// console.log('mulai');
// setTimeout(() => {
//   mhs.forEach((m) => console.log(m.nama));
// }, 2000);
// console.log('selesai');

/// Asynchronous Callback dari JSON
// Vanilla JS

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa(
//   'data/mahasiswa.json',
//   (results) => {
//     const mhs = JSON.parse(results);
//     console.log(mhs);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
  url: 'data/mahasiswa.json',
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.error(e.response);
  },
});
console.log('selesai');
