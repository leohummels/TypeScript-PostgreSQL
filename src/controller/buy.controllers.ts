import { Request, Response} from 'express'
import { updateProduct, productObject, findById } from '../model/model.products';



export const getOne_Kart = async (req:Request<{id: string}>, res:Response) => { 
    const id = Number(req.params.id)
    const response = await findById(id)

    let countQuanti = response.quanti - 1
    
    const product:productObject = await {
        name: response.name,
        price: response.price,
        quanti: countQuanti
    }

    const update = await updateProduct(product.name, product.price, product.quanti, id)
    res.send(update)

}   
//Parei aqui!
  
    
    