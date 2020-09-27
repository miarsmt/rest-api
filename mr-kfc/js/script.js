function tampilkanSemuaMenu() {
  $.getJSON("data/kfc.json", function (result) {
    let menu = result.menu;
    //   console.log(menu);
    $.each(menu, function (i, result) {
      $("#daftar-menu").append(
        '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          result.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          result.nama +
          '</h5><p class="card-text">' +
          result.deskripsi +
          '</p><h5 class="card-title">Rp. ' +
          result.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      );
    });
  });
}

tampilkanSemuaMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  console.log(kategori);
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    tampilkanSemuaMenu();
    return;
  }

  $.getJSON("data/kfc.json", function (result) {
    let menu = result.menu;
    let content = "";

    $.each(menu, function (i, result) {
      if (result.kategori == kategori) {
        content +=
          '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          result.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          result.nama +
          '</h5><p class="card-text">' +
          result.deskripsi +
          '</p><h5 class="card-title">Rp. ' +
          result.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
      }
    });

    $("#daftar-menu").html(content);
  });
});
