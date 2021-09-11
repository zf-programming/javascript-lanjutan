// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll("li[data-duration]"));

// Pilih yang JAVASCRIPT LANJUTAN
const durasiJsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // Ambil durasi masing2 video
  .map((value) => value.dataset.duration)

  // ubah durasi menjadi int
  // ubah menit menjadi detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((prev, curr) => prev + curr);

// ubah format jadi jam menit detik
const jam = Math.floor(durasiJsLanjutan / 3600);
const menit = Math.floor((durasiJsLanjutan % 3600) / 60);
const detik = durasiJsLanjutan % menit;

// simpan di SPAN
const spanDurasi = document.querySelector(".total-durasi");
spanDurasi.textContent = `${jam}:${menit}:${detik}`;

const spanJumlahVideo = document.querySelector(".jumlah-video");
spanJumlahVideo.textContent = `${
  videos.filter((value) => value.textContent.includes("JAVASCRIPT LANJUTAN"))
    .length
} Video`;
