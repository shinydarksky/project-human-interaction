import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql'
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




var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dongvat"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected database!");
});




app.get('/',async (req,res)=>{
    const result = await con.query("SELECT * FROM hodongvat", function (err, result, fields) {
        if (err) throw err;
        console.log(result,fields);
    });

    console.log('-----------------------------',result);
    res.send({})
})

app.use('/auth',authRoute)

app.use('/admin',adminRoute)
