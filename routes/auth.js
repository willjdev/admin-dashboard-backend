/* 
    Rutas de usuarios / auth
    host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/fieldValidators');

const { createMockData, loginUser } = require('../controllers/auth')

const router = Router();


router.post(
    '/',
    [
        check('name', 'Name required').not().isEmpty(),
        check('email', 'Email required').isEmail(),
        validarCampos
    ],
    loginUser );

router.post(
    '/mockdata',
    createMockData
)




module.exports = router;