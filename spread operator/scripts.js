// spread operator - fitur yang digunakan untuk melakukan pemecahan atau ekstraksi item pada suatu array atau string atau objek.
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

const string = "spread operator";
console.log(...string);

const makanan = ["Nasi Goreng", "Pecel Lele", "Ayam Goreng"];
console.log(...makanan);

console.log(...arr1, ...arr2);

// Object Concat
const user = { username: "fajrip", email: "ff@gmail.com" };
const profile = { name: "fajri putra", city: "tangerang" };
// const userProfile = Object.assign(user, profile);

// menggunakan spread
const userProfile = { ...user, ...profile };
console.log(userProfile);

// mengcopy array ke variabel lain
const other = { name: "fajri" };

// menggunakan object
const copy = Object.assign({}, other);

const copy2 = { ...other };

console.log(copy2);
