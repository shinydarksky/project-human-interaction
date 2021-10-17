import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import adminRoute from './routers/adminRoute.js'
import authRoute from './routers/authRoute.js'
import animalFamilyRoute from './routers/animalFamilyRoute.js'

const app = express()
const PORT = 8080

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.listen(PORT, () => {
	console.log(`Server running with PORT: ${PORT}`)
})

app.use('/auth', authRoute)
app.use('/admin', adminRoute)
app.use('/animalFamily', animalFamilyRoute)
