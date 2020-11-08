var should = require("should"),
userController = require("./src/controllers/userController.js");

    describe('Rooming', function(){
        describe('crearUsuario', function(){
            it('Deberia crear el usuario', function(){
                var new_user = new userController;
                new_user.createUser('Sergio','sergioaguilera@correo.ugr.es','Granada','958473825','22');
                new_user.getUser('Sergio').should.have.property('name','Sergio');
            });
        });
    });