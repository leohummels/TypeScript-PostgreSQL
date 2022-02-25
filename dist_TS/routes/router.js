"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controller/product.controllers");
const buy_controllers_1 = require("../controller/buy.controllers");
//const controller = 
const router = (0, express_1.Router)();
//Product Routes
router.post('/products/post', product_controllers_1.postProduct);
router.get('/products/:id', product_controllers_1.getProductByID);
router.get('/products/list/:type', product_controllers_1.getAll);
router.put('/products/:id', product_controllers_1.putProduct);
router.delete('/products/:id', product_controllers_1.deleteProduct);
//Buy Routes
router.get('/products/kart/:id', buy_controllers_1.getOne_Kart);
exports.default = router;
