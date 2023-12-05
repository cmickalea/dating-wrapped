import express from 'express'
import {registerUser, getUser, login} from '../controllers/userController.js'
import {protect} from '../middlewares/auth.js';
const router = express.Router();

router.post('/signup', registerUser)
router.post('/login', login)
router.get('/me', protect, getUser)


export default router;