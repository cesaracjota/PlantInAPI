
const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    rfc: {
        type: String,
    },
    nombre: {
        type: String,
    },

    informacion : {
        type: String
    },
    img: {
        type: String,
    }
});
module.exports = model( 'Plantas', ProductoSchema );