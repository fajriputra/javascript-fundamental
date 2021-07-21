const arrs = {
  name: "fajri",
  age: 20,
  hobby: ["Programming", "Tidur", "Makan"],
};

console.log(arrs);

// akses array of object gimana ni?
// ya gini aja
console.log(arrs?.hobby[0]);
// cek sesuai kondisi, lalu tampilkan
console.log(arrs?.hobby[1] !== arrs?.hobby[0] ? "Boong" : arrs?.hobby[0]);
