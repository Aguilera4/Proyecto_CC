const room_type = { 
    HABITACION: 'habitacion', 
    VIVIENDA: 'vivienda'
}
Object.freeze(room_type)

class Room {
    
    // Constructor de la clase
    constructor(user_name,id_room,tlfn_contact,city,num_room_available,date_created,price,room_type,image=null){
        this.user_name = user_name;
        this.id_room = id_room;
        this.tlfn_contact = tlfn_contact;
        this.city = city;
        this.price = price;
        this.num_room_available = num_room_available;
        this.type = room_type;
        this.date_created = date_created;
        this.image = image;
    }

    // Modificamos el precio de una habitación
    modifyPrice(new_price){
        this.price = new_price;
    }

    // Cambiamos el número libre de habitaciones 
    changeNumRoomAvailable(n_room){
        this.num_room_available = n_room;
    }

}

module.exports = Room;