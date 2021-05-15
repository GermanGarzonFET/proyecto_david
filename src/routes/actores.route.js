import { Router } from 'express';
import actoresController from '../controllers/actores.controller';
/* import { verifyToken, isAdmin, isModerator } from '../middlewares/auntenticador';
 */

const router = Router();

//obtener todos
router.get('/actores', actoresController.getActores);
//obtener uno por id
router.get('/actores/:id', actoresController.getActor);
//agregarautor
router.post('/actores', actoresController.addActores);
//editar
router.put('/actores/:id',  actoresController.editActores);
//eliminar
router.delete('/actores/:id',  actoresController.deleteActores);

export default router;