const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const indexProducto = {};
const Producto = require('../models/producto');


indexProducto.productosGet = async(req = request, res = response) => {
    
    const productos = await Producto.find({}).lean();

    res.json(productos);

    //res.render('productos/listproducts',{productos});
}
module.exports = indexProducto;