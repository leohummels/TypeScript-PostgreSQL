"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeById = exports.findAll = exports.findById = exports.updateProduct = exports.insertOne = void 0;
const database_1 = require("../config/database");
function insertOne(name, price, quanti) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)', [name, price, quanti])
            .then(res => { res.rows[0]; })
            .catch(err => console.log(err));
        let prod = createProduct(name, price, quanti);
        console.log(prod);
        return prod;
    });
}
exports.insertOne = insertOne;
function updateProduct(name, price, quanti, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.pool.query('UPDATE products SET name = $1, price = $2,quanti = $3 WHERE id = $4', [name, price, quanti, id])
            .then(res => {
            console.log(res.rows);
            return res.rows;
        })
            .catch(err => console.log(err));
        let prod = createProduct(name, price, quanti);
        console.log(prod);
        return prod;
    });
}
exports.updateProduct = updateProduct;
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.pool.query('SELECT * FROM products WHERE id = $1', [id])
            .then(res => {
            console.log(res.rows[0]);
            return res.rows[0];
        })
            .catch(err => console.error(err));
        return response;
    });
}
exports.findById = findById;
function findAll(ordenador) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.pool.query(`SELECT * FROM products ORDER BY ${ordenador} ASC`)
            .then((res) => {
            console.log(res.rows);
            return res.rows;
        })
            .catch(err => console.log(err));
        return response;
    });
}
exports.findAll = findAll;
function removeById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield yield database_1.pool.query('DELETE FROM PRODUCTS WHERE id = $1', [id])
            .then((res) => {
            console.log('Produto deletado com Sucesso!');
            return 'Produto deletado com Sucesso!';
        })
            .catch(err => console.log(err));
        return response;
    });
}
exports.removeById = removeById;
function createProduct(name, price, quanti) {
    const obj = {
        name: name,
        price: price,
        quanti: quanti
    };
    return obj;
}
