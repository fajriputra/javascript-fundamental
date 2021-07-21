const myJSON = '{"name": "convert text to a Javascript Object"}';

const value = JSON.parse(myJSON);

console.log(value); // output sebagai object
console.log(value.name); // output hanya menampilkan value dari name
