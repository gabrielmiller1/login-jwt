const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', auth, (req, res) => {

    if(req.user.admin){
        res.send('Acesso concedido')
    } else{
        res.send('Not admin: Access Danied');
    }
});

module.exports = router;