// Realice una solicitud GET general y compare la estructura de la respuesta con las solicitudes anteriores, identificando cambios y comportamientos del servicio.

export const generalGet = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000");

        const datos = await respuesta.json()

        return datos
    }
    catch(error) {
        console.error("Error al obtener datos: ", error)
    }
}