users = [];
while (true) {
    var opcion = prompt("1-Crear usuario\n2-Buscar usuario\n3-Modificar persona\n4-Eliminar persona\n5-Mostrar personas\n6-Salir")

    if (opcion == 1) {
        agregarRegistro(prompt("nombre"), prompt("apellido"), prompt("fechaNacim"), prompt("numero"), prompt("correo"));
    }
    else if (opcion == 2) {
        let nombre = prompt("nombre");
        let apellido = prompt("apellido");
        buscarRegistro(nombre, apellido);
    }
    else if (opcion == 3) {
        modificarRegistro();
    } else if (opcion == 4) {
        let nombre = prompt("nombre");
        let apellido = prompt("apellido");
        eliminarRegistro(nombre, apellido);
    } else if (opcion == 5) {
        mostrarPersonas();
    }
    else if (opcion == 6) {
        alert("Ha salido del programa");
        break;
    }
}

function agregarRegistro(nombre, apellido, fechaNacim, numero, correo) {
    let usuario = {
        nombre,
        apellido,
        fechaNacim,
        numero,
        correo,
    }
    users.push(usuario);
}

function buscarRegistro(nombre, apellido) {
    for (let i of users) {
        if (nombre == i.nombre && apellido == i.apellido) {
            let mensaje = "";
            mensaje = mensaje + "Nombre: " + i.nombre + "\n";
            mensaje = mensaje + "Apellido: " + i.apellido + "\n";
            mensaje = mensaje + "Fecha de Nacimiento: " + i.fechaNacim + "\n";
            mensaje = mensaje + "Teléfono: " + i.numero + "\n";
            mensaje = mensaje + "Correo: " + i.correo + "\n";
            alert(mensaje);
        }
    }
    return "No se ha encontrado el usuario";
}

function modificarRegistro() {
    var buscar = prompt("Ingrese el nombre del usuario que desea buscar para eliminar");
    var encontrado;
    for (let i of users) {
        if (i.nombre == buscar) {
            console.log(i);
            encontrado = true;
            var opc = prompt("1-mod nombre\n2-mod apellido\n3-mod fechaNacim\n4-mod numero\n5-mod correo")
            if (opc == 1) {
                var nuevovalor = prompt("Ingrese el nuevo nombre para el usuario");
                i.nombre = nuevovalor;
            } else if (opc == 2) {
                var nuevovalor = prompt("Ingrese el nuevo nombre para el usuario");
                i.apellido = nuevovalor;

            } else if (opc == 3) {
                var nuevovalor = prompt("Ingrese el nuevo nombre para el usuario");
                i.fechaNacim = nuevovalor;

            } else if (opc == 4) {
                var nuevovalor = prompt("Ingrese el nuevo nombre para el usuario");
                i.numero = nuevovalor;

            } else if (opc == 5) {
                var nuevovalor = prompt("Ingrese el nuevo nombre para el usuario");
                i.correo = nuevovalor;
            }
        } else {
            encontrado = false;
        }
    }
    if (encontrado == false) {
        alert("Usuario no encontrado");
    }
}


function eliminarRegistro(nombre, apellido) {
    for (let i of users) {
        if (nombre == i.nombre && apellido == i.apellido) {
            users.pop(nombre, apellido);
            alert("Ha eliminado un registro");
        }
    }
    return "No se ha encontrado a la persona que desea eliminar";
}

function mostrarPersonas() {
    alert("Mostrando todos los usuarios");
    for (let i of users) {
        let mensaje = "";
        mensaje = mensaje + "Nombre: " + i.nombre + "\n";
        mensaje = mensaje + "Apellido: " + i.apellido + "\n";
        mensaje = mensaje + "Fecha de Nacimiento: " + i.fechaNacim + "\n";
        mensaje = mensaje + "Teléfono: " + i.numero + "\n";
        mensaje = mensaje + "Correo: " + i.correo + "\n";
        alert(mensaje);
    }
}
