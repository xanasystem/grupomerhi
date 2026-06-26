/* ===========================================================
   Grupo Merhi — JS
   Mínimo por ahora. Aquí se configuran los destinos de cada
   empresa en un único sitio. Cambia las URLs cuando las tengas.
   =========================================================== */
(function () {
  "use strict";

  // Nombre exacto del enlace -> URL de destino ("" = todavía sin web)
  var URLS = {
    "AVGD": "https://avgd.eu/",
    "Magna Cerámica": "https://www.magnaceramica.es/",
    "Decker": "",
    "H Mosaics": "https://htilesmosaics.com/"
  };

  document.querySelectorAll(".company").forEach(function (link) {
    var name = link.querySelector("span").textContent.trim();
    var url = URLS[name];
    if (url) {
      link.href = url;
    } else {
      // Sin web por ahora: no navega, pero se ve igual que los demás
      link.removeAttribute("target");
      link.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  });
})();
