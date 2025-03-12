const express = require('express');
const mongoose = require('mongoose');
// Importando librería CORS
const cors = require('cors');

// importando rutas de usuario
const userRoute = require('./routes/user.route');

const app = express();
// Agregando el parser JSON de express
app.use(express.json());
// Agregando el middleware de CORS para consumo de APIs en el mismo origen
app.use(cors());

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs version 1.0.0');
})

// Tareas CRUD y sus métodos
// C - Create -> post
// R - Recuperación -> get
// U - update -> put
// D - delete -> delete

// Endpoints para colección de usuarios
app.use('/api/users', userRoute);

// Realizar petición de conexión a mongodb
mongoose.connect('mongodb+srv://2311081047:YJBJr5YDvWJD80Yo@cluster0.n0buw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/myDatabase')
.then( () => {
    console.log('Se estableció la conexión a base de datos exitosamente');
    app.listen( 3000, () => {
        console.log('Servidor trabajando en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un error en la conexión a la base de datos') );