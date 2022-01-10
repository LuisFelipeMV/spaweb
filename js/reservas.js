
$( document ).ready(function() {
    var datos_reserva = localStorage.getItem("datos_reserva");
    var midato = datos_reserva.split("|");
    var tabla = document.getElementById("tabla_reservas");
    
    if(midato != null){
        for(var i = 0; i < midato.length; i++){
            midato[i] = JSON.parse(midato[i])
            var fila = tabla.insertRow(1);
            var celda1 = fila.insertCell(0);
            var celda2 = fila.insertCell(1);
            var celda3 = fila.insertCell(2);
            var celda4 = fila.insertCell(3);
            var celda5 = fila.insertCell(4);
            var celda6 = fila.insertCell(5);
            celda1.innerHTML = midato[i][0];
            celda2.innerHTML = midato[i][1];
            celda3.innerHTML = midato[i][2];
            celda4.innerHTML = midato[i][3];
            celda5.innerHTML = midato[i][4];
            celda6.innerHTML = midato[i][5];
            
        }
    }
    
});
