import jwt from "jsonwebtoken"
export const loginController = (req,res)=>{
    const {username,password} = req.body
    const token = {accessToken:jwt.sign({ userid: 'xxxxxx' }, 'shhhhh')}
    const accessToken = token.accessToken
    var decoded =  jwt.verify(accessToken,'shhhhh')

    res.send({data:decoded})
}