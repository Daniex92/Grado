function calcularOpciones() {
    // Obtener respuestas del usuario
    var personas = parseInt(document.getElementById("personas").value);
    var dinero = parseInt(document.getElementById("dinero").value);
    var dias = parseInt(document.getElementById("dias").value);
    var vehiculo = document.querySelector('input[name="vehiculo"]:checked').value;
    var almorzar = document.querySelector('input[name="almorzar"]:checked').value;

    // Inicializar opciones y costo total
    var opciones = [];
    var costoTotal = 0;

    // Calcular costo de transporte por persona
    var costoTransporte = personas * 7000;

    // Condicionales para posibles respuestas
    if (vehiculo === "No") {
        costoTotal += costoTransporte;
    }

    if (dias > 1) {
        opciones.push("Puedes considerar el hospedaje mínimo de $80,000 por noche en pareja.");
        costoTotal += 80000 * (dias - 1);
    }

    // Función para agregar una opción de visita si hay suficiente presupuesto
    function agregarOpcion(opcion, costo) {
        if (dinero >= costo) {
            opciones.push(opcion);
            costoTotal += costo;
        }
    }

    agregarOpcion("Puedes visitar la Mano del Artesano por $10,000 por persona.", 10000 * personas);
    agregarOpcion("Puedes visitar el Monasterio de la Candelaria por $15,000 por persona.", 15000 * personas);
    agregarOpcion("Puedes visitar XuéXue por $5,000 por persona.", 5000 * personas);
    agregarOpcion("Puedes visitar Finca Beraca por $10,000 por persona.", 10000 * personas);

    if (almorzar === "Si") {
        agregarOpcion("Puedes almorzar en Raquira por $18,000 por persona.", 18000 * personas);
    }

    // Mostrar resultados
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h2>Opciones de Viaje:</h2>";
    if (opciones.length === 0) {
        resultadosDiv.innerHTML += "<p>No hay opciones disponibles con tus respuestas.</p>";
    } else {
        resultadosDiv.innerHTML += "<ul>";
        opciones.forEach(function (opcion) {
            resultadosDiv.innerHTML += "<li>" + opcion + "</li>";
        });
        resultadosDiv.innerHTML += "</ul>";
        resultadosDiv.innerHTML += "<p>Costo Total del Viaje: $" + costoTotal + "</p>";
        if (costoTotal > dinero) {
            resultadosDiv.innerHTML += "<p>El costo total supera tu presupuesto.</p>";
        }
    }
}
