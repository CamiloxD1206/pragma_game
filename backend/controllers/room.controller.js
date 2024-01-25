import Room from '../models/room.model.js';

export const createRoom = async(req, res) => {
    const { roomname } = req.body;

    try {

        const { id: userId } = req.user;

        const existingRoom = await Room.findOne({ roomname });
        if (existingRoom) {
            return res.status(400).json({ message: "La sala ya existe." });
        }

        const newRoom = new Room({ roomname, createdBy: userId });
        const roomSaved = await newRoom.save();

        res.status(201).json({ id: roomSaved._id, roomname: roomSaved.roomname, createdBy: roomSaved.createdBy });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getRoomDetails = async(req, res) => {
    const { roomId } = req.params;

    try {
        const roomDetails = await Room.findById(roomId).populate('createdBy', 'username');

        if (!roomDetails) {
            return res.status(404).json({ message: 'Sala no encontrada' });
        }

        res.status(200).json({
            id: roomDetails._id,
            roomname: roomDetails.roomname,
            createdBy: roomDetails.createdBy.username,
            createdAt: roomDetails.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};