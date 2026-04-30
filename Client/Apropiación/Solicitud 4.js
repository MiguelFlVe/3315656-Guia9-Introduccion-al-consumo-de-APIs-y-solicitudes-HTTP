//• Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
//usuario existente.

export const crearPost = async (userId, title, body) => {
    try {
        const respuesta = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                title,
                body,
            }),
        });

        if (!respuesta.ok) {
            throw new Error("No se pudo crear el post");
        }

        return await respuesta.json();
    } catch (error) {
        console.log("Error:", error.message);
    }
};
