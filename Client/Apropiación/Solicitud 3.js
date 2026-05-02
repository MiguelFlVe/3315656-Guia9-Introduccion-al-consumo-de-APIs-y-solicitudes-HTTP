// Realice una solicitud GET para obtener todas las publicaciones (posts) asociadas a un usuario determinado.

export const postsDisponibles = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000/posts");
        const datos = await respuesta.json()

        return datos
    }
    catch(error) {
        console.error("Error al obtener publicaciones: ", error)
    }
};