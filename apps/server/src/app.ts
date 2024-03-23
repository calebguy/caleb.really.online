import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const PORT = 3005;

const app = express();
const server = createServer(app)
const io = new Server(server);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

io.on('connection', (socket) => {
  console.log('user connected')
})

app.listen(PORT).on('listening', () => {
  console.log(`Server is listening on ${PORT}`)
})
