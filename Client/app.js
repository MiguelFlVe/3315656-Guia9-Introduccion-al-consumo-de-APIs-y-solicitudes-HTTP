//Para ejecutar el programa es con "node Client/app.js"

// Importar las funciones desde index.js
import {
     
    // Importar las funciones desde Apropiación
    UsuariosDisponibles,
    crearPost,

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
            description: 'Descripción de la Solicitud 3',
        },

        Apr4 : {
            title: 'Solicitud 4',
            description: 'Realice una solicitud POST para crear una nueva publicación asociada a un usuario existente.',
        },
        
        Apr5 : {
            title: 'Solicitud 5',
            description: 'Descripción de la Solicitud 5',
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

    const { Apr1, Apr3, Apr4, Apr5, Apr7, Apr10 } = Apropiación;

    const { Tra4 } = Transferencia;

    switch (sect) {

        case '1':
            console.log(`Sección: Apropiación \n`);
            
            console.log(`Seleccione la solicitud a revisar: \n1. Solicitud 1 \n3. Solicitud 3 \n4. Solicitud 4 \n5. Solicitud 5 \n7. Solicitud 7 \n10. Solicitud 10 \n`);
            
            const apr = prompt(`Ingrese el número de la solicitud: `);

            switch(apr) {

                case '1':
                    console.log(`\n${Apr1.title} \n${Apr1.description} \n`);

                    const usuarios = await UsuariosDisponibles();

                    console.log("Usuarios disponibles:\n");

                    usuarios.forEach(usuario => {
                        console.log(`${usuario.id} - ${usuario.name}`);
                    });

                    return;

                case '3':
                    console.log(`\n${Apr3.title} \n${Apr3.description} \n`);
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

                   return;

                case '5':
                    console.log(`\n${Apr5.title} \n${Apr5.description} \n`);
                    break;

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

