import express from 'express'
import multer from 'multer'
import {
	getAnimalList,
	insertAnimal,
	updateAnimal,
	deleteAnimal,
} from '../controller/animalController.js'

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images')
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname)
	},
})

const upload = multer({ storage: storage })
const router = express.Router()

router.get('/getAnimalList', getAnimalList)
router.post('/insertAnimal', upload.array('images'), insertAnimal)
router.put('/updateAnimal', updateAnimal)
router.delete('/deleteAnimal', deleteAnimal)

export default router
