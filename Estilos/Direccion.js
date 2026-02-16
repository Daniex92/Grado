document.addEventListener('DOMContentLoaded', function() {
    // IDs de sitios turisticos
    var enlaceUbicacion1 = document.getElementById('ubicacion1');
    var enlaceUbicacion2 = document.getElementById('ubicacion2');
    var enlaceUbicacion3 = document.getElementById('ubicacion3');
    var enlaceUbicacion4 = document.getElementById('ubicacion4');
    var enlaceUbicacion5 = document.getElementById('ubicacion5');
    var enlaceUbicacion6 = document.getElementById('ubicacion6');
    var enlaceUbicacion7 = document.getElementById('ubicacion7');
    var enlaceUbicacion8 = document.getElementById('ubicacion8');
    var enlaceUbicacion9 = document.getElementById('ubicacion9');
    var enlaceUbicacion10 = document.getElementById('ubicacion10');
    var enlaceUbicacion11 = document.getElementById('ubicacion11');
    var enlaceUbicacion12 = document.getElementById('ubicacion12');
    // IDs Hoteles
    var enlaceHotel1 = document.getElementById('hotel1')
    var enlaceHotel2 = document.getElementById('hotel2')
    var enlaceHotel3 = document.getElementById('hotel3')
    var enlaceHotel4 = document.getElementById('hotel4')
    var enlaceHotel5 = document.getElementById('hotel5')
    var enlaceHotel6 = document.getElementById('hotel6')
    var enlaceHotel7 = document.getElementById('hotel7')
    var enlaceHotel8 = document.getElementById('hotel8')
    //IDs Restaurantes
    var enlaceRestaurante1 = document.getElementById('restaurante1');
    var enlaceRestaurante2 = document.getElementById('restaurante2');
    var enlaceRestaurante3 = document.getElementById('restaurante3');
    var enlaceRestaurante4 = document.getElementById('restaurante4');
    var enlaceRestaurante5 = document.getElementById('restaurante5');
    var enlaceRestaurante6 = document.getElementById('restaurante6');
    var enlaceRestaurante7 = document.getElementById('restaurante7');
    var enlaceRestaurante8 = document.getElementById('restaurante8');
    

      
    // Eventos Sitios Turisticos
    enlaceUbicacion1.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Puente+de+las+Ánimas,+Ráquira,+Boyacá");
    });

    enlaceUbicacion2.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.538787686744208, -73.63293574021702");
    });

    enlaceUbicacion3.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Glamping+Finca+Beraca+Ráquira+Boyacá");
    });
    enlaceUbicacion4.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Mano del Artesano, Resguardo Oriente, Ráquira, Boyacá");
    });
    enlaceUbicacion5.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.533708957950722, -73.62784327408768");
    });
    enlaceUbicacion6.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Olla Gigante Muisca, Ráquira, Boyacá");
    });
    enlaceUbicacion7.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.526895767991923, -73.65075109489678");
    });
    enlaceUbicacion8.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.556332722194618, -73.6194383622267");
    });
    enlaceUbicacion9.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Parque Principal Raquira, Ráquira, Boyacá");
    });
    enlaceUbicacion10.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Monasterio La Candelaria, Ráquira, Boyacá");
    });
    enlaceUbicacion11.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("Patio De Brujas, Ráquira, Boyacá");
    });
    enlaceUbicacion12.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.514401769853399, -73.60551794055523");
    });
    // Eventos Hoteles
    enlaceHotel1.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.5472912944431565, -73.62471887594187")
    })
    enlaceHotel2.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.539186856699705, -73.63410895701502")
    })
    enlaceHotel3.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.536859936039949, -73.63304183731852")
    })
    enlaceHotel4.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.548233114104864, -73.6369713490288")
    })
    enlaceHotel5.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.520439102707534, -73.60573803830978")
    })
    enlaceHotel6.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.541788041237934, -73.600392695091")
    })
    enlaceHotel7.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.538876366040847, -73.63289538510281")
    })
    enlaceHotel8.addEventListener('click', function(event) {
        event.preventDefault();
        obtenerUbicacionYAbrirMapa("5.521850970249439, -73.63205106287127")
    })
    //Evento Restaurante
    enlaceRestaurante1.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.538385440178043, -73.63276118720505")
    })
    enlaceRestaurante2.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.538218063114687, -73.63332870745047")
    })
    enlaceRestaurante3.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.538912005039854, -73.63273982919473")
    })
    enlaceRestaurante4.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.538432420364658, -73.63252842098494")
    })
    enlaceRestaurante5.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.53863090413441, -73.63287732210033")
    })
    enlaceRestaurante6.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.538713114160959, -73.63294875727674")
    })
    enlaceRestaurante7.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.538470046340369, -73.6323440913198")
    })
    enlaceRestaurante8.addEventListener('click', function(event){
        event.preventDefault()
        obtenerUbicacionYAbrirMapa("5.538876366040847, -73.63289538510281")
    })

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
