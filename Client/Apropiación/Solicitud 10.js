// Realice una solicitud GET general y compare la estructura de la respuesta con las solicitudes anteriores, identificando cambios y comportamientos del servicio.

import express from 'express';

const app = express();

import { UsuariosDisponibles, postsDisponibles } from '../index.js';

export const comentariosDisponibles = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000/comments");
        const datos = await respuesta.json()

        return datos
    }
    catch(error) {
        console.error("Error al obtener comentarios: ", error)
    }
};

const generalGet = async () => {
    try {
        const usuarios = await UsuariosDisponibles();
        const posts = await postsDisponibles();
        const comentarios = await comentariosDisponibles();
        const datosGenerales = {
            usuarios: usuarios,
            posts: posts,
            comentarios: comentarios
        };
        return datosGenerales;
    } catch (error) {
        console.error("Error al obtener datos generales: ", error);
        res.status(500).json({ error: "Error al obtener datos generales" });
    }
};

export { generalGet };