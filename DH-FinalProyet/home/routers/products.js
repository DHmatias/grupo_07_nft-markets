const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.coleccion);
router.get('/productDetail', productsController.detalle);

module.exports = router;