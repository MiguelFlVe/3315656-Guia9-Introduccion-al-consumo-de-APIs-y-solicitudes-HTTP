// Realice una solicitud POST para registrar un nuevo comentario relacionado con una publicación.

const newComment = async (postid, title, body) => {
    const postcomment = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        body: JSON.stringify({
            postId: Number(postid),
            title: `${title}`,
            body: `${body}`,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        });

    const respuesta = await postcomment.json();

    return respuesta;
};

export { newComment };