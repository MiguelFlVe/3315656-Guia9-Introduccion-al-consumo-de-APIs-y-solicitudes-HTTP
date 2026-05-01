//Solicitud 2: Realice una solicitud GET para consultar la información de un usuario específico, utilizando su identificador.

export const UsuarioId = async (id) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/users/${id}`);

    if (!respuesta.ok) {
      throw new Error("No se pudo obtener el usuario");
    }

    const datos = await respuesta.json();
    return datos;

  } catch (error) {
    console.log("Error:", error.message);
  }
};