import { Router } from 'express';
import peliculasController from '../controllers/peliculas.controllers';

const router = Router();

//obtener todos
router.get('/peliculas',peliculasController.getPeliculas);
//obtener uno por id
router.get('/peliculas/:id',  peliculasController.getPelicula);

//agregar
router.post('/peliculas', peliculasController.addPeliculas);

//editar
router.put('/peliculas/:id',  peliculasController.editPelicula);
//eliminar
router.delete('/peliculas/:id', peliculasController.deletePelicula);

export default router;