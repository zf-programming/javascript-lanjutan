//// 5.1 Template Literals

// // String Literal
// let nama = 'Fahrul';
// let nim = "301200020";
// let email = `fhrlzmn26@gmail.com`;

// // Template Literal menggunakan Backtick ``
/// Multi-line String
// console.log("Halo\nKawan");
// console.log(`Halo
// Selamat Malam
// Kawan`);

// /// HTML Fragments
// const mahasiswa = {
//   nama: "Fahrul",
//   umur: 19,
//   nim: "301200020",
//   email: "fhrlzmn26@gmail.com",
// };
// // concat
// let el = "";
// el += '<div class="mhs">';
// el += "<h2>" + mahasiswa.nama + "</h2>";
// el += "<span>" + mahasiswa.nim + "</span";
// el += "</div>";
// console.log(el);
// // template literal
// let el2 = `<div class="div">
//   <h2>${mahasiswa.nama}</h2>
//   <span class="nim">${mahasiswa.nim}</span>
// </div>`;
// console.log(el2);

// /// Embedded Expression
// console.log(`Nama: ${mahasiswa.nama}
// Umur: ${mahasiswa.nim}`);

// /// Expression Interpolation
// console.log(`Halo ${mahasiswa.nama}, 2 + 2 = ${2 + 2}`);
// // console.log(`${alert("Halo")}`);
// const x = 10;
// console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);

// /// Tagged Template
// const nama = 'Fahrul';
// const umur = 19;

// const halo = (strings, ...variables) => {
//   // for each
//   // let hasil = '';
//   // string.forEach((kata, index) => {
//   //   hasil += `${kata}${variable[index] || ''}`;
//   //   console.log(hasil);
//   // });
//   // return hasil;

//   // higher order function reduce
//   return strings.reduce(
//     (hasil, str, index) => `${hasil}${str}${variables[index] || ''}`,
//     ''
//   );
// };

// const elemen = halo`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(elemen);

// Highlight
const nama = 'Fahrul';
const umur = 19;

const halo = (string, ...val) => {
  return string.reduce(
    (hasil, akumulator, index) =>
      `${hasil}${akumulator}<span class="highlight">${val[index] || ''}</span>`,
    ''
  );
};

const elemen = halo`Halo, nama saya ${nama}, saya ${umur} tahun.`;
document.body.innerHTML = elemen;
