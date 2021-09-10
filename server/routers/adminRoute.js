import express from 'express'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('hallo this is load data from user')
})

export default router