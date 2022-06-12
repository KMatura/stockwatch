import express from 'express';
import { login, logout, register, getSecret, isauthenticated } from '../controllers/index.js';
import { redirectLogin } from '../middleware/authentication.js';

const router = express.Router();

router.post('/login', login);

router.get('/logout', logout);

router.post('/register', register);

router.get('/users/:id/secret', getSecret, redirectLogin);

router.get('/isauthenticated', isauthenticated);

export default router;
