let users = [
  { id: 1, name: "Albert", gender: "male" },
  { id: 2, name: "Romy", gender: "male" },
  { id: 3, name: "Shinta", gender: "female" },
  { id: 4, name: "Hendra", gender: "male" },
  { id: 5, name: "Fenny", gender: "female" },
  { id: 6, name: "Desta", gender: "male" },
];

// iteration dengan map
// map() - digunakan untuk memetakan suatu array dan melakukan operasi tertentu pada setiap itemnya kemudian mengembalikan array baru.
const output = users.map((item) => {
  const nameLowerCase = item.name.toLowerCase();
  const genderLowerCase = item.gender.toLowerCase();

  return { name: nameLowerCase, gender: genderLowerCase };
});

const result = document.getElementById("demo");

result.innerHTML = output.map((opt) => {
  return `<div style="text-align:center">nama: ${opt.name}, gender: ${opt.gender}</div>`;
});

// filter() - digunakan untuk mem-filter atau menyaring suatu array. dan sifatnya immutable
const filtering = output.filter((item) => item.gender === "male");

console.log(filtering);

const cart = [
  { id: 1, name: "buku", qty: 5, price: 7000 },
  { id: 2, name: "pensil", qty: 2, price: 4000 },
  { id: 3, name: "rautan", qty: 1, price: 2000 },
];

const totalBelanja = cart.reduce((acc, item) => {
  return acc + item.qty * item.price;
}, 0);

console.log(totalBelanja);
