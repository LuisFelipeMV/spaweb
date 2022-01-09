var datos = new Array();
var datos_usuario = new Array();

function guardar_datos_usuario(nombre, apellido, email, telefono, direccion,cedula) {
    datos_usuario = new Array(nombre, apellido, email, telefono, direccion, cedula);
    localStorage.setItem("datos_usuario", JSON.stringify(datos_usuario));
}

function obtener_datos_usuario() {
    var datos_usuario = JSON.parse(localStorage.getItem("datos_usuario"));
    return datos_usuario;
}

function login(email, cedula){
    var datos_usuario = JSON.parse(localStorage.getItem("datos_usuario"));
    if(datos_usuario != null){
        if(datos_usuario[2] == email && datos_usuario[5] == cedula){
            return true;
       }
    }
    return false;
}

function logOut(){
    document.location.href = "login.html"
}

