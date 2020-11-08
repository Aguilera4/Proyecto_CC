var room = require('../models/room');

class RoomController {

    constructor(){
        this.rooms = {};
    }

    createRoom(user_name,id_room,tlfn_contact,city,num_room_available,date_created,price,room_type,image=null){

        if(!(id_room in this.rooms)){
            var new_room = new room(user_name,id_room,tlfn_contact,city,num_room_available,date_created,price,room_type,image=null);
            this.rooms[id_room] = new_room;
            console.log("Room created.")
        }else{
            console.log("This id_room already exists.")
        }
        
    }

    getRoom(id_room){
        if(id_room in this.rooms){
            return this.rooms[id_room];
        }else{
            console.log("This id_room not exists.");
        }
    }
}

module.exports = RoomController;
