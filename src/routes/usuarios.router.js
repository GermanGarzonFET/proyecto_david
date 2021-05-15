import { Router } from 'express';
import usuariosController from '../controllers/usuarios.controller';

const router = Router();

//obtener todos
router.get('/usuarios',usuariosController.getUsers);
//obtener uno por id
router.get('/usuarios/:id',  usuariosController.getUser);

//agregar
router.post('/usuarios', usuariosController.addUser);

//editar
router.put('/usuarios/:id',  usuariosController.editUser);
//eliminar
router.delete('/usuarios/:id', usuariosController.deleteUser);

export default router;