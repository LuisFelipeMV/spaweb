var datos = new Array();
var datos_usuario = new Array();

function guardar_datos_usuario(nombre, apellido, email, telefono, direccion,cedula) {
    datos_usuario = new Array(nombre, apellido, email, telefono, direccion, cedula);
    datos_usuario = JSON.stringify(datos_usuario)
    datos = new Array();
    if(localStorage.getItem("datos_usuario")!=null){
        datos = localStorage.getItem("datos_usuario");
    }
    datos += datos_usuario+"|";
    localStorage.setItem("datos_usuario", datos);
}

function obtener_datos_usuario() {
    var datos_usuario = localStorage.getItem("datos_usuario");
    var midato = datos_usuario.split("|");
    return midato;  
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

