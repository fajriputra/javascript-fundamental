const optChaining = {
  name: "fajri",
  address: {
    street: "Jl. Prof. Dr. Hamka",
    no: 74,
    city: "Tangerang",
  },
  hobby: ["Tidur", "Makan", "Main"],
};

console.log("Nama: " + optChaining?.["name"]);
console.log("Jalan: " + optChaining?.["address"]?.["street"]);
console.log("No. Rumah: " + optChaining?.["address"]?.["no"]);
console.log("City: " + optChaining?.["address"]?.["city"]);
console.log("Hobby: " + optChaining?.["hobby"].join(" * "));
console.log("Pacar: " + optChaining?.["pacar"]);
