// length - untuk mengecek panjang suatu dari string
const text = "aku adalah anak gembala";

console.log(text.length);

// slice() - mengekstrak bagian dari string dan mengembalikan bagian yang diekstraksi dalam string baru.
// Metode ini mengambil 2 parameter: posisi awal, dan posisi akhir (akhir tidak termasuk).
console.log(text.slice(0, -13)); // output - aku adalah

// substring() - persis dengan slice(), perbedaannya substring tidak menerima -indeks
// Jika parameter kedua dihapus, substring() akan memotong sisa string.
console.log(text.substring(11));

// substr() - Perbedaannya adalah bahwa parameter kedua menentukan panjang bagian yang diekstraksi
console.log(text.substr(0, 10));

// replace() - menggantikan nilai string yang sebelumnya sudah ditentukan
// parameter pertama untuk menentukan string yang akan diganti
// parameter kedua yang akan mengganti string sebelumnya, / /i insensitive
console.log(text.replace(/MiCroSoFt/, "orangtuaku"));

// trim() - untuk menghapus whitespace sisi kiri/kanan antara text
const example = "   aku    ";
console.log(example.trim());
