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
exports.getOne_Kart = void 0;
const model_products_1 = require("../model/model.products");
const getOne_Kart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const response = yield (0, model_products_1.findById)(id);
    let countQuanti = response.quanti - 1;
    const product = yield {
        name: response.name,
        price: response.price,
        quanti: countQuanti
    };
    const update = yield (0, model_products_1.updateProduct)(product.name, product.price, product.quanti, id);
    res.send(update);
});
exports.getOne_Kart = getOne_Kart;
//Parei aqui!
