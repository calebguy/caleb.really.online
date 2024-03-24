"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const PORT = 3005;
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server);
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({ message: 'hello' });
});
io.on('connection', (socket) => {
    console.log('user connected');
});
app.listen(PORT).on('listening', () => {
    console.log(`Server is listening on ${PORT}`);
});
