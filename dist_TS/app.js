"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const router = router_1.default;
app.get('/', (req, res) => {
    res.send('Home page!');
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(router);
app.listen(3000, () => {
    console.log('Running...');
});
module.exports = app;
