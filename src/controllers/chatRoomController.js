const ChatRoom = require('../models/chatRoom');
var usuario = require('../models/chatRoom');

class ChatRoomController {

    constructor(){
        this.chatRoom = {};
    }

    createComment(id_room,id_comment,name_user,comment_text,date_created){
        if(!(id_room in this.chatRoom)){
                var new_comment = new ChatRoom(name_user,comment_text,date_created);
                this.chatRoom[id_room] = {};
                this.chatRoom[id_room][id_comment] = new_comment;
                console.log("Comment created.");
        }else{
            if(!(id_comment in this.chatRoom[id_room])){
                var new_comment = new ChatRoom(name_user,comment_text,date_created);
                this.chatRoom[id_room][id_comment] = new_comment;
                console.log("Comment created.");
            }else{
                console.log("This id_comment already exists.")
            }
        }
    }

    getComment(id_room,id_comment){
        return this.chatRoom[id_room][id_comment];
    }

    getChatRoom(id_room){
        return this.chatRoom[id_room];
    }
}

module.exports = ChatRoomController;
