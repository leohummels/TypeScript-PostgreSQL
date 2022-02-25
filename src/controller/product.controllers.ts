import {Request, Response} from 'express'
import { findAll, findById, insertOne, removeById, updateProduct } from '../model/model.products';


export const postProduct = async (req:Request, res:Response) => {
            const { name, price, quanti } = req.body
                const result = await insertOne(name, price, quanti)
                res.status(200).send(result)
    }

export const getAll = async (req:Request, res:Response) => { 
      const result = await findAll(req.params.type) 
      return res.status(200).send(result)
    }

export const getProductByID = async (req:Request<{id: string}>, res:Response) => { 
        const id = Number(req.params.id)
        const model = await findById(id)
        return res.status(200).send(model)      
}


export const putProduct = async (req:Request<{id: string}>, res:Response) => { 
    const id = Number(req.params.id)
    const {name, price, quanti} = req.body
    const response = await updateProduct(name, price, quanti, id)
    return res.status(200).send(response)        
}

export const deleteProduct = async (req:Request<{id: string}>, res:Response) => {
    const id = Number(req.params.id)
    const response =await removeById(id)
        return res.status(200).send(response)
}


//export default Controller