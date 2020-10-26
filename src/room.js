const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    id_room: Number,
    tlfn_contact: Number,
    city: String,
    price: String,
    num_room_available: Number,
    date_create: Date
})

module.exports = mongoose.model('Room', RoomSchema)