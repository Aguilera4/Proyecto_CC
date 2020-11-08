class User {
 
    // Constructor de la clase
    constructor(name,email,city,tlfn,age){
        this.name = name;
        this.email = email;
        this.city = city;
        this.tlfn = tlfn;
        this.age = age;
    }

    // Cambio de email
    changeEmail(new_email){
        this.email = new_email;
    }

    // Cambio de email
    changeTlfn(new_tlfn){
        this.tlfn = new_tlfn;
    }

    // Obtener email
    getEmail(){
        return this.email;
    }

    // Obtener telefono
    getTlfn(){
        return this.tlfn;
    }

    // Obtener edad
    getAge(){
        return this.age;
    }
}

module.exports = User;