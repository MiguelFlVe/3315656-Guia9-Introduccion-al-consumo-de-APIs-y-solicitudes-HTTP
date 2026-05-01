//Para ejecutar el programa es con "node Client/app.js"

// Importar las funciones desde index.js
import {
    // Importar las funciones desde Apropiación
    
    // Solicitud 1
    UsuariosDisponibles,
    
    //Solicitud 2
    UsuarioId, 

    // Solicitud 3
    postsDisponibles,

    //Solicitud 4
    crearPost,

    // Solicitud 5
    newComment,

    //Solicitud 6
    actualizarPublicacion,
    
    // Solicitud 7
    updatePost,
    //Solicitud 8
    borrarPost,
    
    //Solicitud 9
    verificarPost,
    
    // Solicitud 10
    generalGet,


    // Importar las funciones desde Transferencia

    //Enunciado 1
    usuariosConPosts,


    // Funciones globales
    prompt
} from './index.js';

// Objeto de sección
const secciones = {
    Apropiación: {
        Apr1 : {
            title: 'Solicitud 1',
            description: 'Realice una solicitud GET para obtener la lista completa de usuarios disponibles en el servicio.',
        },
        Apr2 : {
            title: 'Solicitud 2',
            description: 'Realice una solicitud GET para consultar la información de un usuario, utilizando su ID.',
        },
        Apr3 : {
            title: 'Solicitud 3',
            description: 'Realice una solicitud GET para obtener todas las publicaciones (posts) asociadas a un usuario determinado.',
        },

        Apr4 : {
            title: 'Solicitud 4',
            description: 'Realice una solicitud POST para crear una nueva publicación asociada a un usuario existente.',
        },
        
        Apr5 : {
            title: 'Solicitud 5',
            description: 'Realice una solicitud POST para registrar un nuevo comentario relacionado con una publicación.',
        },
        
        Apr6 : {
            title: 'Solicitud 6',
            description: 'Realice una solicitud PUT para actualizar completamente la información de una publicación existente.',
        },
        
        Apr7 : {
            title: 'Solicitud 7',
            description: 'Realice una solicitud PATCH para modificar únicamente un campo específico de esa publicación.',
        },

        Apr8 : {
            title: 'Solicitud 8',
            description: 'Realice una solicitud DELETE para eliminar una publicación existente',
        },

        Apr9 : {
            title: 'Solicitud 9',
            description: 'Repita una solicitud GET sobre el recurso eliminado o modificado y analice la respuesta obtenida.',
        },

        Apr10: {
            title: 'Solicitud 10',
            description: 'Realice una solicitud GET general y compare la estructura de la respuesta con las solicitudes anteriores, identificando cambios y comportamientos del servicio.',
        }
    },

    Transferencia: {
        Tra1 : {
            title: 'Enunciado 1',
            description: 'Usuarios activos y sus publicaciones',
        },

        Tra4 : {
            title: 'Enunciado 4',
            description: 'Descripción del Enunciado 4',
        }
    }
};

// Menú principal

//Se agrega el async para que funcione el codigo porque estamos manejando await
const main = async () => {

    console.log(`Guía 9 - Introducción al consumo de APIs y solicitudes HTTP \n`);

    console.log(`Integrantes: \nMiguel Flórez - Líder \nOscar Solano \n`);

    console.log(`Seleccione la sección a revisar: \n1. Apropiación \n2. Transferencia \n`);

    const sect = prompt(`Ingrese el número de la sección: `);

    const { Apropiación, Transferencia } = secciones;

    const { Apr1, Apr2, Apr3, Apr4, Apr5, Apr6, Apr7, Apr8, Apr9, Apr10 } = Apropiación;

    const { Tra1, Tra4 } = Transferencia;

    switch (sect) {

        case '1':
            console.log(`Sección: Apropiación \n`);
            
            console.log(`Seleccione la solicitud a revisar: \n1. Solicitud 1 \n2 Solicitud 2 \n3. Solicitud 3 \n4. Solicitud 4 \n5. Solicitud 5 \n6. Solicitud 6 \n7. Solicitud 7 \n.8 Solicitud 8 \n9. Solicitud 9 \n10. Solicitud 10 \n`);
            
            const apr = prompt(`Ingrese el número de la solicitud: `);

            switch(apr) {

                case '1':
                    console.log(`\n${Apr1.title} \n${Apr1.description} \n`);

                    const usuarios = await UsuariosDisponibles();

                    console.log("Usuarios disponibles:\n");

                    usuarios.forEach(usuario => {
                        console.log(`${usuario.id} - ${usuario.name}`);
                    });

                    break;

                case '2':
                    console.log(`\n${Apr2.title} \n${Apr2.description} \n`);
                
                    const id = prompt("Ingrese el ID del usuario: ")
                    const usuario = await(UsuarioId(id))
            
                    console.log("Usuario Encontrado: ")
                    console.log(usuario)

                    break;    

                case '3':
                    console.log(`\n${Apr3.title} \n${Apr3.description} \n`);
                    
                    const posts = await postsDisponibles();

                    console.log("Publicaciones disponibles:\n");

                    posts.forEach(post => {
                        console.log(`    id: ${post.id} \nuserId: ${post.userId} \n title: ${post.title} \n  body: ${post.body} \n`);
                    });
                    
                    break;

                case '4':
                    console.log(`\n${Apr4.title} \n${Apr4.description} \n`);
                    
                    console.log(`\nCrear nueva publicación\n`);

                    const userId = prompt("Ingresa el ID del usuario: ");
                    const title = prompt("Título del post: ");
                    const body = prompt("Contenido del post: ");

                    const nuevoPost = await crearPost(userId, title, body);

                    console.log("Post creado:");
                    console.log(nuevoPost);

                    break;
   

                case '5':
                    console.log(`\n${Apr5.title} \n${Apr5.description} \n`);
                    
                    const titulo = prompt(`Ingrese el título del comentario: `);

                    const cuerpo = prompt(`Ingrese el cuerpo del comentario: `);

                    if (titulo.trim() === '' || cuerpo.trim() === '') {
                        console.log(`Error: Todos los campos son obligatorios.`);
                    } else {
                        const comentario = await newComment(titulo, cuerpo);
                        console.log(`Comentario registrado: \n${JSON.stringify(comentario, null, 2)}`);
                    }

                    break;

                case '6':

                    console.log(`\n${Apr6.title} \n${Apr6.description} \n`);
                    
                    const id = parseInt(prompt("Ingrese el ID del usuario para actualizar la publicacion: "))

                    const titulo = prompt("Ingrese el nuevo titulo: ")
                    const cuerpo = prompt("Ingrese el nuevo contenido: ")
                    
                    if (!id || !title || !body) {
                     console.log("No puedes dejar campos vacíos");
                    } else {  const nuevaData = {
                         id,       
                         title,
                         body
                    };

                    const actualizacion = await actualizarPublicacion(id, nuevaData);
                    console.log(`Publicacion actualizada ${actualizacion}`);

                    break;
                    

                case '7':
                    console.log(`\n${Apr7.title} \n${Apr7.description} \n`);

                    const postId = prompt(`Ingrese el ID de la publicación a modificar: `);
                    
                    const newBody = prompt(`Ingrese el nuevo cuerpo de la publicación: `);

                    if (postId.trim() === '' || newBody.trim() === '') {
                        console.log(`Error: Todos los campos son obligatorios.`);
                    } else {
                        const postActualizado = await updatePost(postId, newBody);
                        console.log(`Publicación actualizada.`);
                    }

                    break;

                case '8':
                    console.log(`\n${Apr8.title} \n${Apr8.description} \n`);

                    const eliminar = prompt("ID del post a eliminar")
                    const ID = parseInt(eliminar)

                    if(!ID || ID <= 0){
                        console.log("Id invalido")

                        break
                    }

                    const eliminado = await borrarPost(ID)

                    if (eliminado){
                        console.log("Eliminado correctamente")
                    }
                    else {
                        console.error("No fue posible eliminar")
                    }
                    
                    return;
                case '9':
                    console.log(`\n${Apr9.title} \n${Apr9.description} \n`);

                    const verificar = prompt("Ingrese el ID del post: ")
                    const ide = parseInt(verificar)

                    if(!ide || ide <= 0){
                        console.log("Id invalido")
                        return;
                    }
                    
                    //Eliminamos o modificamos
                    const eliminado = await borrarPost(ide);

                    if(eliminado) {
                        console.log("Eliminado correctamente")
                    }
                    
                    //Verificamos la respuesta con GET
                    const verificacion = await verificarPost(ide)

                    if(!verificacion){
                        console.error("El recurso no existe en el servidor")
                    }
                    else {
                        console.log(`Recurso disponible ${verificacion}`)

                    }
                    return

                case '10':
                    console.log(`\n${Apr10.title} \n${Apr10.description} \n`);

                    const datosGenerales = await generalGet();

                    console.log("Datos obtenidos:\n");

                    console.log(JSON.stringify(datosGenerales, null, 2));
                    
                    break;

                default:
                    console.log(`Opción no válida`);
                    
                    break;
            }

            break;

        case '2':
            console.log(`Sección Transferencia \n`);

            console.log(`Seleccione el enunciado a revisar: \n1. Enunciado 1 \n4. Enunciado 4 \n`);

            const tra = prompt(`Ingrese el número del enunciado: `);

            switch(tra) {
                case '1':
                    console.log(`\n${Tra1.title} \n${Tra1.description} \n`);
                    
                    await usuariosConPosts()
                    
                    return
                case '4':
                    console.log(`\n${Tra4.title} \n${Tra4.description} \n`);
                    
                    break;

                default:
                    console.log(`Opción no válida`);
                    
                    break;
            }

            break;

        default:
            console.log(`Opción no válida`);
            
            break;
    }
};


main();