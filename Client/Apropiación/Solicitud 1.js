// • Solicitud 1: Realice una solicitud GET para obtener la lista completa de usuarios disponibles
// en el servicio.

export const UsuariosDisponibles = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000/users");
        const datos = await respuesta.json()

        return datos
    }
    catch(error) {
        console.error("Error al obtener usuarios: ", error)
    }
}