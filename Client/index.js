// Exportar las funciones desde Apropiación
export { UsuariosDisponibles } from './Apropiación/Solicitud 1.js';
export { UsuarioId } from './Apropiación/Solicitud 2.js';
export { postsDisponibles } from './Apropiación/Solicitud 3.js';
export { crearPost } from './Apropiación/Solicitud 4.js';
export { newComment } from './Apropiación/Solicitud 5.js';
export { actualizarPublicacion } from './Apropiación/Solicitud 6.js';
export { updatePost } from './Apropiación/Solicitud 7.js';
export { borrarPost } from './Apropiación/Solicitud 8.js';
export { verificarPost } from './Apropiación/Solicitud 9.js';
export { generalGet } from './Apropiación/Solicitud 10.js';

// Exportar las funciones desde Transferencia
export {getUsuarios, getPosts, usuariosConPosts} from './Transferencia/Enunciado 1.js';
export { deletePostVerifyComments } from './Transferencia/Enunciado 4.js';

// Funciones globales
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
export { prompt };