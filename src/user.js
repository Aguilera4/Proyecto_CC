class User {
 
    // Constructor de la clase
    constructor(name,email,city,password,tlfn,age){
        this.name = name;
        this.email = email;
        this.city = city;
        this.password = password;
        this.tlfn = tlfn;
        this.age = age;
    }

    // Cambio de email
    changeEmail(new_email){
        this.email = new_email;
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