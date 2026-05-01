// Enunciado 1: (Usuarios activos y sus publicaciones)
// Una aplicación web requiere mostrar un listado de usuarios activos junto con la cantidad
// de publicaciones que han realizado. Sin embargo, no todos los usuarios han creado
// publicaciones. El sistema debe identificar correctamente estos casos.
// Requerimientos
// • Consultar la lista completa de usuarios.
// • Consultar la lista de publicaciones.
// • Identificar cuáles usuarios tienen publicaciones asociadas.
// • Calcular la cantidad de publicaciones por usuario.
// • Mostrar también los usuarios que no tienen publicaciones.
// Datos de entrada
// • Endpoint de usuarios (users).
// • Endpoint de publicaciones (posts).
// • Identificador del usuario (userId)
// Datos de salida
// • Listado de usuarios con:
// o Nombre del usuario
// o Cantidad de publicaciones asociadas (puede ser 0)

export const getUsuarios = async () => {
    const respuesta = await fetch("http://localhost:3000/users");
    return respuesta.json();
};

export const getPosts = async () => {
    const respuesta = await fetch("http://localhost:3000/posts");
    return respuesta.json();
};

export const usuariosConPosts = async () => {
    try {
        console.log("Usuarios y cantidad de publicaciones:\n");

        const usuarios = await getUsuarios();
        const posts = await getPosts();

        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            let contador = 0;

            for (let j = 0; j < posts.length; j++) {
                if (posts[j].userId === usuario.id) {
                    contador++;
                }
            }

            console.log(`👤 ${usuario.name} → 📝 ${contador} publicaciones`);
        }

    } catch (error) {
        console.error("❌ Error al obtener datos:", error);
    }
};