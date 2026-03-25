function irPantalla(idPantalla) {

    // Ocultar todas las pantallas
    let pantallas = document.querySelectorAll(".screen");
    pantallas.forEach(p => p.classList.add("oculto"));

    // Mostrar la pantalla seleccionada
    document.getElementById(idPantalla).classList.remove("oculto");
}
