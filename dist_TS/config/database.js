"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
//import dotenv from 'dotenv/config'
dotenv_1.default.config();
exports.pool = new pg_1.Pool({
    connectionString: process.env.DATA_URL
});
/*pool.query("SELECT * FROM products",  (err, res) => {
    console.log(err, res);
    pool.end();
})*/ 
