import {Router} from 'express';
import {postProduct, getProductByID, getAll, putProduct, deleteProduct} from '../controller/product.controllers';
import {getOne_Kart} from '../controller/buy.controllers';


//const controller = 
const router = Router()

//Product Routes
router.post('/products/post', postProduct)
router.get('/products/:id', getProductByID)
router.get('/products/list/:type', getAll)
router.put('/products/:id', putProduct)
router.delete('/products/:id', deleteProduct)

//Buy Routes
router.get('/products/kart/:id', getOne_Kart)

export default router