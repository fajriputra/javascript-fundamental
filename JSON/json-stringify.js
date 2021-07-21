const myObj = { text: "convert javascript object to string" };

const outputMyObj = JSON.stringify(myObj);

console.log(outputMyObj); // output sebagai string

// lalu gimana kalo mau ambil key text nya?
// ya kita parse dulu string diatas jadi text biasa

const parse = JSON.parse(outputMyObj);

console.log(parse.text);

// Array to string
const arrObj = ["Fajri", "Putra", "Pratama"];

console.log(arrObj); // sebelum diubah (array)

const arrToString = JSON.stringify(arrObj);

console.log(arrToString); // setelah diubah (string)

// lalu kita hanya ingin menampilkan 1 dari ketiga array diatas, gimana?
// ya kita ubah kebentuk array lagi supaya bisa diambil berdasarkan index

const backToArr = JSON.parse(arrToString); // kembali kebentuk array

console.log(backToArr[2]);

// menyimpan data ke localStorage
const obj = {
  name: "Fajri",
  age: 20,
};
// ubah object ke string
const objToString = JSON.stringify(obj);
// set key storage nya mau dinamain apa?
localStorage.setItem("example", objToString);

// ambil data yang baru disimpan tadi
const take = localStorage.getItem("example");

// kita ubah lagi kebentuk object
const objStore = JSON.parse(take);

console.log(objStore.name + "\n" + objStore.age);
