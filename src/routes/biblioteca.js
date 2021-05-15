import { Router } from 'express';
import bibliotecaController from '../controllers/biblioteca.controller';
/* import { verifyToken, isAdmin, isModerator } from '../middlewares/auntenticador';
 */

const router = Router();

//obtener todos
router.put('/biblioteca/:id_user/:id_pelicula', bibliotecaController.addFavoritas);
router.delete('/biblioteca/:id_user/:id_pelicula', bibliotecaController.removeFavoritas);

router.put('/verdespues/:id_user/:id_pelicula', bibliotecaController.addVerDespues);
router.delete('/verdespues/:id_user/:id_pelicula', bibliotecaController.removeVerDespues);

router.put('/vistas/:id_user/:id_pelicula', bibliotecaController.addVistas);
router.delete('/vistas/:id_user/:id_pelicula', bibliotecaController.removeVistas);

/* //obtener uno por id
router.get('/actores/:id', actoresController.getActor);
//agregarautor
router.post('/actores', actoresController.addActores);
//editar
router.put('/actores/:id',  actoresController.editActores);
//eliminar
router.delete('/actores/:id',  actoresController.deleteActores); */

export default router;