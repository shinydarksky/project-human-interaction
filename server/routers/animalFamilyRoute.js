import express from 'express'
import {
	getAnimalFamilyList,
	insertAnimalFamily,
	updateAnimalFamily,
	deleteAnimalFamily,
} from '../controller/animalFamilyController.js'

const router = express.Router()

router.get('/getAnimalFamilyList', getAnimalFamilyList)
router.post('/insertAnimalFamily', insertAnimalFamily)
router.put('/updateAnimalFamily', updateAnimalFamily)
router.delete('/deleteAnimalFamily', deleteAnimalFamily)

export default router
