//importaciones de las librerias
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors'
import fileUpload from 'express-fileupload'


//creando el servidor

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(fileUpload());




//rutas
app.get('/', (req, res) => {
    res.json({
        "imformacion del proyecto": {
            "data":"demo 01 Api DShare"
        },

    })
});


//importaciones de las rutas

import RolesRouter from './routes/roles.router';
import UserRouter from './routes/usuarios.router';
import LoginRouter from './routes/login.router';
import PeliculasRouter from './routes/peliculas.router';
import GenerosRouter from './routes/generos.route';
import ActoresRouter from './routes/actores.route';
import BibliotecaRouter from './routes/biblioteca';





app.use('/api',RolesRouter);
app.use('/api',UserRouter);
app.use('/api',LoginRouter);
app.use('/api',PeliculasRouter);
app.use('/api',GenerosRouter);
app.use('/api',ActoresRouter);
app.use('/api',BibliotecaRouter);







//libs
import { createRoles } from './libs/onInit';
createRoles();

//exportando el app
module.exports = app;