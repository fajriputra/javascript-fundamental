// Synchronous dan asynchronous adalah istilah dalam dunia programming untuk menyebut urutan eksekusi suatu kode program.

// Secara umum urutan eksekusinya adalah dari atas ke bawah atau kode-kode yang ditulis di awal akan dieksekusi terlebih dahulu.

// console.log("dua") akan di eksekusi terlebih dulu tanpa menunggu console.log("satu") selesai, dikarnakan mempunyai timeout 1detik tertunda.

// setTimeout(() => {
//   console.log("satu");
// }, 1000);

// console.log("dua");

// METHOD ASYNCHRONUS

// callback function
const greeting = (user, callback) => {
  setTimeout(() => {
    callback(`Selamat Datang ${user} !`);
  }, 2000);
};

greeting("Fajri", (cb) => console.log(cb));
console.log("Hallo");

// Promise
// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

// promise
//   .then((response) => response.json())
//   .then((json) => document.writeln(JSON.stringify(json)))
//   .catch((error) => alert(error));

// document.writeln("loading...");

// Async & await

const load = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    document.writeln(JSON.stringify(json));
  } catch (error) {
    document.writeln(error);
  }
};

load();
document.writeln("loading...");
