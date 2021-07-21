const abjad = ["a", "b", "c"];
const abjad2 = ["f", "g", "h"];
const abjad3 = ["i", "j", "k"];

// toString()
// console.log(hobby.toString());

// join() - menggabungkan semua elements array to string
console.log(abjad.join(" - "));

// pop() - menghapus elements akhir dari array
// abjad.pop();
// console.log(abjad);

// push() - menambah elements akhir dari array
// abjad.push("Main");
// console.log(abjad);

// shift() - sama dengan pop(), tetapi shift menghapus elements awal
// abjad.shift();
// console.log(abjad);

// unshift() - mengganti/mengembalikan elements yang telah dihapus sebelumnya & array baru
// abjad.unshift("Coding");
// console.log(abjad);

// splice() - menambahkan elements baru ke array sesuai posisi/index yang ditentukan
// parameters pertama kita akan mendifinisikan posisi dimana akan diletakan elements baru
// parameters kedua menentukan elements yang akan dihapus
abjad.splice(3, 0, "d", "e");
console.log(abjad);

// concat() - menggabungkan dua buah array
const newAbjad = abjad.concat(abjad2, abjad3);
console.log(newAbjad);

// slice() - menghapus elements array
const sliceAbjad = newAbjad.slice(1, 6);
console.log(sliceAbjad);
