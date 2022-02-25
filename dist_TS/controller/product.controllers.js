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
exports.deleteProduct = exports.putProduct = exports.getProductByID = exports.getAll = exports.postProduct = void 0;
const model_products_1 = require("../model/model.products");
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, quanti } = req.body;
    const result = yield (0, model_products_1.insertOne)(name, price, quanti);
    res.status(200).send(result);
});
exports.postProduct = postProduct;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, model_products_1.findAll)(req.params.type);
    return res.status(200).send(result);
});
exports.getAll = getAll;
const getProductByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const model = yield (0, model_products_1.findById)(id);
    return res.status(200).send(model);
});
exports.getProductByID = getProductByID;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const { name, price, quanti } = req.body;
    const response = yield (0, model_products_1.updateProduct)(name, price, quanti, id);
    return res.status(200).send(response);
});
exports.putProduct = putProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const response = yield (0, model_products_1.removeById)(id);
    return res.status(200).send(response);
});
exports.deleteProduct = deleteProduct;
//export default Controller
