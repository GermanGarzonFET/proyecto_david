import { Router } from 'express';
import generoController from '../controllers/generos.controller';
/* import { verifyToken, isAdmin, isModerator } from '../middlewares/auntenticador';
 */


const router = Router();

//obtener todos
router.get('/genero', generoController.getGeneros);
//obtener uno por id
router.get('/genero/:id', generoController.getGenero);

//agregarautor
router.post('/genero',  generoController.addGenero);

//editar
router.put('/genero/:id',  generoController.editGenero);
//eliminar
router.delete('/genero/:id', generoController.deleteGenero);

export default router;