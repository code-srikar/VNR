import express from 'express';
import { getUsers, deleteUser, createUsers, updateUser } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/', getUsers)
router.delete('/:id', deleteUser)
router.post('/', createUsers)
router.put('/:id', updateUser);
export default router;