$( document ).ready(function() {
    var datos_usuario = JSON.parse(localStorage.getItem("datos_usuario"));
    document.getElementById("Bienvenida").innerHTML = "Bienvenido al spa web, "+datos_usuario[0];
});