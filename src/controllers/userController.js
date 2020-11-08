var user = require('../models/user');

class UserController {

    constructor(){
        this.user_dic = {};
    }

    createUser(name,email,city,tlfn,age){
        if(!(name in this.user_dic)){
            if(this.isOlder(age)){
                var new_user = new user(name,email,city,tlfn,age);
                this.user_dic[name] = new_user;
            }else{
                console.log("You aren't of legal age.")
            }
        }else{
            console.log("This user already exists.")
        }
    }

    isOlder(age){
        var is_older = false;
        
        if(age>18){
            is_older = true;
        }
        return is_older;
    }

    getUser(user_name){
        if(user_name in this.user_dic){
            return this.user_dic[user_name];
        }else {
            console.log("This user not exists.")
        }
    }

    deleteUser(user_name){
        if(user_name in this.user_dic){
            delete this.user_dic[user_name];
            console.log('Deleted user.')
        }else {
            console.log("This user not exists.")
        } 
    }

    changeTlfn(user_name,new_tlfn){
        if(user_name in this.user_dic){
            this.user_dic[user_name].changeTlfn(new_tlfn);
        }else {
            console.log("This user not exists.")
        }
    }

    changeEmail(user_name,new_email){
        if(user_name in this.user_dic){
            this.user_dic[user_name].changeEmail(new_email);
        }else {
            console.log("This user not exists.")
        }
    }
}

module.exports = UserController;