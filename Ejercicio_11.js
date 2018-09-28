var users = [];
function AgregarRegistro(nombre, apellido,fechaNacim,numero,correo){
    let usuario = {
        nombre,
        apellido,
        fechaNacim,
        numero,
        correo,
    }
    users.push(usuario);
}