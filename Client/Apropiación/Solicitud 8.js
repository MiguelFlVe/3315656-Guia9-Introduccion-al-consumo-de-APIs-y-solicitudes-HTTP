// • Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.

const borrarPost = async (id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/posts/${id}`,{
           method: 'DELETE'
        });

        if(!respuesta.ok) {
            throw new Error("Error al eliminar el post");
            
        }
        return respuesta

   }catch(error){
        console.error(error.message)

   }
}