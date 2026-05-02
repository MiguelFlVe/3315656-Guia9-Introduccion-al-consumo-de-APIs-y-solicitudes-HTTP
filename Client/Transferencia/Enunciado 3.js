// Enunciado 3: (Búsqueda específica de información)
// Un usuario del sistema desea consultar información puntual sobre una publicación
// específica y conocer si existe interacción asociada a ella.
// Requerimientos:
// • Consultar todas las publicaciones.
// • Buscar una publicación específica por su identificador.
// • Consultar los comentarios relacionados con esa publicación.
// • Validar si existen o no comentarios asociados.
// Datos de entrada:

// GFPI-F-135 V04

// • ID de la publicación a consultar
// • Endpoint de publicaciones (posts)
// • Endpoint de comentarios (comments)
// Datos de salida:
// • Información detallada de la publicación:
// o Título
// o Contenido
// o Número de comentarios asociados

import { prompt } from "../index.js";

export const getPublica = async () => {
    const res = await fetch("http://localhost:3000/posts");
    return res.json();
};

export const getComenta = async () => {
    const res = await fetch("http://localhost:3000/comments");
    return res.json();
};

export const buscarPublicacion = async () => {
    try {
        
        const idPost = prompt("Ingrese el Id de la publicacion: ");

        const posts = await getPublica();
        const comments = await getComenta();

        // Buscar el post específico
        const post = posts.find(post => post.id == idPost);

        if (!post) {
            console.log("Publicación no encontrada");
            return;
        }

        // Contar comentarios del post
        let contador = 0;

        for (let i = 0; i < comments.length; i++) {
            if (comments[i].postId == post.id) {
                contador++;
            }
        }

        // Resultado final
        console.log("PUBLICACIÓN ENCONTRADA:\n");
        console.log(`Título: ${post.title}`);
        console.log(`Contenido: ${post.body}`);
        console.log(`Comentarios: ${contador}`);

    } catch (error) {
        console.error("Error:", error);
    }
};