import { Router } from 'express';
import { createUser, getUsers, getUser } from '../controllers/users';

const router = Router(); // создали роутер

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:_id', getUser);

export default router;
