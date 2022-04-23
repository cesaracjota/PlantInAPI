const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

const {usuariosGet,
    usuariosPost,
    usuariosCreate,
    editUsuario,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,} = require('../controller/usuarios')

router.get('/usuarios',usuariosGet);
module.exports = router;