import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomname: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    link: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true
});


export default mongoose.model('Room', roomSchema);