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
    // localStorage.removeItem("datos_usuario") descomentar para borrar datos de usuario
    var datos_usuario = localStorage.getItem("datos_usuario");
    var midato = datos_usuario.split("|");
    console.log(midato)
    if(midato != null){
        for(var i = 0; i < midato.length; i++){
            midato[i] = JSON.parse(midato[i])
            if(midato[i][2] == email && midato[i][5] == cedula){
                return midato[i]
            }
        }
    }
    return false;
}

function logOut(){
    document.location.href = "login.html"
}

