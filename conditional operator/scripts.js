// if else
const kata = "test";

if (kata.length > 0) {
  console.log(kata);
} else {
  console.log("kosong neeeeee");
}

// ternary operator
const ternary = kata !== "fajri" ? "tidak sama" : kata;
console.log(ternary);

// short-circuit evaluation
const user = {
  nama: "fajri",
  work: null,
};
console.log((user.work && "sudah kerja ya") || "pengangguran");

// Nullish coalescing
console.log(user.work ?? "pengangguran");
