const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//Base de datos en memoria
let usuarios = [];

//GET todos
app.get('/usuarios', (req, res) => {
    try {
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" })
    }
})

//GET por ID
app.get('/usuarios/:id', (req, res) => {

    try {
        const id = req.params.id;
        const usuario = usuarios[id];

        if (!usuario) {
            return res.status(404).json({ error: "No encontrado" })
        }

        res.json(usuario)
    } catch (error) {
        res.status(500).json({ error: "Error en Get por id" })
    }
})

//POST (crear)
app.post('/usuarios', (req, res) => {
    try {
        const data = req.body

        if(!data.nombre || !data.edad){
            return res.status(400).json({error: "Datos incompletos"})
        }

       usuarios.push(data);

        res.json({ mensaje: "Creado correctamente", data });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" })
    }
})

//PUT (actualizar)
app.put('/usuarios/:id', (req, res) => {

    try {

        const id = req.params.id;

        if (!usuarios[id]) {
            return res.status(404).json({ error: "No encontrado" })
        }

        usuarios[id] = req.body
        res.json({ mensaje: "Actualizado...", data: usuarios[id] })

    } catch (error) {
        res.status(500).json({error: "Error en PUT"})
    }
})

//PATCH
app.patch('/usuarios/:id', (req, res) => {
    try {


        const id = req.params.id;

        if (!usuarios[id]) {
            return res.status(404).json({ error: "No existe" })
        }

        usuarios[id] = { ...usuarios[id], ...req.body }
        res.json({ mensaje: "Actualizado parcial", data: usuarios[id] })
    } catch (error) {
        res.status(500).json({ error: "Error en PATCH" })
    }
})

//DELETE
app.delete('/usuarios/:id', (req, res) => {
    try {
        const id = req.params.id;

        if (!usuarios[id]) {
            return res.status(404).json({ error: "No encontrado" })
        }

        usuarios.splice(id, 1)
        res.json({ mensaje: "Eliminado correctamente" })
    } catch (error) {
        res.status(500).json({ error: "Error en DELETE" })
    }
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})