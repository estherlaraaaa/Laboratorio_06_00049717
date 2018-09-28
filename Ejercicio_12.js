users = [];
while (true){
    var opcion = prompt("1-Crear usuario\n2-Buscar usuario\n3-Modificar persona")

    if (opcion == 1){
        agregarRegistro(prompt("nombre"),prompt("apellido"),prompt("fechaNacim"),prompt("numero"),prompt("correo"));
    }
    else if (opcion == 2) {
        let nombre = prompt("nombre");
        let apellido = prompt("apellido");
        buscarRegistro(nombre,apellido);
    }
    else if (opcion == 3){
        let nombre = prompt("nombre");
        let apellido = prompt("apellido");
        modificarRegistro(nombre,apellido);    
    }
    else if (opcion == 4) break;
}

function agregarRegistro(nombre, apellido,fechaNacim,numero,correo){
    let usuario = {
        nombre,
        apellido,
        fechaNacim,
        numero,
        correo,
    }
    users.push(usuario);
}

function buscarRegistro(nombre, apellido){
    for (let i of users){
        if (nombre == i.nombre && apellido == i.apellido)
        console.log(i);
        return i;
    }
}

function modificarRegistro(nombre, apellido, datoAmodif, valor){
    let user= buscarRegistro(nombre,apellido);
    user.datoAmodif = valor;
}