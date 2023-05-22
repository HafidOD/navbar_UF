(function () {
  var navH = document.getElementById("primary-menu");

  var subMenuMarcas = document.getElementById("suballmarcas");
  const menuMarcas = document.querySelector(".menu-marcas2 a");

  var subH = document.getElementById("sub");
  const subMenu = document.querySelector(".menu-marcas1 a");

  // var menuSkincare = document.getElementById('skincare')
  var subMenuSkincare = document.getElementById("sub-skincare");
  const menuSkincare = document.querySelector(".menu-skincare2 a");

  var subMenuHaircare = document.getElementById("sub-haircare");
  const menuHaircare = document.querySelector(".menu-haircare2 a");

  //var menuMaquillaje = document.getElementById('maquillaje')
  var subMenuMaquillaje = document.getElementById("sub-maquillaje");
  const menuMaquillaje = document.querySelector(".menu-maquillaje2 a");

  var seachContainer = document.getElementById("seach-container");
  var seachContainerLg = document.getElementById("seach-container-lg");
  var searchNeo = document.getElementById("search-H");
  var searchNeoLg = document.getElementById("search-H-lg");
  var closeSearch = document.getElementById("close-seach");
  var closeSearchLg = document.getElementById("close-seach-lg");

  const hamburguesa = document.querySelector(".menu-activador a");

  hamburguesa.addEventListener("click", function (event) {
    event.preventDefault();
    this.classList.toggle("menu-abierto");
    navH.classList.toggle("db-important");
  });

  subMenu.addEventListener("click", function (event) {
    event.preventDefault();
    subH.classList.toggle("sub-menu-H-action");
  });
  menuSkincare.addEventListener("click", function (event) {
    event.preventDefault();
    subMenuSkincare.classList.toggle("sub-menu-H-action");
  });
  menuHaircare.addEventListener("click", function (event) {
    event.preventDefault();
    subMenuHaircare.classList.toggle("sub-menu-H-action");
  });
  menuMaquillaje.addEventListener("click", function (event) {
    event.preventDefault();
    subMenuMaquillaje.classList.toggle("sub-menu-H-action");
  });
  menuMarcas.addEventListener("click", function (event) {
    event.preventDefault();
    subMenuMarcas.classList.toggle("sub-menu-H-action");
  });

  searchNeo.addEventListener("click", function (event) {
    event.preventDefault();
    seachContainer.classList.toggle("seach-content");
  });
  searchNeoLg.addEventListener("click", function (event) {
    event.preventDefault();
    seachContainerLg.classList.toggle("seach-content");
  });
  closeSearch.addEventListener("click", function (event) {
    event.preventDefault();
    seachContainer.classList.toggle("seach-content");
  });
  closeSearchLg.addEventListener("click", function (event) {
    event.preventDefault();
    seachContainerLg.classList.toggle("seach-content");
  });



})();