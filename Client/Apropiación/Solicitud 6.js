export const actualizarPublicacion = async (id, actualizarPost) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/posts/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(actualizarPost)
        });

        const datos = await respuesta.json();
        return datos
        
  } catch(error) {
    console.error("Error al actualizar", error)
  }
};