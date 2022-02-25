import {pool} from '../config/database'

export type productObject = {
    name: "",
    price: number,
    quanti: number,
}    
  

    export async function insertOne(name:string, price:number, quanti:number) { 
        const response = await pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)', [name, price, quanti])
                                    .then(res => { res.rows[0]})
                                    .catch(err => console.log(err));
        
        let prod = createProduct(name, price, quanti)
                                    console.log(prod)
                                    return prod                                                                                                                                                                
    }    
    
    export async function updateProduct(name:string, price:number, quanti:any, id:number) {
        const response = await pool.query('UPDATE products SET name = $1, price = $2,quanti = $3 WHERE id = $4', [name, price, quanti, id])
                                    .then(res => { console.log(res.rows)
                                                    return res.rows})
                                    .catch(err => console.log(err));
    
        let prod = createProduct(name, price, quanti)
                                    console.log(prod)
                                    return prod    
    }
    
    export async function findById (id:number) {
       const response = await pool.query('SELECT * FROM products WHERE id = $1', [id])
                                    .then(res =>{ console.log(res.rows[0])
                                                  return res.rows[0]})
                                    .catch( err => console.error(err));
                                    return response
    }

    export async function findAll(ordenador: any) { 
        const response = await pool.query(`SELECT * FROM products ORDER BY ${ordenador} ASC`) 
                                    .then((res) => { console.log(res.rows)
                                                     return res.rows})
                                    .catch(err => console.log(err));
                                    return response 
     }

    export async function removeById(id:number) {
        const response = await await pool.query('DELETE FROM PRODUCTS WHERE id = $1', [id])
                                         .then((res) => { console.log('Produto deletado com Sucesso!')
                                                        return 'Produto deletado com Sucesso!'})
                                         .catch(err => console.log(err))

                                         return response
    }

    function createProduct(name:string, price:number, quanti:number) {
        const obj = {
            name:name,
            price:price,
            quanti:quanti
        }
        return obj
    }