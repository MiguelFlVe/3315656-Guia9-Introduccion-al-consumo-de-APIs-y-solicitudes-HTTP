//Para ejecutar el programa es con "node Client/app.js"

// Importar las funciones desde index.js
import {
    // Importar las funciones desde Apropiación
    
    // Solicitud 1
    UsuariosDisponibles,

    // Solicitud 3
    postsDisponibles,

    // Solicitud 5
    newComment,

    //Solicitud 6
    actualizarPublicacion,

    // Importar las funciones desde Transferencia

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
        Apr3 : {
            title: 'Solicitud 3',
            description: 'Realice una solicitud GET para obtener todas las publicaciones (posts) asociadas a un usuario determinado.',
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
            description: 'Descripción de la Solicitud 7',
        },
        
        Apr10: {
            title: 'Solicitud 10',
            description: 'Descripción de la Solicitud 10',
        }
    },

    Transferencia: {
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

    const { Apr1, Apr3, Apr5, Apr6, Apr7, Apr10 } = Apropiación;

    const { Tra4 } = Transferencia;

    switch (sect) {

        case '1':
            console.log(`Sección: Apropiación \n`);
            
            console.log(`Seleccione la solicitud a revisar: \n1. Solicitud 1 \n3. Solicitud 3 \n5. Solicitud 5 \n6. Solicitud 6 \n7. Solicitud 7 \n10. Solicitud 10 \n`);
            
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

                case '3':
                    console.log(`\n${Apr3.title} \n${Apr3.description} \n`);
                    
                    const posts = await postsDisponibles();

                    console.log("Publicaciones disponibles:\n");

                    posts.forEach(post => {
                        console.log(`    id: ${post.id} \nuserId: ${post.userId} \n title: ${post.title} \n  body: ${post.body} \n`);
                    });
                    
                    break;

                case '5':
                    console.log(`\n${Apr5.title} \n${Apr5.description} \n`);
                    
                    const title = prompt(`Ingrese el título del comentario: `);

                    const body = prompt(`Ingrese el cuerpo del comentario: `);

                    if (title.trim() === '' && body.trim() === '') {
                        console.log(`Error: Todos los campos son obligatorios.`);
                    } else {
                        const comentario = await newComment(title, body);
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

                    return;
                    

                case '7':
                    console.log(`\n${Apr7.title} \n${Apr7.description} \n`);
                    
                    break;

                case '10':
                    console.log(`\n${Apr10.title} \n${Apr10.description} \n`);
                    
                    break;

                default:
                    console.log(`Opción no válida`);
                    
                    break;
            }

            break;

        case '2':
            console.log(`Sección Transferencia \n`);

            console.log(`Seleccione el enunciado a revisar: \n4. Enunciado 4 \n`);

            const tra = prompt(`Ingrese el número del enunciado: `);

            switch(tra) {
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