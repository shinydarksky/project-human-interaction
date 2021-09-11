import jwt from "jsonwebtoken"
export const loginController = (req, res) => {
    const { username, password } = req.body

    try {
        const token = { accessToken: jwt.sign({ userid: 'xxxxádxx' }, 'shhhhh') }
        res.status(200).json({ success: true, token })
    } catch (error) {
        res.status(500).json({ success: true, message:error})
    }

}