import express from 'express';
import {register, home, login} from './authController.js'
const router = express.Router();

router.route("/").get(home);
router.route('/register').post(register);
router.route("/login").post(login);
router.route("/home").post(home);
export default router;