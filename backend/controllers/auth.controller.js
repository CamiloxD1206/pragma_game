import User from '../models/user.model.js'
import { createAccesToken } from '../libs/jwt.js';

export const register = async(req, res) => {
    const { username } = req.body;

    try {
        const newUser = new User({
            username
        })
        const userSaved = await newUser.save()
        const token = await createAccesToken({ id: userSaved._id })
        res.cookie('token', token)

        res.json({
            username: userSaved.username
        })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }


}

export const login = async(req, res) => {
    const { username } = req.body;

    try {

        const userFound = await User.findOne({ username })

        if (!userFound) return res.status(400).json({ message: "User not found" })


        const token = await createAccesToken({ id: userFound._id })


        res.cookie('token', token)
        res.json({
            username: userFound.username
        })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }


}


export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}
export const profile = async(req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

    return res.json({ id: userFound._id, username: userFound.username })

}