
const { Schema, model } = require('mongoose');
var mongoose = require("mongoose");

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,        
        ref:'usuario'
    }
});
//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Categoria', CategoriaSchema );