import express from 'express';
import { getUsers, deleteUser, createUsers, updateUser, login } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/', getUsers)
router.post('/login', login)
router.delete('/:id', deleteUser)
router.post('/', createUsers)
router.put('/:id', updateUser);
export default router;