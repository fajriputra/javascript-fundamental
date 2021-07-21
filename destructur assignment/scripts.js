const makanan = ["Nasi Goreng", "Ayam Goreng", "Ayam Bakar"];
// Array destructuring & Spread Operator
const [...all] = makanan;

console.log(all);

const userA = {
  nama: "mahmud",
  age: 20,
  gender: "pria tampan",
};
// Object Destructuring & Spread Operator
const { ...user } = userA;
console.log(user);
