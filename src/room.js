class Room {
    
    // Constructor de la clase
    constructor(id_room,tlfn_contact,city,price,num_room_available,type,date_created,image=null){
        this.id_room = id_room;
        this.tlfn_contact = tlfn_contact;
        this.city = city;
        this.price = price;
        this.num_room_available = num_room_available;
        this.type = type;
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