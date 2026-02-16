document.addEventListener('DOMContentLoaded', function() {
    // Obtén los elementos de enlace por sus IDs
    var enlaceUbicacion1 = document.getElementById('ubicacion1');
    var enlaceUbicacion2 = document.getElementById('ubicacion2');
    var enlaceUbicacion3 = document.getElementById('ubicacion3');

    // Agregar un evento de clic a cada enlace
    enlaceUbicacion1.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Mano+Del+Artesano");
    });

    enlaceUbicacion2.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Dirección+de+la+ubicación+2");
    });

    enlaceUbicacion3.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Dirección+de+la+ubicación+3");
    });

    // Función para obtener la ubicación y abrir Google Maps
    function obtenerUbicacionYAbrirMapa(destino) {
        if ("geolocation" in navigator) {
            // Obtener la ubicación del usuario
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitud = position.coords.latitude;
                var longitud = position.coords.longitude;
                var puntoInicio = latitud + "," + longitud;

                abrirGoogleMaps(destino, puntoInicio);
            }, function(error) {
                console.error("Error al obtener la ubicación del usuario:", error);
            });
        } else {
            console.error("La geolocalización no está disponible en este navegador.");
        }
    }

    // Función para abrir Google Maps
    function abrirGoogleMaps(destino, puntoInicio) {
        var urlMaps = "https://www.google.com/maps/dir/" + puntoInicio + "/" + destino;
        window.open(urlMaps);
    }
});
