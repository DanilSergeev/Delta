"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/contact', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Thank you for your interest, ${name},` });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
