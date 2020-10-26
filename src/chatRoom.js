const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
    id_room: Number,
    comment_text: String,
    name_user: String,
    date_create: Date,
})

module.exports = mongoose.model('ChatRoom', chatRoomSchema)