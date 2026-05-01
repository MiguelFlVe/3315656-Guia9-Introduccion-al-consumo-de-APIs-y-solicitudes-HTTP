export const verPublicaciones = async () => {
    const response = await fetch("http://localhost:3000/posts");
    return response.json();
};

export const verComentarios = async () => {
    const response = await fetch("http://localhost:3000/comments");
    return response.json();
};

export const postsConComentarios = async () => {
    try {
        console.log("Publicaciones y sus comentarios:\n");

        const posts = await verPublicaciones();
        const comments = await verComentarios();

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            let contador = 0;

            for (let j = 0; j < comments.length; j++) {
                if (comments[j].postId === post.id) {
                    contador++;
                }
            }

            const estado = contador > 0 ? "Con comentarios" : "Sin comentarios";

            console.log(`${post.title}`);
            console.log(`${contador} comentarios`);
            console.log(`Estado: ${estado}\n`);
        }

    } catch (error) {
        console.error("Error:", error);
    }
};