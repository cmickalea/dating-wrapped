import express from 'express'
import {registerUser, getUser, login} from '../controllers/userController.js'
const router = express.Router();

router.post('/signup', registerUser)
router.post('/login', login)
router.get('/profile', getUser)

export default router;