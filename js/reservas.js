

function mostrar_reservas(){
    var datos_reserva = localStorage.getItem("datos_reserva");
    var midato = datos_reserva.split("|");
    var tabla = document.getElementById("tabla_reservas");
    var fila = tabla.insertRow(1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);
    celda1.innerHTML = midato[0];
    celda2.innerHTML = midato[1];
    celda3.innerHTML = midato[2];
    celda4.innerHTML = midato[3];
    celda5.innerHTML = midato[4];
    celda6.innerHTML = midato[5];
}
