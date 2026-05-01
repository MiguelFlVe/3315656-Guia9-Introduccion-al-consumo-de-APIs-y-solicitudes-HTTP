// Antes de eliminar una publicación, el sistema debe validar si dicha publicación tiene comentarios asociados. Si tiene comentarios, no debe eliminarse; de lo contrario, puede proceder.

const deletePostVerifyComments = async (pId) => {
    const response = await fetch(`http://localhost:3000/comments?postId=${pId}`);

    const comments = await response.json();

    if (comments.length > 0) {
        console.log(`No se puede eliminar la publicación con ID ${pId} porque tiene comentarios asociados.`);
        
        return;
    }

    const deleteResponse = await fetch(`http://localhost:3000/comments/${pId}`, {
        method: 'DELETE'
    })
};

export { deletePostVerifyComments };