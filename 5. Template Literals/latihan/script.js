//// 5.2 Latihan Template Literals (HTML Fragments)

// // 1. HTML Fragments
// const mhs = {
//   nama: `Fahrul`,
//   nim: `301200020`,
//   umur: 19,
//   alamat: `Ibun`,
// };

// const el = `<div class="mahasiswa">
//   <h2 class="nama">Nama : ${mhs.nama}</h2>
//   <h3 class="nim">NIM : ${mhs.nim}</h3>
// </div>`;

// // 2. Looping
// const mhs = [
//   {
//     nama: 'Fahrul',
//     nim: '301200020',
//   },
//   {
//     nama: 'Fahmi',
//     nim: '301200020',
//   },
//   {
//     nama: 'Yanto',
//     nim: '301200020',
//   },
// ];

// const el = `<div class="mhs">
// <h2>Daftar Mahasiswa</h2>
//   <ul>
//     ${mhs.map((m) => `<li>${m.nama} - ${m.nim}</li>`).join('')}
//   </ul>
// </div>`;

// // 3. Conditions
// const mhs = {
//   nama: 'Fahrul',
//   nim: '301200020',
//   nilai: 80,
// };

// const el = `<div class="mahasiswa">
// <h2>${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// <h4>${mhs.nilai >= 80 ? 'Lulus' : 'Tidak Lulus'}</h4>
// </div>`;

// // 4. Nested
const mhs = {
  nama: 'Fahrul',
  nim: '301200020',
  semester: 3,
  mataKuliah: [
    'Object Oriented Programming',
    'Matematika Diskrit',
    'Aljabar Linear dan Matriks',
    'Struktur Data',
  ],
};

const cetakMataKuliah = (matkul) => {
  return `<ol>
  ${matkul.map((mk) => `<li>${mk}</li>`).join('')}
  </ol>`;
};

const el = `<div class="person">
<h3>${mhs.nama} - ${mhs.nim}</h3>
<span class="email">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : <br>${cetakMataKuliah(mhs.mataKuliah)}</h4>
</div>`;

console.log(el);
document.body.innerHTML = el;
