// Realice una solicitud PATCH para modificar únicamente un campo específico de esa publicación.

const updatePost = async (postId, newBody) => {
    fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            body: newBody,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
};

export { updatePost };