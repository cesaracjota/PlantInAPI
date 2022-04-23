
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    rfc: {
        type: String,
    },
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    telefono: {
        type: String,
    },
    correo: {
        type: String
    }
});



/*UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}*/

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Usuarios', UsuarioSchema );
