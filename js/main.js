/* ===========================================================
   Grupo Merhi — JS
   Mínimo por ahora. Aquí se configuran los destinos de cada
   empresa en un único sitio. Cambia las URLs cuando las tengas.
   =========================================================== */
(function () {
  "use strict";

  // Nombre exacto del enlace -> URL de destino
  var URLS = {
    "AVGD": "#",
    "Magna Cerámica": "#",
    "Decker": "#",
    "H Mosaics": "#"
  };

  document.querySelectorAll(".company").forEach(function (link) {
    var name = link.querySelector("span").textContent.trim();
    if (URLS[name] && URLS[name] !== "#") {
      link.href = URLS[name];
    }
  });
})();
