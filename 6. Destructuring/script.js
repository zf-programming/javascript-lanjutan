// /// 6.1 Destructuring Variable / Assignment

/// Array
// const arr = [1, 2, 3];

// const [a, b, c] = arr;
// console.log(a, b, c);

// const arrOrang = ['Ujang', 19, 'ujang@gmail.com'];
// const [nama, umur, email] = arrOrang;
// console.log(nama, umur, email);

/// Skipping items
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const [a, , c, , e] = arr2;
// console.log(a, c, e);

/// Swap Items
// let [a, b] = [1, 2];
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

/// Return Value pada Function
// const coba = () => [1, 2];
// const [a, b] = coba();
// console.log(a, b);

/// Rest Parameter
// let [a, ...val] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a);
// console.log(val);

/// Object
// const obj = {
//   nama: 'Fahrul',
//   umur: 19,
// };
// const { nama, umur } = obj;
// console.log(nama, umur);

/// Assignment tanpa Deklarasi object
// ({ nama, umur } = {
//   nama: 'Fahrul',
//   umur: 19,
// });

// console.log(nama, umur);

/// Assign ke variable baru
// const obj = {
//   nama: 'Fahrul',
//   umur: 19,
// };

// const { nama: n, umur: u } = obj;
// console.log(n, u);

/// Default Value
// const obj = {
//   nama: 'Fahrul',
//   umur: 19,
//   // email: 'fhrlzmn26@gmail.com',
// };

// const { nama: n, umur: u, email: e = 'tdkpunyaemail@gmail.com' } = obj;
// console.log(n, u, e);

/// Rest parameter
// const { nama: nama2, ...val } = obj;
// console.log(val);

// Mengambil field pada object
const mhs = {
  nim: 301200020,
  nama: 'Fahrul',
  umur: 19,
};

const getNIM = (mhs) => mhs.nim;
const getNIM2 = ({ nim }) => nim;

console.log(getNIM(mhs));
console.log(getNIM2(mhs));
