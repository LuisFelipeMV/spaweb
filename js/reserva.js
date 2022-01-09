var valor_aPagar = 0
//VARIABLES DE PRECIO DE MASAJES
var MasajeN = 9.99;
var MasajeV = 14.99;
//VARIABLES DE PRECIO DE DEPILACIONES
var DepilacionN = 14.99
var DepilacionV = 19.99
//VARIABLES DE PRECIO DE FACIAL
var FacialN = 19.99
var FacialV = 24.99

function Registrar_reserva(servicio, tipo_servicio, fecha, horario, sucursal, total){
    datos_reserva = new Array (servicio, tipo_servicio, fecha, horario, sucursal, total)
    localStorage.setItem("datos_reserva", JSON.stringify(datos_reserva));
}

function obtener_datos_reserva() {
    var datos_reserva = JSON.parse(localStorage.getItem("datos_reserva"));
    return datos_reserva;
}

function Precio(servicio,tipo_servicio){
    if(tipo_servicio == "Normal"){
        if(servicio == "Masaje"){
            valor_aPagar = MasajeN + (MasajeN*0.12)
            return valor_aPagar

        }else if (servicio == "Depilacion"){
            valor_aPagar = DepilacionN + (DepilacionN*0.12)
            return valor_aPagar

        }else if (servicio == "Facial"){
            valor_aPagar = FacialN + (FacialN*0.12)
            return valor_aPagar
        }

    }else if(tipo_servicio == "VIP"){
        if(servicio == "Masaje"){
            valor_aPagar = MasajeV + (MasajeV*0.12)
            return valor_aPagar

        }else if (servicio == "Depilacion"){
            valor_aPagar = DepilacionV + (DepilacionV*0.12)
            return valor_aPagar

        }else if (servicio == "Facial"){
            valor_aPagar = FacialV + (FacialV*0.12)
            return valor_aPagar

        }
    }
}