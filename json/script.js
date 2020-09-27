// let mahasiswa = {
//   nama: "Mia Rusmiati",
//   nik: "32720230025",
//   email: "rusmiatim973@gmail.com",
// };

// console.log(JSON.stringify(mahasiswa));

// let mrs = new XMLHttpRequest();
// mrs.onreadystatechange = function () {
//   if (mrs.readyState == 4 && mrs.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// };
// mrs.open("GET", "coba.json", true);
// mrs.send();

$.getJSON("coba.json", function (data) {
  console.log(data);
});
