// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
// respuesta obtenida.

export const verificarPost = async (id) => {
    try {

        const respuesta = await fetch(`http://localhost:3000/posts/${id}`);

        if(!respuesta.ok){
          console.error("El recurso no existe o fue eliminado")
               }

        const datos = await respuesta.json()
        return datos  } 
    catch(error) {
        console.error("Error al verificar el post", error)
    };   
      
};