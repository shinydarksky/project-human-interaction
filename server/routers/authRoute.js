import express from 'express'
import { loginController } from '../controller/loginController.js'

const router = express.Router()


router.get('/',(req,res)=>{
    res.send('123')
})

router.post('/login',loginController)

export default router